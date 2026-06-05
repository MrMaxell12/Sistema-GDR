from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models.campaign_model import Campaign

campaign_bp = Blueprint(
    "campaigns",
    __name__,
    url_prefix="/campaigns"
)

#READ ALL

@campaign_bp.route("/", methods=["GET"])
def get_campaigns():

    campaigns = Campaign.query.all()

    result = []

    for campaign in campaigns:
        result.append({
            "id": campaign.id,
            "name": campaign.name,
            "description": campaign.description,
            "campaign_master": campaign.campaign_master
        })

    return jsonify(result), 200

#READ ONE

@campaign_bp.route("/<int:id>", methods=["GET"])
def get_campaign(id):

    campaign = Campaign.query.get_or_404(id)

    return jsonify({
        "id": campaign.id,
        "name": campaign.name,
        "description": campaign.description,
        "campaign_master": campaign.campaign_master
    }), 200

#UPDATE

@campaign_bp.route("/<int:id>", methods=["PUT"])
def update_campaign(id):

    campaign = Campaign.query.get_or_404(id)

    data = request.get_json()

    campaign.name = data.get("name", campaign.name)
    campaign.description = data.get(
        "description",
        campaign.description
    )

    campaign.campaign_master =data.get(
        "campaign_master",
        campaign.campaign_master
    )

    db.session.commit()

    return jsonify({
        "message": "Campaign updated"
    }), 200

#POST

@campaign_bp.route("/", methods=["POST"])
def create_campaign():

    data = request.get_json()

    campaign = Campaign(
        name=data["name"],
        description=data.get("description"),
        campaign_master=data.get("campaign_master")
    )
    

    db.session.add(campaign)
    db.session.commit()

    return jsonify({
        "message": "Campaign created"
    }), 201

#DELETE

@campaign_bp.route("/<int:id>", methods=["DELETE"])
def delete_campaign(id):

    campaign = Campaign.query.get_or_404(id)

    db.session.delete(campaign)
    db.session.commit()

    return jsonify({
        "message": "Campaign deleted"
    }), 200