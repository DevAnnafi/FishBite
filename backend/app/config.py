from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "FishBite API"
    database_url: str = "sqlite:///./fishbite.db"

settings = Settings()
