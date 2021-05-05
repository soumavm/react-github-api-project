import React from 'react';

class GithubRepo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            url: "",
            starred: 0
        };
    }

    render(){
        return(
            <div>
                <p>
                    {this.state.url}
                </p>
            </div>
        );
    }
}

export default GithubRepo;