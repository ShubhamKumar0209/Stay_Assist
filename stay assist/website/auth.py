from flask import Blueprint, render_template,request

auth = Blueprint('auth', __name__)

@auth.route('/sign_in',methods=['GET','POST'])
def sign_in():
    data=request.form
    print(data)
    return render_template('sign_in.html')

@auth.route('/sign_up')
def sign_up():
    return render_template('sign_up.html')
