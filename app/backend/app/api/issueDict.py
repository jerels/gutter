

def issueDict(issues):
    comics = []
    for issue in issues:
        for comic in issue:
            cover = comic['thumbnail']
            comics.append(
                {
                    'marvelId': comic['id'],
                    'title': comic['title'],
                    'description': comic['description'],
                    'format': comic['format'],
                    'pageCount': comic['pageCount'],
                    'series': comic['series'],
                    'collectedIssues': comic['collectedIssues'],
                    # 'cover': cover['path'] + '/portrait_xlarge.' + cover['extension'],
                    'creators': comic['creators']
                }
            )
    return comics
