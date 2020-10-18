from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime


db = SQLAlchemy()


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashedPassword = db.Column(db.String(255), nullable=False)

    reviews = db.relationship('Review', back_populates='user')
    issues = db.relationship('Issue', secondary=userIssues)

    @property
    def password(self):
        return self.hashedPassword

    @password.setter
    def password(self, password):
        self.hashedPassword = generate_password_hash(password)

    def checkPassword(self, password):
        return check_password_hash(self.password, password)

    def toDict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email
        }


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, nullable=False)
    starRating = db.Column(db.Integer, nullable=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    issueId = db.Column(db.Integer, db.ForeignKey('issues.id'), nullable=False)
    created = db.Column(db.DateTime, default=datetime.now, nullable=False)
    updated = db.Column(db.DateTime, default=datetime.now,
                        nullable=False, onupdate=datetime.now)

    user = db.relationship('User', back_populates='reviews')
    issue = db.relationship('Issue', back_populates='reviews')

    def toDict(self):
        return {
            'id': self.id,
            'content': self.content,
            'user': self.user,
            'issue': self.issue,
            'created': self.created,
            'updated': self.updated
        }


class Issue(db.Model):
    __tablename__ = 'issues'

    id = db.Column(db.Integer, primary_key=True)
    comicVineId = db.Column(db.Integer, nullable=False, unique=True)

    reviews = db.relationship('Review', back_populates='issue')

    def toDict(self):
        return {
            'id': self.id,
            'comicVineId': self.comicVineId
        }


userIssues = db.Table(
    'userIssues',
    db.Model.metadata,
    db.Column('userId', db.Integer, db.ForeignKey(
        'users.id'), primary_key=True),
    db.Column('issueId', db.Integer, db.ForeignKey(
        'issues.id'), primary_key=True)
)

followTable = db.Table(
    'followTable',
    db.Model.metadata,
    db.Column('followingId', db.Integer, db.ForeignKey(
        'users.id'), primary_key=True),
    db.Column('followedId', db.Integer, db.ForeignKey(
        'users.id'), primary_key=True)
)
