import os
import json
from pyairtable import Table

api_key = os.environ['AIRTABLE_API_KEY']
table = Table(api_key, 'appnxOiOV6UpMOD3B', 'tblS3vEnNZT8xrmDg')

data = {
    "Count": len(table.all()) + 1000
}

with open('pages/api/data.json', 'w') as fp:
    json.dump(data, fp)

print(len(table.all()))
