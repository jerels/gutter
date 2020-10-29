from app.models import User, Issue, UserIssue
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(username='demo', email='demo@demo.com', password='password')
    kloie = User(username='krush', email='kloie@kloie.com',
                 password='password')
    kevin = User(username='kevin', email='kevin@kevin.com',
                 password='password')
    demi = User(username='demi', email='demi@demi.com', password='password')
    issue1 = Issue(
        marvelId=89, cover='http://i.annihil.us/u/prod/marvel/i/mg/8/80/4bc6b06c450c1/portrait_xlarge.jpg')
    issue2 = Issue(
        marvelId=78, cover='http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5c126bb8666f4/portrait_xlarge.jpg')
    issue3 = Issue(
        marvelId=207, cover='http://i.annihil.us/u/prod/marvel/i/mg/e/80/5351989a53787/portrait_xlarge.jpg')
    issue4 = Issue(
        marvelId=59533, cover='http://i.annihil.us/u/prod/marvel/i/mg/a/70/56f45df7e7e55/portrait_xlarge.jpg')
    issue5 = Issue(
        marvelId=59527, cover='http://i.annihil.us/u/prod/marvel/i/mg/3/c0/56f06f175c860/portrait_xlarge.jpg')
    issue6 = Issue(
        marvelId=25321, cover='http://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bb4ecb6aa5a9/portrait_xlarge.jpg')
    userIssues1 = UserIssue(userId=1, marvelId=89)
    userIssues2 = UserIssue(userId=1, marvelId=78)
    userIssues3 = UserIssue(userId=1, marvelId=207)
    userIssue4 = UserIssue(userId=2, marvelId=59533)
    userIssue5 = UserIssue(userId=3, marvelId=59527)
    userIssue6 = UserIssue(userId=4, marvelId=25321)

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
    db.session.add(kloie)
    db.session.add(kevin)
    db.session.add(demi)
    db.session.add(issue1)
    db.session.add(issue2)
    db.session.add(issue3)
    db.session.add(issue4)
    db.session.add(issue5)
    db.session.add(issue6)
    db.session.add(userIssues1)
    db.session.add(userIssues2)
    db.session.add(userIssues3)
    db.session.add(userIssue4)
    db.session.add(userIssue5)
    db.session.add(userIssue6)
    demo.follow(kloie)
    demo.follow(kevin)
    demo.follow(demi)

    db.session.commit()
