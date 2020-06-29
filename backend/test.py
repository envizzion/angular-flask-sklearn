
import csv
import base64
from flask import json

imgcode = base64.b64encode(
    open("graph.png", "rb").read()).decode('utf-8')


result = {
    "fault": "fault",
    "image": imgcode
}

json.dumps(result)
print(imgcode)
