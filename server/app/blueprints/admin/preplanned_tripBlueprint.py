from flask import Blueprint, request, jsonify, make_response, json
from app.models.db.preplanned_trip import PreplannedTrip


preplannedTrip = Blueprint("preplannedTrip", __name__, static_folder="static", template_folder="template")

def serializer(preplannedtrips):
    list_of_trips = []
    for trip in preplannedtrips:
        dict_object = trip.__dict__
        dict_object.pop('_sa_instance_state')
        list_of_trips.append(dict_object)
    return list_of_trips

@preplannedTrip.route("/preplanned-trips", methods = ['POST'])
def create_trip():
    name = request.json['name']
    description = request.json['description']
    start_date = request.json['start_date']
    end_date = request.json['end_date']
    starting_destination = request.json['starting_destination']
    final_destination = request.json['final_destination']
    departure_station_id = request.json['departure_station_id']
    arrival_station_id = request.json['arrival_station_id']
    stops = request.json['stops']
    duration = request.json['duration']
    price = request.json['price']
    is_active = request.json['is_active']
    number_of_seats = request.json['number_of_seats']
    booked_seats = request.json['booked_seats']
    train_id = request.json['train_id']
    route_id = request.json['route_id']

    success = PreplannedTrip.create(name, description, start_date, end_date, starting_destination, final_destination,departure_station_id, arrival_station_id, stops, duration, price, is_active, number_of_seats, booked_seats, train_id, route_id)

    if success:
        response = {'success': True, 'message': 'Preplanned trip created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create preplanned trip'}
        return make_response(jsonify(response), 500)

@preplannedTrip.route("/preplanned-trips")
def get_events():
    preplanned_trips = PreplannedTrip.read_all()
    listA = serializer(preplanned_trips)
    json = jsonify(listA)
    return json

@preplannedTrip.route("/preplanned-trips/<id>")
def get_trip(id):
    trip = PreplannedTrip.read_one(id)
    dict_object = trip.__dict__
    dict_object.pop('_sa_instance_state')
    return dict_object

@preplannedTrip.route("/preplanned-trips/<id>", methods=['DELETE'])
def delete_trip(id):
    response = PreplannedTrip.delete(id)
    return jsonify(response)


    
