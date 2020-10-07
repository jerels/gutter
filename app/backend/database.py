from app.models.user import User
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(username='demo', email='demo@demo.com', password='password')

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

    db.session.commit()
