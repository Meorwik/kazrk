from .endpoints import assessment_router
from fastapi import APIRouter
from typing import Final

api_router: Final[APIRouter] = APIRouter()
api_router.include_router(assessment_router, tags=["assessment"])
