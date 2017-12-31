import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'; //meteor modules in meteor director
import { Players } from './../imports/api/players';
import App from './../imports/ui/App';
import {Tracker} from 'meteor/tracker';

Meteor.startup(() => {

    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = 'Score Keep';
        ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
    });
});

