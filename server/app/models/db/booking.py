# External
import traceback
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

# Internal
from .shared import db as DB

db = DB.getInstance()

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    ticket_type = db.Column(db.String(255), nullable=False)
    ticket_id = db.Column(db.Integer, nullable=False)
    train_id = db.Column(db.Integer, db.ForeignKey('train.id'), nullable=False)
    route_id = db.Column(db.Integer, db.ForeignKey('route.id'), nullable=False)
    seat_number = db.Column(db.Integer, nullable=False)
    booking_type = db.Column(db.Integer, nullable=False)
    departure_time = db.Column(db.Integer, nullable=False)
    arrival_time = db.Column(db.Integer, nullable=False)
    status = db.Column(db.Integer, nullable=False)
    booking_time = db.Column(db.Integer, nullable=False)
    payment_status = db.Column(db.Integer, nullable=False)
    booking_payment = db.relationship('Payment', backref="booking")

    def __init__(self, user_id, ticket_type, ticket_id, train_id, route_id, seat_number, 
                 booking_type, departure_time, arrival_time, status, booking_time, payment_status):
        self.user_id : user_id
        self.ticket_type : ticket_type
        self.ticket_id : ticket_id
        self.train_id : train_id
        self.route_id : route_id
        self.seat_number : seat_number
        self.booking_type : booking_type
        self.departure_time : departure_time
        self.arrival_time : arrival_time
        self.status : status
        self.booking_time : booking_time
        self.payment_status : payment_status

    def __repr__(self) -> str:
        return "<Booking %r>" % self.id

    @staticmethod
    def create(user_id, ticket_type, ticket_id, train_id, route_id, seat_number, 
                 booking_type, departure_time, arrival_time, status, booking_time, payment_status):
        try:
            booking = Booking(user_id, ticket_type, ticket_id, train_id, route_id, seat_number, 
                 booking_type, departure_time, arrival_time, status, booking_time, payment_status)
            db.session.add(booking)
            db.session.commit()
            return True
        except Exception:
            print("error Booking create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = Booking.query.all()
            bookings = [
                {
                    "user_id" : booking.user_id,
                    "ticket_type" : booking.ticket_type,
                    "ticket_id" : booking.ticket_id,
                    "train_id" : booking.train_id,
                    "route_id" : booking.route_id,
                    "seat_number" : booking.seat_number,
                    "booking_type" : booking.booking_type,
                    "departure_time" : booking.departure_time,
                    "arrival_time" : booking.arrival_time,
                    "status" : booking.status,
                    "booking_time" : booking.booking_time,
                    "payment_status" : booking.payment_status,
                }
                for booking in query_result
            ]
            return bookings
        except Exception:
            print("error Booking read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            booking = Booking.query.get(id)
            return booking
        except Exception:
            print("error Booking read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = Booking.query.with_entities(getattr(Booking, column_name)).all()
            return column
        except Exception:
            print(f"error Booking read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = Booking.query.all()
            return result
        except Exception:
            print(f"error Booking read all" + " " + traceback.format_exc())

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
            booking = Booking.query.get(id)
            if booking is not None:
                db.session.delete(booking)
                db.session.commit()
                return True
            else:
                print(f"Booking with id: {id} does not exist")
                return False
        except Exception:
            print("error Booking delete" + " " + traceback.format_exc())
            return False