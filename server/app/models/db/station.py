# External
import traceback

# Internal
from .shared import db as DB

db = DB.getInstance()

class Station(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    code = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    longitude = db.Column(db.String(255), nullable=False)
    latitude = db.Column(db.String(255), nullable=False)
    is_active = db.Column(db.String(255), nullable=False)
    starting_routes = db.relationship('Route', backref='starting_station', foreign_keys='Route.starting_station_id')
    destination_routes = db.relationship('Route', backref='destination_station', foreign_keys='Route.destination_station_id')
    departure_preplanned_trips = db.relationship('PreplannedTrip', backref='departure_station', foreign_keys='PreplannedTrip.departure_station_id')
    arrival_preplanned_trips = db.relationship('PreplannedTrip', backref='arrival_station', foreign_keys='PreplannedTrip.arrival_station_id')


    def __init__(self, name, code, address, longitude, latitude, is_active):
        self.name = name
        self.code = code
        self.address = address
        self.longitude = longitude
        self.latitude = latitude
        self.is_active = is_active

    def __repr__(self) -> str:
        return "<Station %r>" % self.id

    @staticmethod
    def create(name, code, address, longitude, latitude, is_active):
        try:
            station = Station(name, code, address, longitude, latitude, is_active)
            db.session.add(station)
            db.session.commit()
            return True
        except Exception:
            print("error Station create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = Station.query.all()
            stations = [
                {
                    "name": station.name,
                    "code" : station.code,
                    "address" : station.address,
                    "longitude" : station.longitude,
                    "latitude" : station.latitude,
                    "is_active" : station.is_active,
                }
                for station in query_result
            ]
            return stations
        except Exception:
            print("error Station read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            station = Station.query.get(id)
            return station
        except Exception:
            print("error Station read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = Station.query.with_entities(getattr(Station, column_name)).all()
            return column
        except Exception:
            print(f"error Station read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = Station.query.all()
            return result
        except Exception:
            print(f"error Station read all" + " " + traceback.format_exc())

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
            station = Station.query.get(id)
            if station is not None:
                db.session.delete(station)
                db.session.commit()
                return True
            else:
                print(f"Station with id: {id} does not exist")
                return False
        except Exception:
            print("error Station delete" + " " + traceback.format_exc())
            return False