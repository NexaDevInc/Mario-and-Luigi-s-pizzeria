from flask import render_template, request, redirect, Blueprint, flash
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
import os
import json


LoginRegister_Blueprint = Blueprint('LoginRegister', __name__)

peopleInSys = []



BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')

if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

json_file_path = os.path.join(DATA_DIR, 'profiles.json')

def saveData_JSON(profiles):
    with open(json_file_path, 'w') as json_file:
        json.dump(profiles, json_file)
        
def load_data_from_json(): 
    if os.path.exists(json_file_path):
            with open(json_file_path, 'r') as json_file:
                content = json_file.read().strip()  
                if not content:  
                    return [] 
                fromJson = json.loads(content)
                return fromJson
            return []



@LoginRegister_Blueprint.route('/login')
def show_login():
    return render_template('login.html')

@LoginRegister_Blueprint.route('/login', methods = ['POST'])
def login_person():
    username = request.form['username']
    password = request.form['password']
    
    profiles = load_data_from_json()
    persondata = next((profile for profile in profiles if profile['username'] == username), None)
    

    if persondata and check_password_hash(persondata['password'], password):
            print("Check", check_password_hash(persondata['password'], password))
            return redirect('/home')
    else:
        flash("Invalid username or password")
        return redirect('/login')

@LoginRegister_Blueprint.route('/register')
def show_register():
    return render_template('register.html')

@LoginRegister_Blueprint.route('/register', methods = ['POST'])
def register_person():
    global peopleInSys
    id = uuid.uuid1()
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']

    profiles = load_data_from_json()
    
    if any(profile['username'] == username for profile in profiles):
        flash("Username already taken")
        return redirect('/register')
    
    hashed_password = generate_password_hash(password)
    print("save", hashed_password)
    
    newPerson = {'id': str(id), 'username': username, 'password': hashed_password, 'email': email}
    profiles.append(newPerson)

    print(profiles)
    saveData_JSON(profiles)
        
    return redirect('/login')



""" @LoginRegister_Blueprint.route('/employees')
def show_Employees():
    profiles = load_data_from_json()
    return render_template('employees.html', profiles = profiles) """