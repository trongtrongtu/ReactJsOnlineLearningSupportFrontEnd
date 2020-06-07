import React, { Component } from 'react';
import {myteam } from "./data";
const TeamContext = React.createContext();
class TeamProvider extends Component {
    state = {
        teams: []

    }
    componentDidMount() {
        this.setTeams();
        
    }

    setTeams=()=>{
    let tempTeams=[];
     myteam.forEach(item =>{
     const singleItem = {...item};
     tempTeams = [...tempTeams,singleItem];

     });
     this.setState(()=>{
     return {teams:tempTeams};
      })
      }
   
    getItem = (id) => {
        const team = this.state.teams.find(item => item.id === id)
        return team;
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        })

    }
    
    
    render() {
        return (
            <TeamContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail
                    
                }}
            >
                {this.props.children}
            </TeamContext.Provider>
        );
    }
}

const TeamConsumer = TeamContext.Consumer;
export { TeamProvider, TeamConsumer };