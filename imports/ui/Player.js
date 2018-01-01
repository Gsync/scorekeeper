import React from 'react';
import { Players } from './../api/players';

export default class Player extends React.Component {
    render() {
        return (
            <div className="item" key={this.props.key}>
                <p>{this.props.player.name} has {this.props.player.score} points.</p>
                <button onClick={() => Players.update({ _id: this.props.player._id }, { $inc: { score: 1 } })}>
                    +1
                </button>
                <button onClick={() => Players.update({ _id: this.props.player._id }, { $inc: { score: -1 } })}>
                    -1
                </button>
                <button onClick={() => Players.remove({ _id: this.props.player._id })}>
                    Delete
                </button>
            </div>
        );
    }
}

Player.propTypes = {
    player: React.PropTypes.object.isRequired //player is an object
};