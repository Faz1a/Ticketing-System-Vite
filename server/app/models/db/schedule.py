# External
import traceback

# Internal
from .shared import db as DB

db = DB.getInstance()

class Schedule(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    route_id = db.Column(db.Integer, db.ForeignKey('route.id'), nullable=False)
    train_id = db.Column(db.Integer, db.ForeignKey('train.id'), nullable=False)
    departure_station_id = db.Column(db.Integer, db.ForeignKey('station.id'), nullable=False)
    arrival_station_id = db.Column(db.Integer, db.ForeignKey('station.id'), nullable=False)
    stops = db.Column(db.String(255), nullable=False)
    departure_time = db.Column(db.Time, nullable=False)
    arrival_time = db.Column(db.Time, nullable=False)
    frequency = db.Column(db.Integer, nullable=False)
    
    def __init__(self, route_id, train_id, departure_station_id, arrival_station_id, stops, departure_time,
    arrival_time, frequency):
        self.route_id = route_id 
        self.train_id = train_id
        self.departure_station_id = departure_station_id
        self.arrival_station_id = arrival_station_id
        self.stops = stops
        self.departure_time = departure_time
        self.arrival_time = arrival_time
        self.frequency = frequency

    def __repr__(self) -> str:
        return "<Schedule %r>" % self.id

    @staticmethod
    def create(route_id, train_id, departure_station_id, arrival_station_id, stops, departure_time,
    arrival_time, frequency):
        try:
            schedule = Schedule(route_id, train_id, departure_station_id, arrival_station_id, stops, departure_time,
            arrival_time, frequency)
            db.session.add(schedule)
            db.session.commit()
            return True
        except Exception:
            print("error Schedule create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = Schedule.query.all()
            schedules = [
                {
                    "route_id" : schedule.route_id,
                    "train_id" : schedule.train_id,
                    "departure_station_id" : schedule.departure_station_id,
                    "arrival_station_id" : schedule.arrival_station_id,
                    "stops" : schedule.stops,
                    "departure_time" : schedule.departure_time,
                    "arrival_time" : schedule.arrival_time,
                    "frequency" : schedule.frequency,
                }
                for schedule in query_result
            ]
            return schedules
        except Exception:
            print("error Schedule read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            schedule = Schedule.query.get(id)
            return schedule
        except Exception:
            print("error Schedule read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = Schedule.query.with_entities(getattr(Schedule, column_name)).all()
            return column
        except Exception:
            print(f"error Schedule read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = Schedule.query.all()
            return result
        except Exception:
            print(f"error Schedule read all" + " " + traceback.format_exc())

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
            schedule = Schedule.query.get(id)
            if schedule is not None:
                db.session.delete(schedule)
                db.session.commit()
                return True
            else:
                print(f"Schedule with id: {id} does not exist")
                return False
        except Exception:
            print("error Schedule delete" + " " + traceback.format_exc())
            return False