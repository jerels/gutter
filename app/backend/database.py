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
    issue7 = Issue(
        marvelId=136, cover='http://i.annihil.us/u/prod/marvel/i/mg/3/80/577e61629d0c0/portrait_xlarge.jpg')
    issue8 = Issue(
        marvelId=2301, cover='http://i.annihil.us/u/prod/marvel/i/mg/1/50/5923169c679a7/portrait_xlarge.jpg')
    issue9 = Issue(
        marvelId=568, cover='http://i.annihil.us/u/prod/marvel/i/mg/8/b0/5aa2bfe247232/portrait_xlarge.jpg')
    issue10 = Issue(
        marvelId=365, cover='http://i.annihil.us/u/prod/marvel/i/mg/3/a0/5b980f0495d14/portrait_xlarge.jpg')
    issue11 = Issue(
        marvelId=203, cover='http://i.annihil.us/u/prod/marvel/i/mg/b/f0/5c784d2bb12cc/portrait_xlarge.jpg')
    issue12 = Issue(
        marvelId=404, cover='http://i.annihil.us/u/prod/marvel/i/mg/b/40/5ae0b4e30bc50/portrait_xlarge.jpg')
    issue13 = Issue(
        marvelId=10254, cover='http://i.annihil.us/u/prod/marvel/i/mg/9/b0/5d55c5ec7f721/portrait_xlarge.jpg')
    issue14 = Issue(
        marvelId=616, cover='http://i.annihil.us/u/prod/marvel/i/mg/3/70/5bd33e6893510/portrait_xlarge.jpg')
    issue15 = Issue(
        marvelId=641, cover='http://i.annihil.us/u/prod/marvel/i/mg/3/f0/56c38e938402f/portrait_xlarge.jpg')
    issue16 = Issue(
        marvelId=221, cover='http://i.annihil.us/u/prod/marvel/i/mg/c/90/57eada06b928f/portrait_xlarge.jpg')
    issue17 = Issue(
        marvelId=309, cover='http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4bc6a0b0e81d8/portrait_xlarge.jpg')
    issue18 = Issue(
        marvelId=158, cover='http://i.annihil.us/u/prod/marvel/i/mg/9/80/5a941d71c8fb4/portrait_xlarge.jpg')
    issue19 = Issue(
        marvelId=288, cover='http://i.annihil.us/u/prod/marvel/i/mg/2/10/4bc32e6ddffa2/portrait_xlarge.jpg')
    issue20 = Issue(
        marvelId=1993, cover='http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5c48a784d0b00/portrait_xlarge.jpg')
    issue21 = Issue(
        marvelId=1970, cover='http://i.annihil.us/u/prod/marvel/i/mg/f/30/59230a153210b/portrait_xlarge.jpg')
    issue22 = Issue(
        marvelId=2000, cover='http://i.annihil.us/u/prod/marvel/i/mg/1/04/57ae48e7dcea9/portrait_xlarge.jpg')
    issue23 = Issue(
        marvelId=2011, cover='http://i.annihil.us/u/prod/marvel/i/mg/c/c0/5c9a846e54cae/portrait_xlarge.jpg')
    issue24 = Issue(
        marvelId=756, cover='http://i.annihil.us/u/prod/marvel/i/mg/5/b0/5a2b09f4208b1/portrait_xlarge.jpg')

    userIssues1 = UserIssue(userId=1, marvelId=89)
    userIssues2 = UserIssue(userId=1, marvelId=78)
    userIssues3 = UserIssue(userId=1, marvelId=207)
    userIssue4 = UserIssue(userId=2, marvelId=59533)
    userIssue5 = UserIssue(userId=3, marvelId=59527)
    userIssue6 = UserIssue(userId=4, marvelId=25321)
    userIssue7 = UserIssue(userId=1, marvelId=136)
    userIssue8 = UserIssue(userId=1, marvelId=2301)
    userIssue9 = UserIssue(userId=1, marvelId=568)
    userIssue10 = UserIssue(userId=1, marvelId=365)
    userIssue11 = UserIssue(userId=1, marvelId=203)
    userIssue12 = UserIssue(userId=1, marvelId=404)
    userIssue13 = UserIssue(userId=1, marvelId=10254)
    userIssue14 = UserIssue(userId=1, marvelId=616)
    userIssue15 = UserIssue(userId=1, marvelId=641)
    userIssue16 = UserIssue(userId=1, marvelId=221)
    userIssue17 = UserIssue(userId=1, marvelId=309)
    userIssue18 = UserIssue(userId=1, marvelId=158)
    userIssue19 = UserIssue(userId=1, marvelId=288)
    userIssue20 = UserIssue(userId=1, marvelId=1993)
    userIssue21 = UserIssue(userId=1, marvelId=1970)
    userIssue22 = UserIssue(userId=1, marvelId=2000)
    userIssue23 = UserIssue(userId=1, marvelId=2011)
    userIssue24 = UserIssue(userId=1, marvelId=756)

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
    db.session.add(issue7)
    db.session.add(issue8)
    db.session.add(issue9)
    db.session.add(issue10)
    db.session.add(issue11)
    db.session.add(issue12)
    db.session.add(issue13)
    db.session.add(issue14)
    db.session.add(issue15)
    db.session.add(issue16)
    db.session.add(issue17)
    db.session.add(issue18)
    db.session.add(issue19)
    db.session.add(issue20)
    db.session.add(issue21)
    db.session.add(issue22)
    db.session.add(issue23)
    db.session.add(issue24)
    db.session.add(userIssues1)
    db.session.add(userIssues2)
    db.session.add(userIssues3)
    db.session.add(userIssue4)
    db.session.add(userIssue5)
    db.session.add(userIssue6)
    db.session.add(userIssue7)
    db.session.add(userIssue8)
    db.session.add(userIssue9)
    db.session.add(userIssue10)
    db.session.add(userIssue11)
    db.session.add(userIssue12)
    db.session.add(userIssue13)
    db.session.add(userIssue14)
    db.session.add(userIssue15)
    db.session.add(userIssue16)
    db.session.add(userIssue17)
    db.session.add(userIssue18)
    db.session.add(userIssue19)
    db.session.add(userIssue20)
    db.session.add(userIssue21)
    db.session.add(userIssue22)
    db.session.add(userIssue23)
    db.session.add(userIssue24)
    demo.follow(kloie)
    demo.follow(kevin)
    demo.follow(demi)

    db.session.commit()
