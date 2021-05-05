import React from 'react';

class GithubRepo extends React.Component {
    render(){
        return(
            <div>
                <p>
                <a href={this.props.url}> {this.props.name} </a>
                &#11088;
                {this.props.starred}
                </p>
            </div>
        );
    }
}

export default GithubRepo;