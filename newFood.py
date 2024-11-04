from flask import render_template, request, redirect, Blueprint, flash
import os
import json

newFood_Blueprint = Blueprint('newfood', __name__)


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')

if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

json_file_path = os.path.join(DATA_DIR, 'Menu.json')

def saveData_JSON(pizzas):
    with open(json_file_path, 'w') as json_file:
        json.dump(pizzas, json_file)
        
def load_data_from_json(): 
    if os.path.exists(json_file_path):
            with open(json_file_path, 'r') as json_file:
                content = json_file.read().strip()  
                if not content:  
                    return [] 
                fromJson = json.loads(content)
                return fromJson
            return []





@newFood_Blueprint.route('/newfood')
def show_newfood():
    return render_template('newFood.html')


@newFood_Blueprint.route('/addnew', methods=['POST'])
def add_new_pizza():
    
    pizza_name = request.form.get('pizzaName')
    description = request.form.get('description')
    ingredients = request.form.getlist('ingridient')
    small_price = request.form.get('small')
    medium_price = request.form.get('medium')
    large_price = request.form.get('large')
    vegetarian = request.form.get('vegetarian') == 'true'
    calories = request.form.get('calories')

    pizza_data = {
        "pizza_id": str(len(os.listdir(json_file_path)) + 1),  
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
    
    
    saveData_JSON(pizza_data)