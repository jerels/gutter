from user import db


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
