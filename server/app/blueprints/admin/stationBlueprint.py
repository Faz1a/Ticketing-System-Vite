from flask import Blueprint, request, jsonify, make_response, json
from app.models.db.station import Station


station = Blueprint("station", __name__, static_folder="static", template_folder="template")

def serializer(stations):
    list_of_stations = []
    for station in stations:
        dict_object = station.__dict__
        dict_object.pop('_sa_instance_state')
        list_of_stations.append(dict_object)
    return list_of_stations

@station.route("/stations", methods = ['POST'])
def create_station():
    name = request.json['name']
    code = request.json['code']
    address = request.json['address']
    longitude = request.json['longitude']
    latitude = request.json['latitude']
    is_active = request.json['is_active']
    

    success = Station.create(name, code, address, longitude, latitude, is_active)

    if success:
        response = {'success': True, 'message': 'Station created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create station'}
        return make_response(jsonify(response), 500)

@station.route("/stations")
def get_events():
    stations = Station.read_all()
    listA = serializer(stations)
    json = jsonify(listA)
    return json

@station.route("/stations/<id>")
def get_trip(id):
    station = Station.read_one(id)
    dict_object = station.__dict__
    dict_object.pop('_sa_instance_state')
    return dict_object

@station.route("/stations/<id>", methods=['DELETE'])
def delete_station(id):
    response = Station.delete(id)
    return jsonify(response)


    
