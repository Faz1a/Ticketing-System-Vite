from flask import Blueprint,  request, make_response, jsonify, session
from app.models.db.user import User
from flask_bcrypt import Bcrypt
from flask_session import Session


login = Blueprint("login", __name__, static_folder="static", template_folder="template")
server_session = Session()
bcrypt = Bcrypt()

@login.route("/login", methods=['POST'])
def register_user():
    email = request.json["email"]
    password = request.json["password"]
    
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized access"}), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized access"}), 401

    session['user_id'] = user.id

    return jsonify({
        "email" : user.email,
        "password": user.password
    })

@login.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    })

@login.route("/logout", methods=['POST'])
def logout_user():
    session.pop("user_id")
    return "200"