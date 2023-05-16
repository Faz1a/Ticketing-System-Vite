from flask import Blueprint, request, jsonify, make_response, json
from app.models.db.schedule import Schedule


schedule = Blueprint("schedule", __name__, static_folder="static", template_folder="template")

def serializer(schedules):
    list_of_schedules = []
    for schedule in schedules:
        dict_object = schedule.__dict__
        dict_object.pop('_sa_instance_state')
        list_of_schedules.append(dict_object)
    return list_of_schedules

@schedule.route("/schedules", methods = ['POST'])
def create_schedule():
    route_id = request.json['route_id']
    train_id = request.json['train_id']
    departure_station_id = request.json['departure_station_id']
    arrival_station_id = request.json['arrival_station_id']
    stops = request.json['stops']
    departure_time = request.json['departure_time']
    arrival_time = request.json['arrival_time']
    frequency = request.json['frequency']


    success = Schedule.create(route_id, train_id, departure_station_id, arrival_station_id, stops, departure_time,
    arrival_time, frequency)

    if success:
        response = {'success': True, 'message': 'Schedule created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create schedule'}
        return make_response(jsonify(response), 500)

@schedule.route("/schedules")
def get_events():
    schedules = Schedule.read_all()
    listA = serializer(schedules)
    json = jsonify(listA)
    return json

@schedule.route("/schedules/<id>")
def get_schedule(id):
    schedule = Schedule.read_one(id)
    dict_object = schedule.__dict__
    dict_object.pop('_sa_instance_state')
    return dict_object

@schedule.route("/schedules/<id>", methods=['DELETE'])
def delete_schedule(id):
    response = Schedule.delete(id)
    return jsonify(response)


    
