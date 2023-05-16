from flask import Blueprint, request, jsonify, make_response, json
from app.models.db.booking import Booking


booking = Blueprint("booking", __name__, static_folder="static", template_folder="template")

def serializer(bookings):
    list_of_bookings = []
    for booking in bookings:
        dict_object = booking.__dict__
        dict_object.pop('_sa_instance_state')
        bookings.append(dict_object)
    return bookings

@booking.route("/bookings", methods = ['POST'])
def create_booking():
    user_id = request.json['user_id']
    ticket_type = request.json['ticket_type']
    ticket_id  = request.json['ticket_id ']
    train_id = request.json['train_id']
    route_id = request.json['route_id']
    seat_number = request.json['seat_number']
    booking_type = request.json['booking_type']
    departure_time = request.json['departure_time']
    arrival_time = request.json['arrival_time']
    status = request.json['status']
    booking_time = request.json['booking_time']
    payment_status = request.json['payment_status']
    

    success = Booking.create(user_id, ticket_type, ticket_id, train_id, route_id, seat_number, 
                 booking_type, departure_time, arrival_time, status, booking_time, payment_status)

    if success:
        response = {'success': True, 'message': 'Booking created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create booking'}
        return make_response(jsonify(response), 500)

@booking.route("/bookings")
def get_events():
    bookings = Booking.read_all()
    listA = serializer(bookings)
    json = jsonify(listA)
    return json

@booking.route("/bookings/<id>")
def get_booking(id):
    trip = Booking.read_one(id)
    dict_object = booking.__dict__
    dict_object.pop('_sa_instance_state')
    return dict_object

@booking.route("/bookings/<id>", methods=['DELETE'])
def delete_booking(id):
    response = Booking.delete(id)
    return jsonify(response)
    
