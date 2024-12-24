from dataclasses import dataclass
from typing import Final


@dataclass
class Config:
    project_name: Final[str] = "back"
    debug_mode: bool = True
    api_str: Final[str] = "/api"


config: Final[Config] = Config()
