# External
import traceback

# Internal
from .shared import db as DB

db = DB.getInstance()

class Route(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    starting_station_id = db.Column(db.Integer, db.ForeignKey('station.id'), nullable=False)
    destination_station_id = db.Column(db.Integer, db.ForeignKey('station.id'), nullable=False)
    train_id = db.Column(db.Integer, db.ForeignKey('train.id'), nullable=False)
    departure_time = db.Column(db.Time, nullable=False)
    arrival_time = db.Column(db.Time, nullable=False)
    distance = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(255), nullable=False)
    type = db.Column(db.String(255), nullable=False)
    routes_ticket = db.relationship('Ticket', backref='route')
    preplanned_trips = db.relationship('PreplannedTrip', backref='route')
    routes_schedule = db.relationship('Schedule', backref='route')
    routes_booking = db.relationship('Booking', backref='route')

    
    def __init__(self, starting_station, destination_station, train_id, departure_time, arrival_time, distance, status, type):
        self.starting_station = starting_station
        self.destination_station = destination_station
        self.train_id = train_id
        self.departure_time = departure_time
        self.arrival_time = arrival_time
        self.distance = distance
        self.status = status
        self.type = type
        
    def __repr__(self) -> str:
        return "<Route %r>" % self.id

    @staticmethod
    def create(starting_station, destination_station, train_id, departure_time, arrival_time, distance, status, type):
        try:
            route = Route(starting_station, destination_station, train_id, departure_time, arrival_time, distance, status, type)
            db.session.add(route)
            db.session.commit()
            return True
        except Exception:
            print("error Route create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = Route.query.all()
            routes = [
                {
                    "starting_station": route.starting_station,
                    "destination_station": route.destination_station,
                    "train_id": route.train_id,
                    "departure_time": route.departure_time,
                    "arrival_time": route.arrival_time,
                    "distance": route.distance,
                    "status": route.status,
                    "type": route.type,
                }
                for route in query_result
            ]
            return routes
        except Exception:
            print("error Route read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            route = Route.query.get(id)
            return route
        except Exception:
            print("error Route read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = Route.query.with_entities(getattr(Route, column_name)).all()
            return column
        except Exception:
            print(f"error Route read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = Route.query.all()
            return result
        except Exception:
            print(f"error Route read all" + " " + traceback.format_exc())

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
            route = Route.query.get(id)
            if route is not None:
                db.session.delete(route)
                db.session.commit()
                return True
            else:
                print(f"Route with id: {id} does not exist")
                return False
        except Exception:
            print("error Route delete" + " " + traceback.format_exc())
            return False