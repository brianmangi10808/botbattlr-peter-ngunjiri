import React, { useState } from "react";
import Bot from "./Bot";
import YourBotArmy from "./YourBotArmy";
import Record from "./bots.json";

const App = () => {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    setArmy([...army, bot]);
  };

  return (
    <div>
      <YourBotArmy army={army} />
      <BotCollection addToArmy={addToArmy} />
    </div>
  );
};

const BotCollection = ({ addToArmy }) => {
  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      {Record.bots.map((bot) => (
        <Bot key={bot.id} bot={bot} addToArmy={addToArmy} />
      ))}
    </div>
  );
};

export default App;
