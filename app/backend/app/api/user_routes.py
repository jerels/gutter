from flask import Blueprint, jsonify
from ..models.user import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def index():
    response = User.query.all()
    print("user route______")
    return {"users": [user.to_dict() for user in response]}
