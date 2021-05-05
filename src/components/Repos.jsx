import React from 'react';
import GithubRepo from './GithubRepo';

class Repos extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.displayProject = this.displayProject.bind(this)
    }

    displayProject(repo){
        return(
            <GithubRepo url={repo.repos_url} starred={repo.starred_url}/>
        )
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
                <h1>{this.props.params.username}'s Repos</h1>

                <div>
                    {this.state.repos.map(this.displayProject(this))}
                </div>
            </div>
        );
    }
}
export default Repos;