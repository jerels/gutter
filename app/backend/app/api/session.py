from flask import Blueprint, request, make_response
from sqlalchemy import or_
from flask_login import login_user, current_user, logout_user
from werkzeug.datastructures import MultiDict
from flask_wtf.csrf import generate_csrf
import requests
from ..forms.login import LoginForm
from ..models import User

session = Blueprint('session', __name__)


@session.route('/login', methods=['POST'])
def login():
    data = MultiDict(mapping=request.json)
    form = LoginForm(data)
    if form.validate():
        user = User.query.filter(or_(
            User.username == data['emailOrUsername'],
            User.email == data['emailOrUsername'])).first()
        if user and user.checkPassword(data['password']):
            login_user(user)
            userLogged = user.toDict()
            print(userLogged)
            issues = [issue.toDict()['issueId']
                      for issue in userLogged['issues']]
            userLogged['issues'] = issues
            print(userLogged)
            return {'user': userLogged}
        else:
            res = make_response({'errors': ['User does not exist']}, 401)
            return res
    else:
        res = make_response(
            {'errors': [form.errors[error][0] for error in form.errors]}, 401)
        return res


@session.route('/csrf')
def csrf():
    res = make_response('set token')
    res.set_cookie('XSRF-TOKEN', generate_csrf())
    return res
