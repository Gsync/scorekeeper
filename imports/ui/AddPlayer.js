import React from 'react';
import { Players } from './../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit (e) {
        e.preventDefault();
        let playerName = e.target.playerName.value; //form input name property
        if (playerName) {
            e.target.playerName.value = '';
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }
    render() {
        return (
            <div className="item">
                <form onSubmit={this.handleSubmit.bind(this)}> {/* binds this to current function */}
                    <input type="text" name="playerName" placeholder="Player Name..." />
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }
}