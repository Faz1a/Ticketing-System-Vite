from flask import Blueprint,  request, make_response, jsonify, session
from app.models.db.user import User
from flask_bcrypt import Bcrypt

registration = Blueprint("registration", __name__, static_folder="static", template_folder="template")
bcrypt = Bcrypt()

@registration.route("/register", methods=['POST'])
def register_user():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    address = request.json["address"]
    date_od_birth = request.json["date_of_birth"]
    phone_number = request.json["phone_number"]
    # role = request.json["role"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "A user already exists"}), 409

    hashed_pass = bcrypt.generate_password_hash(password)
    success = User.create(name, email, hashed_pass, address, date_od_birth, phone_number, role = 4)
    new_user = User.query.filter_by(email=email).first()
    session['user_id'] = new_user.id

    if success:
        response = {'success': True, 'message': 'User created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create user'}
        return make_response(jsonify(response), 500)