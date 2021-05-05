import React from 'react';

class GithubRepo extends React.Component {
    render(){
        return(
            <div>
                <a href={this.props.url}>
                    {this.state.name}
                </a>
            </div>
        );
    }
}

export default GithubRepo;