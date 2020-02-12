import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

const API =  'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botsSelected: [],
    setBotSelected: null
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          botsSelected={this.state.botsSelected} 
          removeChosenBot={this.removeChosenBot}/>
            { this.state.setBotSelected ? (
          <BotSpecs bot={this.state.setBotSelected} setChosenBot={this.setChosenBot} addChosenBot={this.addChosenBot}/>
          ) : (
          <BotCollection bots ={this.state.bots} setChosenBot={this.setChosenBot}/>
          )}
      </div>
    );
  }

  setChosenBot = (bot) => {
    this.setState({
      setBotSelected: bot
    })
  }

  addChosenBot = (bot) => {
    if (this.state.botsSelected.includes(bot)) return

    this.setState({
      botsSelected: [...this.state.botsSelected, bot]
    })
  }

  removeChosenBot = (chosenBot) => {
    this.setState({
      botsSelected: this.state.botsSelected.filter(bot => bot.id !== chosenBot.id)
    })
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(botsResp => {
        this.setState({
          bots: botsResp
        })
      })
  };

}

export default BotsPage;
