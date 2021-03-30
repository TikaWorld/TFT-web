import json

from flask import Flask, request
from flask_cors import CORS
from battle.battle import Battle

app = Flask(__name__)
cors = CORS(app, resources={
  r"/*": {"origin": "*"}
})

@app.route('/')
def home():
    return "home"

@app.route('/field', methods=['POST'])
def field():
    field = request.get_json()['field']
    game = Battle()
    team = {'red': game.create_team('red'), 'blue': game.create_team('blue')}
    for d in field.values():
        c = game.create_champion(team[d['team']], d['championId'], d['level'])
        game.batch_champion(c, [d['pos']['y'], d['pos']['x']])
    r = json.dumps(game.get_current())
    return r

if __name__ == '__main__':
    app.run(debug=True)
