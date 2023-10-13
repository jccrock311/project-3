from flask import Flask, render_template, jsonify
import sqlite3

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/data")
def get_data():
    conn = sqlite3.connect("")
    cursor = conn.cursor()
    query = "SELECT * FROM <insert DB here>"
    data = cursor.execute(query).fetchall()
    conn.close()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)