from flask import render_template, request, redirect, Blueprint, flash
import uuid
import os
import json

Menu_Blueprint = Blueprint('MenuBluepirnt', __name__)

""" 
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')

if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

json_file_path = os.path.join(DATA_DIR, 'Menu.json')

def SaveNewFood(newFood):
    with open(json_file_path, 'w') as json_file:
        json.dump(newFood, json_file)

def load_data_from_json(): 
    if os.path.exists(json_file_path):
            with open(json_file_path, 'r') as json_file:
                content = json_file.read().strip()  
                if not content:  
                    return [] 
                fromJson = json.loads(content)
                return fromJson
            return []
 """
@Menu_Blueprint.route('/menu')
def show_menu():
    return render_template("menu.html")