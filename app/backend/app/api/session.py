from flask import Blueprint, request, make_response
from sqlalcemy import or_
from flask_login import login_user, current_user, logout_user
from werkzeug.datastructures import MultiDict
from flask_wtf.crsrf import generate_csrf
from ..forms.login import LoginForm
from ..models.user import User

session = Blueprint('session', __name__)


@session.route('login', methods=['POST'])
def login():
    data = MultiDict(mapping=request.json)
    form = LoginForm(data)

    if form.validate():
        user = User.query.filter(or_(
            User.username == data['emailOrUsername'], User.email == data['emailOrUsername'])).first()
        if user and user.checkPassword(data['password']):
            login_user(user)
            return {'userId': user.to_dict()['id']}
        else:
            res = make_response({'errors': ['User does not exist']})
            return res
    else:
        res = make_response(
            {'errors': [form.errors[error][0] for error in form.errors]}, 401)
        return res
