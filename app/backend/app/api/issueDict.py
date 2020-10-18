

def issueDict(issues):
    comics = []
    for issue in issues:
        comics.append(
            {
                'marvelId': issue.id,
                'title': issue.title,
                'description': issue.description,
                'format': issue.format,
                'pageCount': issue.pageCount,
                'series': issue.series,
                'collectedIssues': issue.collectedIssues,
                'cover': issue.thumbnail,
                'creators': issue.creators
            }
        )
    return comics
