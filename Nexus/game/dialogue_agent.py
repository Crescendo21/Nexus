from langchain.chat_models import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage

class DialogueAgent:
    def __init__(
        self,
        name: str,
        system_message: SystemMessage,
        model: ChatOpenAI,
        is_user_controlled: bool = False,
    ) -> None:
        self.name = name
        self.system_message = system_message
        self.model = model
        self.is_user_controlled = is_user_controlled
        self.prefix = f"{self.name}: "
        self.reset()

    def reset(self):
        self.message_history = ["Here is the conversation so far."]

    def send(self, message_content: str = None) -> str:
        """
        Applies the chatmodel to the message history
        and returns the message string
        """
        if self.is_user_controlled:
            if message_content is None:
                raise ValueError("User controlled characters must provide a message.")
            return message_content
        else:
            message = self.model(
                [
                    self.system_message,
                    HumanMessage(content="\n".join(self.message_history + [self.prefix])),
                ]
            )
            return message.content

    def receive(self, name: str, message: str) -> None:
        """
        Concatenates {message} spoken by {name} into message history
        """
        self.message_history.append(f"{name}: {message}")
