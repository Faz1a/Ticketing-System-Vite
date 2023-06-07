# External
import traceback

# Internal
from .shared import db as DB

db = DB.getInstance()

class Train(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    type = db.Column(db.String(255), nullable=True)
    capacity = db.Column(db.Integer, nullable=True)
    status = db.Column(db.String(255), nullable=True)
    train_ticket = db.relationship('Route', backref='train')
    train_preplanned = db.relationship('PreplannedTrip', backref='train')
    train_schedule = db.relationship('Schedule', backref='train')
    train_booking = db.relationship('Booking', backref='train')
    
    def __init__(self, name, description, type, capacity, status):
        self.name = name
        self.description = description
        self.type = type
        self.capacity = capacity
        self.status = status
        
    def __repr__(self) -> str:
        return "<Train %r>" % self.id

    @staticmethod
    def create(name, description, type, capacity, status):
        try:
            train = Train(name, description, type, capacity, status)
            db.session.add(train)
            db.session.commit()
            return True
        except Exception:
            print("error Train create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = Train.query.all()
            trains = [
                {
                    "name": train.name,
                    "description": train.description,
                    "type": train.type,
                    "capacity": train.capacity,
                    "status": train.status,
                }
                for train in query_result
            ]
            return trains
        except Exception:
            print("error Train read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            train = Train.query.get(id)
            return train
        except Exception:
            print("error Train read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = Train.query.with_entities(getattr(Train, column_name)).all()
            return column
        except Exception:
            print(f"error Train read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = Train.query.all()
            return result
        except Exception:
            print(f"error Train read all" + " " + traceback.format_exc())

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
            train = Train.query.get(id)
            if train is not None:
                db.session.delete(train)
                db.session.commit()
                return True
            else:
                print(f"Train with id: {id} does not exist")
                return False
        except Exception:
            print("error Train delete" + " " + traceback.format_exc())
            return False