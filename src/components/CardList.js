import React, { Component,useState } from 'react';
import Card from './Card';
import GridSystem from './GridSystem';

class CardList extends React.Component {
	render() {
    const profile=this.props;
  	return (
          < GridSystem colCount={3} md={4}>
         {profile.profiles.map(profile => (<Card  name={profile.name} Service_url={profile.Service_url} 
                                       Description={profile.Description} handleClick={this.props.handleClick}/>))}
      </GridSystem>
    );
  }
}

export default CardList;