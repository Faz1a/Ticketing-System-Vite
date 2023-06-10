from flask import Blueprint, request, jsonify, make_response, json
from app.models.db.travel_card import TravelCard


travelCard = Blueprint("travelCard", __name__, static_folder="static", template_folder="template")

def serializer(travelcards):
    list_of_cards = []
    for card in travelcards:
        dict_object = card.__dict__
        dict_object.pop('_sa_instance_state')
        list_of_cards.append(dict_object)
    return list_of_cards

@travelCard.route("/travel-cards", methods = ['POST'])
def create_card():
    name = request.json['name']
    duration = request.json['duration']
    is_active = True
    price = request.json['price']
   

    success = TravelCard.create( name, duration, is_active, price)

    if success:
        response = {'success': True, 'message': 'Travel card created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create travel card'}
        return make_response(jsonify(response), 500)

@travelCard.route("/travel-cards")
def get_events():
    travel_cards = TravelCard.read_all()
    listA = serializer(travel_cards)
    json = jsonify(listA)
    return json

@travelCard.route("/travel-cards/<id>")
def get_card(id):
    card = TravelCard.read_one(id)
    dict_object = card.__dict__
    dict_object.pop('_sa_instance_state')
    return dict_object

@travelCard.route("/travel-cards/<id>", methods=['DELETE'])
def delete_card(id):
    response = TravelCard.delete(id)
    return jsonify(response)


    
