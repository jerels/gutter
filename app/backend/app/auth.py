from flask_login import LoginManager
from .models.user import User

loginManager = LoginManager()
loginManager.loginView = 'session.login'


@loginManager.userLoader
def loadUser(id):
    return User.query.get(int(id))
