from flask import Flask, render_template, request, redirect, Blueprint, flash
import os
import json

newFood_Blueprint = Blueprint('newfood', __name__)


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


@newFood_Blueprint.route('/mario')
def show_newfood():
    return render_template('mario.html') 


@newFood_Blueprint.route('/submit', methods=['POST'])
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
        "calories": int(calories),
        "available_toppings": [
            {"topping": "Pepperoni ", "price": 1.5},
            {"topping": "Mushrooms", "price": 1.0},
            {"topping": "Onions", "price": 1.2},
            {"topping": "Bacon", "price": 1.2},
            {"topping": "Extra Cheese", "price": 1.2},
            {"topping": "Black Olives", "price": 1.2},
            {"topping": "Green Peppers", "price": 1.2},
            {"topping": "Pineapple", "price": 1.2},
            {"topping": "Spinach", "price": 1.2},
            {"topping": "Anchovies", "price": 1.2},
            {"topping": "Garlic", "price": 1.2},
            {"topping": "Tomatoes", "price": 1.2},
            {"topping": "Artichokes", "price": 1.2},
            {"topping": "Basil", "price": 1.2
            }
        ]
    }

    save_data_json(pizza_data)
    flash('Pizza added successfully!')
    return redirect('/newfood')


