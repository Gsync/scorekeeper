import React from 'react';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

//throws error if title is not string or not defined
TitleBar.propTypes = {
    title: React.PropTypes.string.isRequired
};

//sets the default title if not defined (remove isRequired above)
TitleBar.defaultProps = {
    // title: 'Default App Title'
};