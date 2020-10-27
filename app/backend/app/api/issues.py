import os
import requests
from flask import Blueprint, request, make_response
from hashlib import md5
from datetime import datetime
from .issueDict import issueDict
from ..models import db, UserIssue, User

issuesRoute = Blueprint('issues', __name__)
pubKey = os.environ['MARVEL_PUB_KEY']
priKey = os.environ['MARVEL_PRI_KEY']
timeStamp = datetime.now().strftime("%H:%M:%S")
hashRes = md5((timeStamp + priKey + pubKey).encode()).hexdigest()


@issuesRoute.route('/', methods=['PUT'])
def issueLookup():
    data = request.json
    params = {
        'ts': timeStamp,
        'apikey': pubKey,
        'hash': hashRes
    }
    issues = []
    print(data)
    for marvelId in data['issues']:
        res = requests.get(
            f'https://gateway.marvel.com:443/v1/public/comics/{marvelId}?',
            params=params
        )
        comic = res.json()
        issues.append(comic['data']['results'])
    print(issues)
    return {
        'issues': issueDict(issues)
    }


@issuesRoute.route('/', methods=['DELETE'])
def deleteIssue():
    data = request.json
    issueJoin = UserIssue.query.filter(
        UserIssue.userId == data['userId'], UserIssue.marvelId == data['marvelId']).first()
    db.session.delete(issueJoin)
    db.session.commit()
    user = User.query.filter(User.id == data['userId']).first().toDict()
    if user:
        userIssues = [issue.toDict()
                      for issue in user['issues']]
        issues = [(Issue.query.filter(
            Issue.marvelId == issue['marvelId']).first()).toDict() for issue in userIssues]
        user['issues'] = issues
        return {'user': user}
    else:
        res = make_response({'errors': ['User does not exist']}, 401)
        return res


@issuesRoute.route('/<searchTerm>')
def search(searchTerm):
    params = {
        'ts': timeStamp,
        'apikey': pubKey,
        'hash': hashRes,
        'format': 'comic',
        'noVariants': 'true',
        'title': searchTerm
    }
    res = requests.get(
        'https://gateway.marvel.com:443/v1/public/comics',
        params=params
    )

    issues = res['data']['results']
    return {
        searchTerm: issueDict(issues)
    }
