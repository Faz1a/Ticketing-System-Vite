from flask import Blueprint,  request, make_response, jsonify, session
from app.models.db.payment import Payment
from app.models.db.user import User
import uuid

payment = Blueprint("payment", __name__, static_folder="static", template_folder="template")

credit_cards = [
    {
        'card_number': '2424242424242424',
        'name': 'John Doe',
        'cvc': '123',
        'expiration_date': '12/25',
        'message': 'Payment Successful'
    },
    {
        'card_number': '9876543210987654',
        'name': 'Jane Smith',
        'cvc': '456',
        'expiration_date': '06/24',
        'message': 'Payment Unsuccessful, Not enough funds'
    },
    {
        'card_number': '1111222233334444',
        'name': 'Sarah Johnson',
        'cvc': '789',
        'expiration_date': '09/23',
        'message': 'Payment Successful'
    },
    {
        'card_number': '5555666677778888',
        'name': 'Michael Smith',
        'cvc': '234',
        'expiration_date': '03/26',
        'message': 'Payment Unsuccessful, Not Correct Information'
    }
]

@payment.route("/checkout", methods=['POST'])
def checkout():
    email = request.json["email"]
    card_number = request.json["card_number"]
    expiration_date = request.json["expiration_date"]
    cvc = request.json["cvc"]
    name = request.json["name"]
    amount = request.json["amount"]
    
    success = False
    card_check = False
    
    user_exists = User.query.filter_by(email=email).first() is not None
    user = User.query.filter_by(email=email).first()
    print(user)
    transaction_id=str(uuid.uuid4())
    payment_method = 'card'
    
    for card in credit_cards:
        if (card_number == card["card_number"] and name == card["name"] and cvc == card["cvc"] and expiration_date == card["expiration_date"]):
            card_check = True
            message = card['message']
        
    if user_exists and card_check:
        success = Payment.create(user.id, payment_method, amount, message, transaction_id)
    
    if success is not None:
        response = {'success': True, 'message': card['message']}
        return make_response(jsonify(response), 201)
    else:
        response = {'success': False, 'message': "Payment Unsuccessful - "}
        return make_response(jsonify(response), 500)
    