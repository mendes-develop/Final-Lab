import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map( (bot, index) => <BotCard key={index} bot={bot} chosenBot={this.props.setChosenBot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
