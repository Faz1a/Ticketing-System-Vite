# External
import traceback

# Internal
from .shared import db as DB
from app.models.db import booking
from sqlalchemy.orm import relationship

db = DB.getInstance()

class Ticket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=True)
    price = db.Column(db.Float, nullable=True)
    route_id = db.Column(db.Integer, db.ForeignKey('route.id'), nullable=False)
    train_id = db.Column(db.Integer, db.ForeignKey('train.id'), nullable=False)
    duration = db.Column(db.Integer, nullable=True)
    
    def __init__(self, type, price, route_id, train_id, duration):
        self.type = type
        self.price = price
        self.route_id = route_id
        self.train_id = train_id
        self.duration = duration

    def __repr__(self) -> str:
        return "<Ticket %r>" % self.id

    @staticmethod
    def create(type, price, route_id, train_id, duration):
        try:
            ticket = Ticket(type, price, route_id, train_id, duration)
            db.session.add(ticket)
            db.session.commit()
            return True
        except Exception:
            print("error Ticket create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = Ticket.query.all()
            tickets = [
                {
                    "type": ticket.type,
                    "price" : ticket.price,
                    "route_id" : ticket.route_id,
                    "train_id" : ticket.train_id,
                    "duration" : ticket.duration,
                }
                for ticket in query_result
            ]
            return tickets
        except Exception:
            print("error Ticket read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            ticket = Ticket.query.get(id)
            return ticket
        except Exception:
            print("error Ticket read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = Ticket.query.with_entities(getattr(Ticket, column_name)).all()
            return column
        except Exception:
            print(f"error Ticket read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = Ticket.query.all()
            return result
        except Exception:
            print(f"error Ticket read all" + " " + traceback.format_exc())

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
            ticket = Ticket.query.get(id)
            if ticket is not None:
                db.session.delete(ticket)
                db.session.commit()
                return True
            else:
                print(f"Ticket with id: {id} does not exist")
                return False
        except Exception:
            print("error Ticket delete" + " " + traceback.format_exc())
            return False