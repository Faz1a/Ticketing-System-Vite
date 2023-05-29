from flask import Flask, request, abort, jsonify
from config import ApplicationConfig
from app.models.db.shared import server as app_class
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
from app.blueprints.admin.bookingBlueprint import booking
from app.blueprints.admin.preplanned_tripBlueprint import preplannedTrip
from app.blueprints.admin.routeBlueprint import route
from app.blueprints.admin.scheduleBlueprint import schedule
from app.blueprints.admin.serviceBlueprint import service
from app.blueprints.admin.stationBlueprint import station
from app.blueprints.admin.ticketBlueprint import ticket
from app.blueprints.admin.trainBlueprint import train
from app.blueprints.admin.userBlueprint import user
from app.blueprints.user.registrationBlueprint import registration
from app.blueprints.user.loginBlueprint import login

from flask_cors import CORS


app = app_class.getInstance()
app.config.from_object(ApplicationConfig)
app.register_blueprint(preplannedTrip, url_prefix="")
app.register_blueprint(booking, url_prefix="")
app.register_blueprint(route, url_prefix="")
app.register_blueprint(schedule, url_prefix="")
app.register_blueprint(service, url_prefix="")
app.register_blueprint(station, url_prefix="")
app.register_blueprint(ticket, url_prefix="")
app.register_blueprint(train, url_prefix="")
app.register_blueprint(user, url_prefix="")
app.register_blueprint(registration, url_prefix="")
app.register_blueprint(login, url_prefix="")
CORS(app, supports_credentials=True)




if __name__ == '__main__':
    app.run()