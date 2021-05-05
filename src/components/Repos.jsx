import React from 'react';
import GithubRepo from './GithubRepo';

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
                console.log(repos);
                this.setState({
                    repos: repos
                });
            }
        );
    }

    displayProject(repo){
        return(
            <GithubRepo name ={repo.name} url={repo.html_url} starred={repo.stargazers_count} key={repo.id}/>
        )
    }
    
    render(){
        if(!this.state.repos){
            return( <div>Loading Repos...</div>)
          }
          
        return(
            <div>
                <h1>{this.props.params.username}'s Repos</h1>
                <div>
                    {this.state.repos.map(this.displayProject.bind(this))}
                </div>
                {this.props.children}
            </div>
        );
    }
}
export default Repos;