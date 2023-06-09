# External
import traceback

# Internal
from .shared import db as DB

db = DB.getInstance()

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    price = db.Column(db.Float, nullable=True)
    is_active = db.Column(db.Boolean, nullable=True)
    employee_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    def __init__(self, name, description, price, is_active, employee_id):
        self.name = name
        self.description = description
        self.price = price
        self.is_active = is_active
        self.employee_id = employee_id

    def __repr__(self) -> str:
        return "<Service %r>" % self.id

    @staticmethod
    def create(name, description, price, is_active, employee_id):
        try:
            service = Service(name, description, price, is_active, employee_id)
            db.session.add(service)
            db.session.commit()
            return True
        except Exception:
            print("error Service create" + " " + traceback.format_exc())
            return False

    @staticmethod
    def read_all():
        try:
            query_result = Service.query.all()
            services = [
                {
                    "name": service.name,
                    "description" : service.description,
                    "price" : service.price,
                    "is_active" : service.is_active,
                    "employee_id" : service.employee_id,
                }
                for service in query_result
            ]
            return services
        except Exception:
            print("error Service read_all" + " " + traceback.format_exc())
            return "[]"

    @staticmethod
    def read_one(id):
        try:
            service = Service.query.get(id)
            return service
        except Exception:
            print("error Service read_one" + " " + traceback.format_exc())
            return '[]'
    
    @staticmethod
    def read_column(column_name):
        try:
            column = Service.query.with_entities(getattr(Service, column_name)).all()
            return column
        except Exception:
            print(f"error Service read {column_name}" + " " + traceback.format_exc())

    @staticmethod
    def read_all():
        try:
            result = Service.query.all()
            return result
        except Exception:
            print(f"error Service read all" + " " + traceback.format_exc())

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
            service = Service.query.get(id)
            if service is not None:
                db.session.delete(service)
                db.session.commit()
                return True
            else:
                print(f"Service with id: {id} does not exist")
                return False
        except Exception:
            print("error Service delete" + " " + traceback.format_exc())
            return False