# External
import traceback

# Internal
from .shared import db as DB

db = DB.getInstance()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    date_od_birth = db.Column(db.Date, nullable=False)
    phone_number = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(255), nullable=False)
    user_service = db.relationship('Service', backref="user")
    user_payment = db.relationship('Payment', backref="user")
    user_booking = db.relationship('Booking', backref="user")

    def __init__(self, name, email, password, address, date_of_brith, phone_number, role):
        self.name = name
        self.email = email
        self.password = password
        self.address = address
        self.date_od_birth = date_of_brith
        self.phone_number = phone_number
        self.role = role

    def __repr__(self) -> str:
        return "<User %r>" % self.id

    @staticmethod
    def create(name, email, password, address, date_of_birth, phone_number, role):
        try:
            user = User(name, email, password, address, date_of_birth, phone_number, role)
            db.session.add(user)
            db.session.commit()
            return True
        except Exception:
            print("error User create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = User.query.all()
            users = [
                {
                    "name": user.name,
                    "email": user.email,
                    "password": user.password,
                    "address": user.address,
                    "date_of_brith": user.date_of_birth,
                    "phone_number": user.phone_number,
                    "role": user.role
                }
                for user in query_result
            ]
            return users
        except Exception:
            print("error User read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            user = User.query.get(id)
            return user
        except Exception:
            print("error User read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = User.query.with_entities(getattr(User, column_name)).all()
            return column
        except Exception:
            print(f"error User read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = User.query.all()
            return result
        except Exception:
            print(f"error User read all" + " " + traceback.format_exc())

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
            user = User.query.get(id)
            if user is not None:
                db.session.delete(user)
                db.session.commit()
                return True
            else:
                print(f"User with id: {id} does not exist :: in customer.delete()")
                return False
        except Exception:
            print("error User delete" + " " + traceback.format_exc())
            return False