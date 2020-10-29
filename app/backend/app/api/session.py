from flask import Blueprint, request, make_response
from sqlalchemy import or_
from flask_login import login_user, current_user, logout_user
from werkzeug.datastructures import MultiDict
from flask_wtf.csrf import generate_csrf
import requests
from ..forms.login import LoginForm
from ..models import User, Issue
from .issueDict import userCollection

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
            userIssues = userCollection(userLogged['issues'])
            issues = [(Issue.query.filter(
                Issue.marvelId == issue['marvelId']).first()).toDict() for issue in userIssues]
            following = [follow.toDict() for follow in userLogged['followed']]
            for follow in following:
                print('!!!!!!!!!', follow)
                followIssues = userCollection(follow['issues'])
                followCollection = [(Issue.query.filter(
                    Issue.marvelId == issue['marvelId']).first()).toDict() for issue in followIssues]
                follow['issues'] = followCollection
                del follow['followed']
            userLogged['issues'] = issues
            userLogged['followed'] = following
            print(userLogged)
            return {'user': userLogged}
        else:
            res = make_response({'errors': ['User does not exist']}, 401)
            return res
    else:
        res = make_response(
            {'errors': [form.errors[error][0] for error in form.errors]}, 401)
        return res


@session.route('/logout', methods=['DELETE'])
def logout():
    logout_user()
    return {'message': 'Logged out'}


@session.route('/csrf')
def csrf():
    res = make_response('set token')
    res.set_cookie('XSRF-TOKEN', generate_csrf())
    return res
