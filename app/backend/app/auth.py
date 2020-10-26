from flask_login import LoginManager
from .models import User

loginManager = LoginManager()
loginManager.login_view = 'session.login'


@loginManager.user_loader
def loadUser(id):
    return User.query.get(int(id))
