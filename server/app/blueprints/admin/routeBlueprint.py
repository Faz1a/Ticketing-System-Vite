from flask import Blueprint, request, jsonify, make_response, json
from app.models.db.route import Route


route = Blueprint("route", __name__, static_folder="static", template_folder="template")

def serializer(routes):
    list_of_routes = []
    for route in routes:
        dict_object = route.__dict__
        dict_object.pop('_sa_instance_state')
        list_of_routes.append(dict_object)
    return list_of_routes

@route.route("/routes", methods = ['POST'])
def create_route():
    starting_station_id = request.json[' starting_station_id']
    destination_station_id= request.json['destination_station_id']
    train_id = request.json['train_id']
    departure_time = request.json['departure_time']
    arrival_time = request.json['arrival_time']
    distance = request.json['distance']
    status = request.json['status']
    type = request.json['type']
  
   

    success = Route.create(starting_station_id, destination_station_id, train_id, departure_time, arrival_time, distance, status, type)

    if success:
        response = {'success': True, 'message': 'Route  created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create route'}
        return make_response(jsonify(response), 500)

@route.route("/routes")
def get_events():
    routes = Route.read_all()
    listA = serializer(routes)
    json = jsonify(listA)
    return json

@route.route("/routes/<id>")
def get_route(id):
    trip = Route.read_one(id)
    dict_object = trip.__dict__
    dict_object.pop('_sa_instance_state')
    return dict_object

@route.route("/routes/<id>", methods=['DELETE'])
def delete_route(id):
    response = Route.delete(id)
    return jsonify(response)


    
