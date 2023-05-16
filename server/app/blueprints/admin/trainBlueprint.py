from flask import Blueprint, request, jsonify, make_response, json
from app.models.db.train import Train


train = Blueprint("train", __name__, static_folder="static", template_folder="template")

def serializer(trains):
    list_of_trains = []
    for train in trains:
        dict_object = train.__dict__
        dict_object.pop('_sa_instance_state')
        list_of_trains.append(dict_object)
    return list_of_trains

@train.route("/trains", methods = ['POST'])
def create_train():
    name = request.json['name']
    description = request.json['description']
    type = request.json['type']
    capacity = request.json['capacity']
    status = request.json['status']
    

    success = Train.create( name, description, type, capacity, status)

    if success:
        response = {'success': True, 'message': 'train created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create train'}
        return make_response(jsonify(response), 500)

@train.route("/trains")
def get_events():
    trains = Train.read_all()
    listA = serializer(trains)
    json = jsonify(listA)
    return json

@train.route("/trains/<id>")
def get_train(id):
    trip = Train.read_one(id)
    dict_object = train.__dict__
    dict_object.pop('_sa_instance_state')
    return dict_object

@train.route("/trains/<id>", methods=['DELETE'])
def delete_train(id):
    response = Train.delete(id)
    return jsonify(response)


    
