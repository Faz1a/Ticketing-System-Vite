from flask import Blueprint, request, jsonify, make_response, json
from app.models.db.service import Service


service = Blueprint("service", __name__, static_folder="static", template_folder="template")

def serializer(services):
    list_of_services = []
    for service in services:
        dict_object = service.__dict__
        dict_object.pop('_sa_instance_state')
        list_of_services.append(dict_object)
    return list_of_services

@service.route("/services", methods = ['POST'])
def create_service():
    name = request.json['name']
    description = request.json['description']
    price = request.json['price']
    is_active = request.json['is_active']
    employee_id = request.json['employee_id']
   

    success = Service.create(name, description, price, is_active, employee_id)

    if success:
        response = {'success': True, 'message': 'Service created successfully'}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': 'Failed to create service'}
        return make_response(jsonify(response), 500)

@service.route("/services")
def get_events():
    services = Service.read_all()
    listA = serializer(services)
    json = jsonify(listA)
    return json

@service.route("/services/<id>")
def get_service(id):
    service = Service.read_one(id)
    dict_object = service.__dict__
    dict_object.pop('_sa_instance_state')
    return dict_object

@service.route("/services/<id>", methods=['DELETE'])
def delete_service(id):
    response = Service.delete(id)
    return jsonify(response)


    
