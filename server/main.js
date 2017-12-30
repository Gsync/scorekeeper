import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(function () {

    Players.insert({
        name: 'Mike',
        score: 5
    });
    console.log(Players.find().fetch());
});