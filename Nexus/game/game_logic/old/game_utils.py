import re
from typing import List

def extract_mentions(text: str) -> List[str]:
    """
    Extracts mentioned character names from a given text.

    Args:
        text (str): The input text to extract mentions from.

    Returns:
        List[str]: A list of mentioned character names.
    """
    character_names = ["Harry Potter", "Ron Weasley", "Hermione Granger", "Argus Filch", "Dungeon Master"]
    mentioned_characters = []

    for name in character_names:
        if re.search(fr'\b{name}\b', text, re.IGNORECASE):
            mentioned_characters.append(name)

    return mentioned_characters

def check_word_limit(text: str, word_limit: int) -> bool:
    """
    Checks if the given text is within the specified word limit.

    Args:
        text (str): The input text to check.
        word_limit (int): The maximum allowed number of words.

    Returns:
        bool: True if the text is within the word limit, False otherwise.
    """
    words = text.split()
    return len(words) <= word_limit

def validate_message(text: str, word_limit: int) -> bool:
    """
    Validates a message based on the word limit and character mentions.

    Args:
        text (str): The input message to validate.
        word_limit (int): The maximum allowed number of words.

    Returns:
        bool: True if the message is valid, False otherwise.
    """
    if not check_word_limit(text, word_limit):
        return False

    mentions = extract_mentions(text)
    if len(mentions) > 1:
        return False

    return True
