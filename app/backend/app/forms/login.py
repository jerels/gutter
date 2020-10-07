from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import InputRequired, Email


class LoginForm(FlaskForm):
    emailOrUsername = StringField(
        'Email/Username', validators=[InputRequired('Please provide a valid email or username.')])
    password = PasswordField('Password', validators=[
                             InputRequired('Please provide a valid password.')])
