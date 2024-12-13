from flask import Flask, render_template, request, jsonify, redirect, flash

from LoginRegister import LoginRegister_Blueprint
from updateMenu import newFood_Blueprint
import serial
import os
import json
app = Flask(__name__)

OrderID = ""
CostumerName = ""
OrderTime = ""
PizzaName = ""
Intendedfor = ""
Status = ""
   
    

""" ser = serial.Serial("COM3", baudrate=9600, timeout=1)
 """
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'static')
STATIC_DIR = os.path.join(DATA_DIR, 'data')

if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

json_file_path = os.path.join(STATIC_DIR, 'orders.json')

def saveData_JSON(orders):
    with open(json_file_path, 'w') as json_file:
        json.dump(orders, json_file)
        
def load_data_from_json(): 
    if os.path.exists(json_file_path):
            with open(json_file_path, 'r') as json_file:
                content = json_file.read().strip()  
                if not content:  
                    return [] 
                fromJson = json.loads(content)
                return fromJson
            return []

app.secret_key = "TopSecretKey"

app.register_blueprint(LoginRegister_Blueprint)
app.register_blueprint(newFood_Blueprint)

@app.route('/delivery')
def show_deliveryPage():
    return render_template("delivery.html")

@app.route('/delivery', methods = ['POST'])
def get_and_save_delivery_form_values():
    deliveryName = request.form["name"]
    deliveryAddress = request.form["address"]
    deliveryBillingAddress = request.form["billing-address"]
    deliveryZipCode = request.form["zip-code"]
    deliveryTime = request.form["delivery-time"]
    deliveryPizzaChoice = request.form["pizza-choice"]
    Intendedfor = "Delivery"
    status = "Order placed"
    
    orders = load_data_from_json()
    order_id = str(len(orders) + 1)
    
    newOrder = {'id':order_id, 'name': deliveryName, 'address': deliveryAddress, 'billingaddress': deliveryBillingAddress, 'zipcode': deliveryZipCode, 'time': deliveryTime, 'pizzachoice': deliveryPizzaChoice, 'Intendedfor': Intendedfor, 'status': status}
    orders.append(newOrder)

    saveData_JSON(orders)
    return redirect ('/delivery')

@app.route('/take-out')
def show_takeoutPage():
    return render_template("take-out.html")

@app.route('/take-out', methods = ['POST'])
def get_and_save_take_out_form_values():
    takeOutName = request.form["name"]
    takeOutBillingAddress = request.form["billing-address"]
    takeOutTime = request.form["take-out-time"]
    takeOutPizzaChoice = request.form["pizza-choice"]
    Intendedfor = "Take-Out"
    status = "Order placed"
    orders = load_data_from_json()
  
    order_id = str(len(orders) + 1)
    
    newOrder = {'id':order_id, 'name': takeOutName, 'address': "", 'billingaddress': takeOutBillingAddress, 'zipcode': "", 'time': takeOutTime, 'pizzachoice': takeOutPizzaChoice, 'Intendedfor': Intendedfor, 'status': status}
    orders.append(newOrder)

    saveData_JSON(orders)
    return redirect ('/take-out')

@app.route('/')
def show_home():
    return render_template("home.html")

@app.route('/menu')
def show_menu():
    return render_template("menu.html")
""" Luigi's Page """
def renderLuigiPage():
    global OrderID
    global CostumerName
    global OrderTime
    global PizzaName
    global Intendedfor
    global Status

    maxLength = 4
    pizzaInOven = []
    order = ""
    orders = load_data_from_json()
 
    for x in orders:
        order = x

    OrderID = order.id
    CostumerName = order.name
    OrderTime = order.time
    PizzaName = order.pizzachoice
    Intendedfor = order.Intendedfor
    Status = order.status


   


@app.route('/luigi')
def show_luigipage():
    return render_template("luigi.html",
                           pizzaName = PizzaName,
                           OrderID = OrderID,
                           OrderTime = OrderTime,
                           CostumerName = CostumerName,
                           Intendedfor = Intendedfor,
                           Status = Status
                           )




@app.route('/cart')
def show_cart():
    return render_template("cart.html")


@app.route('/luigi')
def index():
    return render_template("luigi.html")
""" @app.route('/toggle_led', methods=['POST'])
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
        return jsonify({"error": str(e)}), 500 """
    
if __name__ == '__main__':
    app.run(debug=False)