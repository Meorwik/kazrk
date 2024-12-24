from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from typing import Final


templates: Final[Jinja2Templates] = Jinja2Templates(directory="src/templates")
static: Final[StaticFiles] = StaticFiles(directory="src/assets")
