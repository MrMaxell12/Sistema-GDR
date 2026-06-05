from app.extensions import db

class Campaign(db.Model):
    __tablename__ = "campaigns"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    campaign_master = db.Column(db.Integer,db.ForeignKey("user.id"))