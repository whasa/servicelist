import React, { Component,useState } from 'react';

class Card extends React.Component {
	render() {
    const profile=this.props;
  	return (
          <div class="github-profile">
            <div>
                <input className="chkService" type="checkbox" id="scales" name="scales" onClick={this.props.handleClick}
                />
            </div>
            <img class="imgService" width="40%" height="40%" src={profile.Service_url} />
            <div className="info">
            <div >
                <label for="scales"></label>
              </div>
              <div className="name"><b>{profile.name}</b></div>
              <div className="Description toLeft">{profile.Description}</div>
            </div>
          </div>
    );
  }
}

export default Card;