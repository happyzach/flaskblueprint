from flask import Flask

app = Flask(__name__)

from bluetest.scriptone.routes import one_mod
from bluetest.scripttwo.routes import two_mod

app.register_blueprint(one_mod, url_prefix='/scriptone')
app.register_blueprint(two_mod, url_prefix='/scripttwo')
