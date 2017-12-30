import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'; //meteor modules in meteor director

const players = [{
    _id: '1',
    name: 'Mike',
    score: 98
}, {
    _id: '2',
    name: 'Jack',
    score: -1
}, {
    _id: '3',
    name: 'Susane',
    score: -12
}];

const renderPlayers = function (players) {
    return players.map(function (player) {
         return (
         <p key={player._id}>{player.name} has {player.score} points.</p>
         );
    });
};

Meteor.startup(function () {
    let title = 'Score Keep';
    let name = 'Khuram';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hello {name}!</p>
            {renderPlayers(players)}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));

});

