import React, {Component} from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <a id={'resume-pdf'} className="link" href={'./Senior-UI-Designer-Developer-PeeraShaik.pdf'} rel="noreferrer">Download - RESUME</a>
        );
    }
}

export default Resume;