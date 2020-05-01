'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
      
        return e(
            'button',
            { onClick: () => { this.setState({ liked: true });
            open(location, '_self').close();} },
            'Exit'
        );
    }
}

const domContainer = document.querySelector('#root_element');
ReactDOM.render(e(LikeButton), domContainer);