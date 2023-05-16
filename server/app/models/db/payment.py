# External
import traceback

# Internal
from .shared import db as DB

db = DB.getInstance()

class Payment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    booking_id = db.Column(db.Integer, db.ForeignKey('booking.id'), nullable=False)
    payment_method = db.Column(db.String(255), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    currency = db.Column(db.String(255), nullable=False)
    status = db.Column(db.Boolean, nullable=False)
    transaction_id = db.Column(db.Integer, nullable=False)
    payment_gateway = db.Column(db.String(255), nullable=False)
    
    def __init__(self, user_id, booking_id, payment_method, amount, currency, status, transaction_id, payment_gateway):
        self.user_id = user_id
        self.booking_id = booking_id
        self.payment_method = payment_method
        self.amount = amount
        self.currency = currency
        self.status = status
        self.transaction_id = transaction_id
        self.payment_gateway = payment_gateway

    def __repr__(self) -> str:
        return "<Payment %r>" % self.id

    @staticmethod
    def create(user_id, booking_id, payment_method, amount, currency, status, transaction_id, payment_gateway):
        try:
            payment = Payment(user_id, booking_id, payment_method, amount, currency, status, transaction_id, payment_gateway)
            db.session.add(payment)
            db.session.commit()
            return True
        except Exception:
            print("error Payment create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = Payment.query.all()
            payments = [
                {
                    "user_id" : payment.user_id,
                    "booking_id" : payment.booking_id,
                    "payment_method" : payment.payment_method,
                    "amount" : payment.amount,
                    "currency" : payment.currency,
                    "status" : payment.status,
                    "transaction_id" : payment.transaction_id,
                    "payment_gateway" : payment.payment_gateway,
                }
                for payment in query_result
            ]
            return payments
        except Exception:
            print("error Payment read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            payment = Payment.query.get(id)
            return payment
        except Exception:
            print("error Payment read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = Payment.query.with_entities(getattr(Payment, column_name)).all()
            return column
        except Exception:
            print(f"error Payment read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = Payment.query.all()
            return result
        except Exception:
            print(f"error Payment read all" + " " + traceback.format_exc())

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
            payment = Payment.query.get(id)
            if payment is not None:
                db.session.delete(payment)
                db.session.commit()
                return True
            else:
                print(f"Payment with id: {id} does not exist")
                return False
        except Exception:
            print("error Payment delete" + " " + traceback.format_exc())
            return False