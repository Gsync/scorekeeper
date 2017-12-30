import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'; //meteor modules in meteor director
import { Players } from './../imports/api/players';
import {Tracker} from 'meteor/tracker';



const renderPlayers = function (players) {
    return players.map(function (player) {
         return (
         <p key={player._id}>{player.name} has {player.score} points.</p>
         );
    });
};

const handleSubmit = function (e) {
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

Meteor.startup(function () {

    Tracker.autorun(function () {
        let players = Players.find().fetch();
        let title = 'Score Keep';
        let name = 'Khuram';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}!</p>
                {renderPlayers(players)}
                <form action="POST" onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player Name..." />
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });

});

