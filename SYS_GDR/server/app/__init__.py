from flask import Flask
from .config import Config
from .extensions import db
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    CORS(app, origins='*')

    app.config.from_object(Config)

    db.init_app(app)

    #IMPORTA O MODEL USER
    from app.models.user_model import User
    from app.models.campaign_model import Campaign

    # IMPORTA O BLUEPRINT
    from app.routes.user_routes import user_bp
    from app.routes.campaign_routes import campaign_bp 
    from app.routes.character_routes import character_bp
    from app.routes.session_routes import session_bp
    from app.routes.auth_routes import auth_bp
    

    # REGISTRA O BLUEPRINT
    app.register_blueprint(user_bp)
    app.register_blueprint(campaign_bp)
    app.register_blueprint(character_bp)
    app.register_blueprint(session_bp)
    app.register_blueprint(auth_bp)

    return app