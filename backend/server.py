from flask import Flask, request, json
from flask_restful import Resource, Api
from flask_cors import CORS
import csv
from prediction import Predictor
import base64


app = Flask(__name__)
CORS(app)

predictor = Predictor()


@app.route('/save', methods=["POST"])
def save():

    error = ''
    try:

        data = json.loads(request.data)
        print(data["YEAR"])
        writeToCSV(data)
        return json_response("Success")

    except Exception as e:
        print(e)
        return json_response("Failure")

@app.route('/predict', methods=["POST"])
def predict():

    error = ''
    try:

        data = json.loads(request.data)

        print(data)
        fault = predictor.predictResult(data['year'], data['mileage'])
        imgcode = base64.b64encode(
            open("graph.png", "rb").read()).decode('utf-8')
        result = {
            "fault": fault,
            "image": imgcode
        }

        return json_response(result)

    except Exception as e:
        print(e)
        return json_response("Failure")


def json_response(payload, status=200):
    return (json.dumps(payload), status, {'content-type': 'application/json'})


def writeToCSV(dataAsdict):
    with open(r'data.csv', "r") as f:
        reader = csv.reader(f)
        for header in reader:
            break

# add row to CSV file
    with open(r'data.csv', "a", newline='') as f:
        writer = csv.DictWriter(f, fieldnames=header)
        writer.writerow(dataAsdict)


if __name__ == '__main__':
    app.run(port=5002)
