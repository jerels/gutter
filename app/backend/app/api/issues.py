import os
import requests
from flask import Blueprint, request
from hashlib import md5
from datetime import datetime
from .issueDict import issueDict

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
