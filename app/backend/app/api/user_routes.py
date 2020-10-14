from flask import Blueprint, jsonify, request, make_response
from werkzeug.datastructures import MultiDict
from ..forms.signUp import SignUpForm
from ..models.user import db, User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def index():
    response = User.query.all()
    print("user route______")
    return {"users": [user.to_dict() for user in response]}


@user_routes.route('/<int:userId>')
def getUser(userId):
    user = User.query.filter(User.id == userId).first()
    return user.to_dict()


@user_routes.route('/', methods=['POST'])
def signUp():
    data = MultiDict(mapping=request.json)
    form = SignUpForm(data)
    if form.validate():
        if User.query.filter(User.email == data['email']).first() is None:
            user = User(username=data['username'],
                        email=data['email'], password=data['password'])
            db.session.add(user)
            db.session.commit()

            newUser = user.to_dict()
            return {newUser['id']: newUser}
        else:
            res = make_response({'errors': ['That user already exists.']}, 401)
            return res
    else:
        errorSet = set()
        for error in form.errors:
            errorSet.add(form.errors[error][0])
        errorList = list(errorSet)
        res = make_response({'errors': errorList}, 401)
        return res
