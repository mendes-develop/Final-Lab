import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  insertBots = (bots) => {
    let arrayOfBots = bots.map(bot => {
      return <BotCard bot={bot}/>
    })
    return arrayOfBots
  }

  

  render(){
    console.log(this.props.botsSelected)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {
            this.props.botsSelected.map((bot, index)=> <BotCard key={index} bot={bot} chosenBot={this.props.removeChosenBot}/>)
          }
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
