from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from urllib.parse import quote_plus

app = Flask(__name__)

# Enable CORS for specific frontend (e.g., React app)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})  # Assuming React runs on localhost:5173


# MongoDB credentials (hardcoded)
username = quote_plus("manishgga091")
password = quote_plus("9102326770manish")
cluster_url = "cluster0.ufimslv.mongodb.net"

# MongoDB connection string with database name
connection_string = f"mongodb+srv://{username}:{password}@{cluster_url}/ecommerceNew?retryWrites=true&w=majority"

# Connect to MongoDB client
myclient = MongoClient(connection_string)
db = myclient["ecommerceNew"]
collection = db["addedCartItem"]
users_collection = db["users_collections"]
@app.route('/add-to-cart', methods=['POST'])
def add_to_cart():
    try:
        data = request.json  # Get the JSON data sent in the request
        if not data:
            return jsonify({"error": "No data provided"}), 400

        # Insert data into MongoDB
        result = collection.insert_one(data)
        return jsonify({"message": "Item added to cart", "id": str(result.inserted_id)}), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/get-cart', methods=['GET'])
def get_cart():
    try:
        # Fetch all items in the cart
        cart_items = list(collection.find({}, {"_id": 0}))  # Exclude MongoDB _id
        return jsonify({"cart": cart_items}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    


#login
@app.route('/signin', methods=['POST'])
def sign_in():
    data = request.get_json()  # Get data from request body (JSON)
    
    email = data.get('email')
    password = data.get('password')
    
    # Validate input
    if not email or not password:
        return jsonify({"error": "Email and password are required!"}), 400
    
    # Check if user exists and password matches
    if email in users and users[email]["password"] == password:
        return jsonify({"message": "Sign-in successful!"}), 200
    else:
        return jsonify({"error": "Invalid email or password!"}), 401
    

    
#register
@app.route('/register', methods=['POST'])

def register_user():
    try:
        data = request.json  # Get the JSON data sent in the request

        if not data:
            return jsonify({"error": "No data provided"}), 400

        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # Check if username or email already exists
        existing_user = users_collection.find_one({"email": email})
        if existing_user:
            return jsonify({"error": "Email already in use"}), 400

        # Create a new user object (storing password directly, without hashing)
        user = {
            "username": username,
            "email": email,
            "password": password,  # Store the password directly (NOT recommended in production)
        }

        # Insert the user into the users collection
        result = users_collection.insert_one(user)

        return jsonify({"message": "User registered successfully", "user_id": str(result.inserted_id)}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)
