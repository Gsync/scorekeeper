import React from 'react';
import { Players } from './../api/players';

export default class Player extends React.Component {
    render() {
        return (
            <div className="item" key={this.props.key}>
                <p>{this.props.player.name} has {this.props.player.score} points.</p>
                <button className="button button--round" onClick={() => Players.update({ _id: this.props.player._id }, { $inc: { score: 1 } })}>
                    +1
                </button>
                <button className="button button--round" onClick={() => Players.update({ _id: this.props.player._id }, { $inc: { score: -1 } })}>
                    -1
                </button>
                <button className="button button--round" onClick={() => Players.remove({ _id: this.props.player._id })}>
                    X
                </button>
            </div>
        );
    }
}

Player.propTypes = {
    player: React.PropTypes.object.isRequired //player is an object
};