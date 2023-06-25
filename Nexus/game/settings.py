from typing import List
from .dialogue_agent import DialogueAgent
from langchain.chat_models import ChatOpenAI
from langchain.schema import (
    HumanMessage,
    SystemMessage,
)

import os

os.environ["OPENAI_API_KEY"] = "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"

# Define roles and quest
character_names = ["Harry Potter", "Ron Weasley", "Hermione Granger", "Argus Filch"]
storyteller_name = "Dungeon Master"
quest = "Find all of Lord Voldemort's seven horcruxes."
stats = "Force, Dexterite, charisme, intelligence, constitution, Sagesse, Perception"
word_limit = 50  # word limit for task brainstorming



# Ask an LLM to add detail to the game description
game_description = f"""Here is the topic for a Dungeons & Dragons game: {quest}.
        The characters are: {*character_names,}.
        The story is narrated by the storyteller, {storyteller_name}."""

player_descriptor_system_message = SystemMessage(
    content="You can add detail to the description of a Dungeons & Dragons player.")


def generate_character_description(character_name):
    character_specifier_prompt = [
        player_descriptor_system_message,
        HumanMessage(content=
                     f"""{game_description}
            Please reply with a creative description of the character, {character_name}, in {word_limit} words or less. 
            Speak directly to {character_name}.
            Do not add anything else."""
                     )
    ]
    character_description = ChatOpenAI(temperature=1.0)(character_specifier_prompt).content
    return character_description


def generate_character_system_message(character_name, character_description):
    return SystemMessage(content=(
        f"""{game_description}
    Your name is {character_name}. 
    Your character description is as follows: {character_description}.
    You will propose actions you plan to take and {storyteller_name} will explain what happens when you take those actions.
    Speak in the first person from the perspective of {character_name}.
    For describing your own body movements, wrap your description in '*'.
    Do not change roles!
    Do not speak from the perspective of anyone else.
    Remember you are {character_name}.
    Stop speaking the moment you finish speaking from your perspective.
    Never forget to keep your response to {word_limit} words!
    Do not add anything else.
    """
    ))

character_descriptions = [generate_character_description(character_name) for character_name in character_names]
character_system_messages = [generate_character_system_message(character_name, character_description) for character_name, character_description in zip(character_names, character_descriptions)]

storyteller_specifier_prompt = [
    player_descriptor_system_message,
    HumanMessage(content=
                 f"""{game_description}
        Please reply with a creative description of the storyteller, {storyteller_name}, in {word_limit} words or less. 
        Speak directly to {storyteller_name}.
        Do not add anything else."""
                 )
]
storyteller_description = ChatOpenAI(temperature=1.0)(storyteller_specifier_prompt).content

storyteller_system_message = SystemMessage(content=(
    f"""{game_description}
You are the storyteller, {storyteller_name}. 
Your description is as follows: {storyteller_description}.
The other players will propose actions to take and you will explain what happens when they take those actions.
Speak in the first person from the perspective of {storyteller_name}.
Do not change roles!
Do not speak from the perspective of anyone else.
Remember you are the storyteller, {storyteller_name}.
Stop speaking the moment you finish speaking from your perspective.
Never forget to keep your response to {word_limit} words!
Do not add anything else.
"""
))

quest_specifier_prompt = [
    SystemMessage(content="You can make a task more specific."),
    HumanMessage(content=
                 f"""{game_description}

        You are the storyteller, {storyteller_name}.
        Please make the quest more specific. Be creative and imaginative.
        Please reply with the specified quest in {word_limit} words or less. 
        Speak directly to the characters: {*character_names,}.
        Do not add anything else."""
                 )
]
specified_quest = ChatOpenAI(temperature=1.0)(quest_specifier_prompt).content

def select_next_speaker(step: int, agents: List[DialogueAgent]) -> int:
    """
    Select the game master (index 0) after all other characters have spoken.
    Otherwise, select the other characters in a round-robin fashion.

    For example, with four characters with indices: 1 2 3 4
    The game master is index 0.
    Then the selected index will be as follows:

    step: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20

    idx:  1 2 3 4 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 0
    """
    if (step) % len(agents) == 0:
        idx = 0
    else:
        idx = ((step - 1) % (len(agents) - 1)) + 1
    return idx


