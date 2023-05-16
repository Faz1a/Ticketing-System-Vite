import os
from dotenv import load_dotenv
import redis

basedir = os.path.abspath(os.path.dirname(__file__))


load_dotenv()

class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = 'dev'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:1234@localhost/TicketingSystem'
    SQLALCHEMY_TRACK_MODIFICATIONS = False



class ProductionConfig(Config):
    DEBUG = False


class StagingConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class TestingConfig(Config):
    TESTING = True

class ApplicationConfig:
    SESSION_TYPE = 'redis'
    SESSION_PARAMETER = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url("redis://127.0.0.1:6379")