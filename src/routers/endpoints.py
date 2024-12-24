from ..loader import templates
from fastapi import APIRouter
from fastapi import Request


assessment_router = APIRouter()


@assessment_router.get("/assessment")
async def start_assessment(request: Request):
    return templates.TemplateResponse(
        request=request, name="assessment.jinja2"
    )


@assessment_router.get("/prize")
async def get_prize(request: Request):
    return templates.TemplateResponse(
        request=request, name="prize.jinja2"
    )
