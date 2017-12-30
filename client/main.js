import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'; //meteor modules in meteor director
import { Players } from './../imports/api/players';
import {Tracker} from 'meteor/tracker';



const renderPlayers = (players) => {
    return players.map((player) => {
         return (
            <p key={player._id}>
                {player.name} has {player.score} points.
                <button onClick={() => Players.update({ _id: player._id }, { $inc: { score: 1 } })}>
                    +1
                </button>
                <button onClick={() => Players.update({ _id: player._id }, { $inc: { score: -1 } })}>
                    -1
                </button>
                <button onClick={() => Players.remove({ _id: player._id })}>
                    Delete
                </button>
            </p>
         );
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    let playerName = e.target.playerName.value; //form input name property
    if (playerName) {
        e.target.playerName.value = '';
        Players.insert({
            name: playerName,
            score: 15
        });
    }
};

Meteor.startup(() => {

    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = 'Score Keep';
        let name = 'Khuram';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}!</p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player Name..." />
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });

});

