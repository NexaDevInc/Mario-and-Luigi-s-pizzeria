from flask import Flask, render_template, request, redirect, Blueprint, flash
import os
import json

app = Flask(__name__)
app.secret_key = 'your_secret_key'  


newFood_Blueprint = Blueprint('newfood', __name__, url_prefix='/newfood')


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')
json_file_path = os.path.join(DATA_DIR, 'Menu.json')


if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

def save_data_json(pizza_data):
    pizzas = load_data_from_json()
    pizzas.append(pizza_data)
    with open(json_file_path, 'w') as json_file:
        json.dump(pizzas, json_file, indent=4)

def load_data_from_json():
    if os.path.exists(json_file_path):
        with open(json_file_path, 'r') as json_file:
            content = json_file.read().strip()
            if not content:
                return []
            return json.loads(content)
    return []


@app.route('/')
def show_newfood():
    return render_template('mario.html') 


@app.route('/submit', methods=['POST'])
def add_new_pizza():
    pizza_name = request.form.get('pizzaName')
    description = request.form.get('description')
    ingredients = request.form.getlist('ingridient')
    small_price = request.form.get('small')
    medium_price = request.form.get('medium')
    large_price = request.form.get('large')
    vegetarian = request.form.get('vegetarian')
    calories = request.form.get('calories')

    pizzas = load_data_from_json()
    pizza_id = str(len(pizzas) + 1)

    pizza_data = {
        "pizza_id": pizza_id,
        "name": pizza_name,
        "description": description,
        "ingredients": ingredients,
        "size_options": [
            {"size": "small", "price": float(small_price)},
            {"size": "medium", "price": float(medium_price)},
            {"size": "large", "price": float(large_price)}
        ],
        "vegetarian": vegetarian,
        "calories": int(calories)
    }

    save_data_json(pizza_data)
    flash('Pizza added successfully!')
    return redirect('/newfood')

app.register_blueprint(newFood_Blueprint)

if __name__ == '__main__':
    app.run(debug=True)