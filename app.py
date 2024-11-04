from flask import Flask, render_template
from Menu import Menu_Blueprint
from LoginRegister import LoginRegister_Blueprint
app = Flask(__name__)

@app.route('/login')
def show_loginPage():
    return render_template("login.html")

@app.route('/register')
def show_registerPage():
    return render_template("register.html")

app.register_blueprint(Menu_Blueprint)
app.register_blueprint(LoginRegister_Blueprint)



@app.route('/delivery')
def show_deliveryPage():
    return render_template("delivery.html")

@app.route('/take-out')
def show_takeoutPage():
    return render_template("take-out.html")

if __name__ == '__main__':
    app.run(debug=True)