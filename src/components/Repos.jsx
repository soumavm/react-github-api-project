import React from 'react';

class Repos extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
        .then(response => response.json())
        .then(
            repos => {
                this.setState({
                    repos: repos
                });
            }
        );
    }


    render(){
        return(
            <div className="repos">
                <h1>hello</h1>
            </div>
        );
    }
}
export default Repos;