from user import db


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
