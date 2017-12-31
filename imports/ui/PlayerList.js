import React from 'react';
import Player from './Player';

export default class PlayerList extends React.Component {
    renderPlayers () {
        if (this.props.players.length > 0) {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player} />;
            });
        } else {
            return <p>There are no players added yet, Please add one!</p>;
        }
    }
    render () {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
}

PlayerList.prototypes = {
    players: React.PropTypes.array.isRequired
}