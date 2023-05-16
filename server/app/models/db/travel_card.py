# External
import traceback

# Internal
from .shared import db as DB
from app.models.db import booking
from sqlalchemy.orm import relationship

db = DB.getInstance()

class TravelCard(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    
    def __init__(self, name, duration, start_date, end_date, is_active, price):
        self.name = name
        self.duration = duration
        self.start_date = start_date
        self.end_date = end_date
        self.is_active = is_active
        self.price = price

    def __repr__(self) -> str:
        return "<TravelCard %r>" % self.id

    @staticmethod
    def create(name, duration, start_date, end_date, is_active, price):
        try:
            travelcard = TravelCard(name, duration, start_date, end_date, is_active, price)
            db.session.add(travelcard)
            db.session.commit()
            return True
        except Exception:
            print("error TravelCard create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = TravelCard.query.all()
            travelcards = [
                {
                    "name" : travelcard.name,
                    "duration" : travelcard.duration,
                    "start_date" : travelcard.start_date,
                    "end_date" : travelcard.end_date,
                    "is_active" : travelcard.is_active,
                    "price" : travelcard.price,
                }
                for travelcard in query_result
            ]
            return travelcards
        except Exception:
            print("error TravelCard read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            travelcard = TravelCard.query.get(id)
            return travelcard
        except Exception:
            print("error TravelCard read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = TravelCard.query.with_entities(getattr(TravelCard, column_name)).all()
            return column
        except Exception:
            print(f"error TravelCard read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = TravelCard.query.all()
            return result
        except Exception:
            print(f"error TravelCard read all" + " " + traceback.format_exc())

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
            travelcard = TravelCard.query.get(id)
            if travelcard is not None:
                db.session.delete(travelcard)
                db.session.commit()
                return True
            else:
                print(f"TravelCard with id: {id} does not exist")
                return False
        except Exception:
            print("error TravelCard delete" + " " + traceback.format_exc())
            return False