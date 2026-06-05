from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.character_model import Character

character_bp = Blueprint(
    "characters",
    __name__,
    url_prefix="/characters"
)

#CREATE

@character_bp.route("/", methods=["POST"])
def create_character():

    data = request.get_json()

    character = Character(
        name=data["name"],
        race=data["race"],
        character_class=data["character_class"],
        level=data.get("level", 1),
        hp=data["hp"],
        user_id=data["user_id"],
        campaign_id=data["campaign_id"]
    )

    db.session.add(character)
    db.session.commit()

    return jsonify({
    "message": "Character created",
    "id": character.id
}), 201

#READ ALL

@character_bp.route("/", methods=["GET"])
def get_characters():

    characters = Character.query.all()

    result = []

    for character in characters:
        result.append({
            "id": character.id,
            "name": character.name,
            "race": character.race,
            "character_class": character.character_class,
            "level": character.level,
            "hp": character.hp,
            "user_id": character.user_id,
            "campaign_id": character.campaign_id
        })

    return jsonify(result), 200

#READ ONE

@character_bp.route("/<int:id>", methods=["GET"])
def get_character(id):

    character = Character.query.get_or_404(id)

    return jsonify({
        "id": character.id,
        "name": character.name,
        "race": character.race,
        "character_class": character.character_class,
        "level": character.level,
        "hp": character.hp,
        "user_id": character.user_id,
        "campaign_id": character.campaign_id
    }), 200

#UPDATE 

@character_bp.route("/<int:id>", methods=["PUT"])
def update_character(id):

    character = Character.query.get_or_404(id)

    data = request.get_json()

    character.name = data.get("name", character.name)
    character.race = data.get("race", character.race)
    character.character_class = data.get(
        "character_class",
        character.character_class
    )
    character.level = data.get("level", character.level)
    character.hp = data.get("hp", character.hp)

    db.session.commit()

    return jsonify({
        "message": "Character updated"
    }), 200

#DELETE

@character_bp.route("/<int:id>", methods=["DELETE"])
def delete_character(id):

    character = Character.query.get_or_404(id)

    db.session.delete(character)
    db.session.commit()

    return jsonify({
        "message": "Character deleted"
    }), 200