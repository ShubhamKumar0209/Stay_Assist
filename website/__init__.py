from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

db = SQLAlchemy()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'stay1123'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///stay_assist.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'auth.sign_in'  # Route for the login page

    # Define the user_loader function
    @login_manager.user_loader
    def load_user(user_id):
        from .models import User  # Import the User model here to avoid circular imports
        return User.query.get(int(user_id))

    # Register blueprints
    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/auth')

    with app.app_context():
        db.create_all()

    return app