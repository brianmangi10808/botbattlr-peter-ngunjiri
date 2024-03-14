import React from "react";

const YourBotArmy = ({ army }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      
        {army.map((bot) => (
          <div className="army-card"  key={bot.id}>
          <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.bot_class}</p>
      <p>{bot.catchphrase}</p>
      <p>Created at: {bot.created_at}</p>
      <p>Updated at: {bot.updated_at}</p></div>
        ))}
   
    </div>
  );
};

export default YourBotArmy;
