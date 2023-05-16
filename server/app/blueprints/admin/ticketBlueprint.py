from flask import Blueprint, request, jsonify, make_response, json
from app.models.db.ticket import Ticket


ticket = Blueprint("ticket", __name__, static_folder="static", template_folder="template")

def serializer(tickets):
    list_of_tickets = []
    for ticket in tickets:
        dict_object = ticket.__dict__
        dict_object.pop('_sa_instance_state')
        list_of_tickets.append(dict_object)
    return list_of_tickets

@ticket.route("/tickets", methods = ['POST'])
def create_ticket():
    type = request.json['type']
    price = request.json['price']
    route_id = request.json['route_id']
    train_id = request.json['train_id']
    duration = request.json['duration']
   

    success = Ticket.create(type, price, route_id, train_id, duration)

    if success:
        response = {'success': True, 'message': 'Ticket created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create ticket'}
        return make_response(jsonify(response), 500)

@ticket.route("/tickets")
def get_events():
    tickets = Ticket.read_all()
    listA = serializer(tickets)
    json = jsonify(listA)
    return json

@ticket.route("/tickets/<id>")
def get_ticket(id):
    ticket = Ticket.read_one(id)
    dict_object = ticket.__dict__
    dict_object.pop('_sa_instance_state')
    return dict_object

@ticket.route("/tickets/<id>", methods=['DELETE'])
def delete_ticket(id):
    response = Ticket.delete(id)
    return jsonify(response)


    
