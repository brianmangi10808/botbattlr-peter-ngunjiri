import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShieldAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const Bot = ({ bot, addToArmy }) => {
  const handleClick = () => {
    addToArmy(bot);
  };

  return (
    <div className="bot-card">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p><FontAwesomeIcon icon={faHeart} />: {bot.health}</p>
      <p><FontAwesomeIcon icon={faBolt} />: {bot.damage}</p>
      <p><FontAwesomeIcon icon={faShieldAlt} />: {bot.armor}</p>
      <p>{bot.bot_class}</p>
      <p>{bot.catchphrase}</p>
      <p>Created at: {bot.created_at}</p>
      <p>Updated at: {bot.updated_at}</p>
      <button onClick={handleClick}>Add to Army</button>
    </div>
  );
};

export default Bot;
