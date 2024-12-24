from .loader import static, templates
from .routers.api import api_router
from .config import config
from fastapi import Request
from fastapi import FastAPI


app = FastAPI(
    title=config.project_name,
    openapi_url=f'{config.api_str}/openapi.json',
    debug=config.debug_mode
)

app.include_router(api_router, prefix=config.api_str)
app.mount("/assets", static)


@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse(
        request=request, name="index.jinja2"
    )
