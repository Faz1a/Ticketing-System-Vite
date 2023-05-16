# External
import traceback
from sqlalchemy_serializer import SerializerMixin


# Internal
from .shared import db as DB
from app.models.db import booking
from sqlalchemy.orm import relationship
from datetime import date
from flask import jsonify
db = DB.getInstance()

class PreplannedTrip(db.Model,SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    starting_destination = db.Column(db.String(255), nullable=False)
    final_destination = db.Column(db.String(255), nullable=False)
    departure_station_id = db.Column(db.Integer, db.ForeignKey('station.id'), nullable=False)
    arrival_station_id = db.Column(db.Integer, db.ForeignKey('station.id'), nullable=False)
    stops = db.Column(db.String(255), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    number_of_seats = db.Column(db.Integer, nullable=False)
    booked_seats = db.Column(db.Integer, nullable=False)
    train_id = db.Column(db.Integer, db.ForeignKey('train.id'), nullable=False)
    route_id = db.Column(db.Integer, db.ForeignKey('route.id'), nullable=False)
    
    def __init__(self, name, description, start_date, end_date, starting_destination, final_destination, departure_station_id,
                 arrival_station_id, stops, duration, price, is_active, number_of_seats, booked_seats, train_id, route_id):
            self.name = name
            self.description = description
            self.start_date = start_date
            self.end_date = end_date
            self.starting_destination = starting_destination
            self.final_destination = final_destination
            self.departure_station_id = departure_station_id,
            self.arrival_station_id = arrival_station_id,
            self.stops = stops
            self.duration = duration
            self.price = price
            self.is_active =  is_active          
            self.number_of_seats = number_of_seats
            self.booked_seats = booked_seats
            self.train_id = train_id
            self.route_id = route_id

    def __repr__(self) -> str:
        return "<PreplannedTrip %r>" % self.id

    @staticmethod
    def create(name, description, start_date, end_date, starting_destination, final_destination,departure_station_id,
                 arrival_station_id, stops, duration, price, is_active, number_of_seats, booked_seats, train_id, route_id):
        try:
            preplannedtrip = PreplannedTrip(name, description, start_date, end_date, starting_destination, final_destination, 
                                            departure_station_id, arrival_station_id,stops, duration, price, is_active, 
                                            number_of_seats, booked_seats, train_id, route_id)
            db.session.add(preplannedtrip)
            db.session.commit()
            return True
        except Exception:
            print("error PreplannedTrip create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = PreplannedTrip.query.all()
            preplannedtrips = [
                {
                    "name" : preplannedtrip.name,
                    "description" : preplannedtrip.description,
                    "start_date" : preplannedtrip.start_date,
                    "end_date" : preplannedtrip.end_date,
                    "starting_destination" : preplannedtrip.starting_destination,
                    "final_destination" : preplannedtrip.final_destination,
                    "stops" : preplannedtrip.stops,
                    "duration" : preplannedtrip.duration,
                    "price" : preplannedtrip.price,
                    "is_active" :  preplannedtrip.is_active, 
                    "number_of_seats" : preplannedtrip.number_of_seats,
                    "booked_seats" : preplannedtrip.booked_seats,
                    "train_id" : preplannedtrip.train_id,
                    "route_id" : preplannedtrip.route_id,
                }
                for preplannedtrip in query_result
            ]
            return preplannedtrips
        except Exception:
            print("error PreplannedTrip read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            preplannedtrip = PreplannedTrip.query.get(id)
            return preplannedtrip
        except Exception:
            print("error PreplannedTrip read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = PreplannedTrip.query.with_entities(getattr(PreplannedTrip, column_name)).all()
            return column
        except Exception:
            print(f"error PreplannedTrip read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = PreplannedTrip.query.all()
            return result
        except Exception:
            print(f"error PreplannedTrip read all" + " " + traceback.format_exc())

    # @staticmethod
    # def update(id, name):
    #     try:
    #         customer_to_update = run_query(Customer.query.get, *[id])
    #         customer_to_update.name = name
    #         run_query(db.session.commit)
    #         return True
    #     except Exception:
    #         print("error Customer update" + " " + traceback.format_exc())
    #         return False

    @staticmethod
    def delete(id):
        try:
            preplannedtrip = PreplannedTrip.query.get(id)
            if preplannedtrip is not None:
                db.session.delete(preplannedtrip)
                db.session.commit()
                return True
            else:
                print(f"PreplannedTrip with id: {id} does not exist")
                return "PreplannedTrip with id: {id} does not exist"
        except Exception:
            print("error PreplannedTrip delete" + " " + traceback.format_exc())
            return False
        