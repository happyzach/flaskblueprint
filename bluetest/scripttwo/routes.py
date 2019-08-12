from flask import Blueprint, render_template

two_mod = Blueprint('two', __name__, template_folder='../templates')

@two_mod.route('/')
def index():
    # nav links are for different nav links to be displayed on the homepage
    nav_links = [('loadDoc("add")', 'NEW'),
                 ('loadDoc("all")', 'SHOW ALL')]

    # script path is used to load route specific javascript
    script_path = f"../static/js/scripttwo.js"
    return render_template('scripttwo/index.html',
                           title="script two",
                           script_path=script_path,
                           nav_links=nav_links)

@two_mod.route('/add')
def add():
    return "<h2>ADD NEW QUERY</h1>"


@two_mod.route('/all')
def all():
    return "<h5>VIEW ALL QUERIES</h5>"


@two_mod.route('/thing3')
def thing3():
    return "<h5>THIS IS FROM THING 3</h5>"
