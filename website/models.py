from . import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    first_name = db.Column(db.String(150), nullable=False)
    last_name = db.Column(db.String(150), nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    hostel = db.Column(db.String(50), nullable=False)
    block = db.Column(db.String(50), nullable=False)
    room_number = db.Column(db.String(10), nullable=False)

    def set_password(self, password):
        self.password = generate_password_hash(password, method='pbkdf2:sha256')  # Use a valid method

    def check_password(self, password):
        return check_password_hash(self.password, password)