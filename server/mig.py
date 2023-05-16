# !!! This file is used purely for migration !!!
# !!! All new added models need to be imported in the line:
# !!! from app.models.db.member import Member, User, ...
# !!! Migration steps:
# !!! export FLASK_APP=mig.py
# !!! flask db migrate 
# !!! flask db upgrade -m "migration update message"

# External 
from flask import Flask
import config
from flask_migrate import Migrate

# Internal
from app.models.db.booking import Booking
from app.models.db.payment import Payment
from app.models.db.preplanned_trip import PreplannedTrip
from app.models.db.route import Route
from app.models.db.schedule import Schedule
from app.models.db.service import Service
from app.models.db.station import Station
from app.models.db.ticket import Ticket
from app.models.db.train import Train
from app.models.db.travel_card import TravelCard
from app.models.db.user import User

def create_app():
    db_instance = db.getInstance()

    app = Flask(__name__)
    app.config.from_object(config.DevelopmentConfig)

    db_instance.init_app(app)
    migrate = Migrate(app, db_instance)
    return app

if __name__ == '__main__':
    app = create_app()
    app.run()