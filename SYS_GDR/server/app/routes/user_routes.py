from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.user_model import User

user_bp = Blueprint(
    "users",
    __name__,
    url_prefix="/users"
)

#CREATE 

@user_bp.route("/", methods=["POST"])
def create_user():

    data = request.get_json()

    user = User(
        username=data["username"],
        email=data["email"],
        password=data["password"]
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({
        "message": "User created"
    }), 201

#READ ALL

@user_bp.route("/", methods=["GET"])
def get_users():
    users = User.query.all()

    result = []

    for user in users:
        result.append({
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "password": user.password
        })

    return jsonify(result), 200

#READ ONE

@user_bp.route("/<int:id>", methods=["GET"])
def ger_user(id):

    user = User.query.get_or_404(id)

    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "password": user.password
    }), 200

#UPDATE

@user_bp.route("/<int:id>", methods=["PUT"])
def update_user(id):

    user = User.query.get_or_404(id)

    data = request.get_json()

    user.name = data.get("username", user.username)
    user.email = data.get(
        "email",
        user.email
    )
    user.password = data.get(
        "password",
        user.password
    )

    db.session.commit()

    return jsonify({
        "message": "User updated"
    }), 200

#DELETE

@user_bp.route("/<int:id>", methods=["DELETE"])
def delete_user(id):

    user = User.query.get_or_404(id)

    db.session.delete(user)
    db.session.commit()

    return jsonify({
        "message": "User deleted"
    }), 200