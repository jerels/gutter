from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import InputRequired, Email


class SignUpForm(FlaskForm):
    username = StringField('Username',
                           validators=[InputRequired('Please provide a username.')])
    email = StringField('Email',
                        validators=[InputRequired('Please provide a email.'),
                                    Email('Please provide a email.')])
    password = PasswordField('Password',
                             validators=[InputRequired('Please provide a password.')])
