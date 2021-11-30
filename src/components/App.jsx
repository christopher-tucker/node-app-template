import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstState: null
        };
        this.callFirstEndpoint = this.callFirstEndpoint.bind(this);
    }

    componentDidMount() {
        this.callFirstEndpoint();
    }

    callFirstEndpoint() {
        return axios.get('/firstEndpoint')
        .then((res) => {
            console.log('res:', res);
            this.setState(firstState: res);
        })
        .catch((err) => {
            console.log('err:', err);
        });
    };

    render() {
        return (
            <div className="AppComponentDiv">
                I'm not a bitch, you're a bitch, bitch.
                <div>
                    first state:
                    {this.state.firstState}
                </div>
            </div>
        );
    }
};

export default App;