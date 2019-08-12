from flask import Blueprint, render_template

one_mod = Blueprint('scriptone', __name__, template_folder='../templates')

@one_mod.route('/')
def index():
    return render_template('scriptone/index.html')