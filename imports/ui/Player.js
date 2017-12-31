import React from 'react';
import { Players } from './../api/players';

export default class Player extends React.Component {
    render() {
        return (
            <p key={this.props.key}>
                {this.props.player.name} has {this.props.player.score} points.
                <button onClick={() => Players.update({ _id: this.props.player._id }, { $inc: { score: 1 } })}>
                    +1
                </button>
                <button onClick={() => Players.update({ _id: this.props.player._id }, { $inc: { score: -1 } })}>
                    -1
                </button>
                <button onClick={() => Players.remove({ _id: this.props.player._id })}>
                    Delete
                </button>
            </p>
        );
    }
}

Player.propTypes = {
    player: React.PropTypes.object.isRequired //player is an object
};