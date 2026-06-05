from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.session_model import Session

session_bp = Blueprint(
    "sessions",
    __name__,
    url_prefix="/sessions"
)

# CREATE
@session_bp.route("/", methods=["POST"])
def create_session():

    data = request.get_json()

    session = Session(
        title=data["title"],
        description=data.get("description"),
        date=data["date"],
        campaign_id=data["campaign_id"]
    )

    db.session.add(session)
    db.session.commit()

    return jsonify({
        "message": "Session created",
        "id": session.id
    }), 201


# READ ALL
@session_bp.route("/", methods=["GET"])
def get_sessions():

    sessions = Session.query.all()

    result = []

    for session in sessions:
        result.append({
            "id": session.id,
            "title": session.title,
            "description": session.description,
            "date": str(session.date),
            "campaign_id": session.campaign_id
        })

    return jsonify(result), 200


# READ ONE
@session_bp.route("/<int:id>", methods=["GET"])
def get_session(id):

    session = Session.query.get_or_404(id)

    return jsonify({
        "id": session.id,
        "title": session.title,
        "description": session.description,
        "date": str(session.date),
        "campaign_id": session.campaign_id
    }), 200


# UPDATE
@session_bp.route("/<int:id>", methods=["PUT"])
def update_session(id):

    session = Session.query.get_or_404(id)

    data = request.get_json()

    session.title = data.get("title", session.title)
    session.description = data.get(
        "description",
        session.description
    )
    session.date = data.get("date", session.date)

    db.session.commit()

    return jsonify({
        "message": "Session updated"
    }), 200


# DELETE
@session_bp.route("/<int:id>", methods=["DELETE"])
def delete_session(id):

    session = Session.query.get_or_404(id)

    db.session.delete(session)
    db.session.commit()

    return jsonify({
        "message": "Session deleted"
    }), 200