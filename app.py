from flask import Flask, render_template, jsonify, Blueprint
from flask_cors import CORS
import sqlite3
import psycopg2
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5500"}})

@app.route("/")
def index():
    return render_template("index.html")



@app.route("/api/latitude_and_longitude")
def latlon():
    conn = psycopg2.connect(database="postgres", user="postgres", password="postgres", port="5432")
    query = "SELECT * FROM Latitude_and_Longitude"
    data = pd.read_sql(query, conn)
    conn.close()
    return jsonify(data.to_json(orient="records"))





if __name__ == "__main__":
    app.run(debug=True)
    