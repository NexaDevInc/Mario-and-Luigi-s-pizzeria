from flask import Flask, render_template

app = Flask(__name__)

@app.route('/delivery')
def show_deliveryPage():
    return render_template("delivery.html")

@app.route('/take-out')
def show_takeoutPage():
    return render_template("take-out.html")

if __name__ == '__main__':
    app.run(debug=True)