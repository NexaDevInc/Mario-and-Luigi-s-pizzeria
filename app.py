from flask import Flask, render_template, request, jsonify
from Menu import Menu_Blueprint
from LoginRegister import LoginRegister_Blueprint
import serial
app = Flask(__name__)


app.secret_key = "TopSecretKey"

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

@app.route('/home')
def show_home():
    return render_template("home.html")

ser = serial.Serial("COM4", baudrate=9600, timeout=1)

@app.route('/oven')
def index():
    return render_template("oven.html")

@app.route('/toggle_led', methods=['POST'])
def toggle_led():
    try:
        # Receive the LED command from the request
        data = request.get_json()
        led_command = data.get("led_command")
        
        # Ensure the serial port is open
        if not ser.is_open:
            ser.open()

        # Send the command to the Arduino
        ser.write(led_command.encode())

        return jsonify({"message": f"{led_command} sent"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)