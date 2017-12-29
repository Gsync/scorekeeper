import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'; //meteor modules in meteor director

Meteor.startup(function () {

    let name = 'Khuram';
    let jsx = <p>Hello {name}</p>;
    ReactDOM.render(jsx, document.getElementById('app'));

});

