from app.models import User, Issue, UserIssue
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(username='demo', email='demo@demo.com', password='password')
    issue1 = Issue(
        marvelId=89, cover='http://i.annihil.us/u/prod/marvel/i/mg/8/80/4bc6b06c450c1/portrait_xlarge.jpg')
    issue2 = Issue(
        marvelId=78, cover='http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5c126bb8666f4/portrait_xlarge.jpg')
    issue3 = Issue(
        marvelId=207, cover='http://i.annihil.us/u/prod/marvel/i/mg/e/80/5351989a53787/portrait_xlarge.jpg')
    userIssues1 = UserIssue(userId=1, marvelId=89)
    userIssues2 = UserIssue(userId=1, marvelId=78)
    userIssues3 = UserIssue(userId=1, marvelId=207)

    # ian = User(username='Ian', email='ian@aa.io')
    # javier = User(username='Javier', email='javier@aa.io')
    # dean = User(username='Dean', email='dean@aa.io')
    # angela = User(username='Angela', email='angela@aa.io')
    # soonmi = User(username='Soon-Mi', email='soonmi@aa.io')
    # alissa = User(username='Alissa', email='alissa@aa.io')

    # db.session.add(ian)
    # db.session.add(javier)
    # db.session.add(dean)
    # db.session.add(angela)
    # db.session.add(soonmi)
    # db.session.add(alissa)
    db.session.add(demo)
    db.session.add(issue1)
    db.session.add(issue2)
    db.session.add(issue3)
    db.session.add(userIssues1)
    db.session.add(userIssues2)
    db.session.add(userIssues3)

    db.session.commit()
