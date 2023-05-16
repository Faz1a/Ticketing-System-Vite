from flask import Blueprint, request, jsonify, make_response, json
from app.models.db.user import User


user = Blueprint("user", __name__, static_folder="static", template_folder="template")

def serializer(users):
    list_of_users = []
    for user in users:
        dict_object = user.__dict__
        dict_object.pop('_sa_instance_state')
        list_of_users.append(dict_object)
    return list_of_users

@user.route("/users", methods = ['POST'])
def create_user():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    address = request.json['address']
    date_of_birth = request.json['date_of_birth']
    phone_number = request.json['phone_number']
    role = request.json['role']
   

    success = User.create(name, email, password, address, date_of_birth, phone_number, role)

    if success:
        response = {'success': True, 'message': 'User created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create user'}
        return make_response(jsonify(response), 500)

@user.route("/users")
def get_events():
    users = User.read_all()
    listA = serializer(users)
    json = jsonify(listA)
    return json

@user.route("/users/<id>")
def get_user(id):
    user = User.read_one(id)
    dict_object = user.__dict__
    dict_object.pop('_sa_instance_state')
    return dict_object

@user.route("/users/<id>", methods=['DELETE'])
def delete_user(id):
    response = User.delete(id)
    return jsonify(response)


    
