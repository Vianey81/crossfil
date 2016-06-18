from flask import Flask, render_template, request, url_for
import jinja2

app = Flask(__name__)


@app.route("/")
def index_page():
    """Show an index page."""

    # Alternately, we could make this a Jinja template in `templates/`
    # and return that result of rendering this, like:
    #
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
    url_for('static/data', filename='MOCK_DATA.json')
