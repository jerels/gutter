from user import db


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
