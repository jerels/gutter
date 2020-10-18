import requests
from hashlib import md5
from datetime import datetime

pubKey = '63f254f645d4b78201ac7b3bf42e6876'
priKey = 'fb2fa1229684757fe38c21e1a006f9e28c18de72'
ts = datetime.now().strftime("%H:%M:%S")
hashy = ts + priKey + pubKey
hashRes = md5(hashy.encode())
data = {
    'ts': ts,
    'apikey': pubKey,
    'hash': hashRes.hexdigest(),
    'format': 'comic',
    'formatType': 'comic',
    'noVariants': 'true',
    'titleStartsWith': 'x-men',
    'issueNumber': 1,
    'limit': 10
}


res = requests.get(
    'https://gateway.marvel.com:443/v1/public/comics',
    params=data
)

comics = res.json()['data']['results']

print(comics[9])
