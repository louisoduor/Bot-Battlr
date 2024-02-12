import React from "react";



function BotCard({ bot, addToArmy, removeFromArmy, deleteBot }) {
  const {
    id,
    name,
    health,
    damage,
    armor,
    bot_class,
    catchphrase,
    avatar_url,
  } = bot;

  const handleClick = () => {
    if (addToArmy) {
      addToArmy(bot);
    } else if(removeFromArmy) {
      removeFromArmy(bot);
    } else if(deleteBot){
        deleteBot(bot);
    }
  };
  return (
    <div className="bot-card">
        <div className="card">
            <h1>{id}</h1>
        <img src={avatar_url} alt={name} />
        <h2>{name}</h2>
        <p>Class: {bot_class}</p> 
        <p>CatchPhrase: {catchphrase}</p>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <div className="ui two buttons">
        {addToArmy && (
          <button className="green" onClick={handleClick}>
            Add to Army
          </button>
        )}
        {removeFromArmy && (
          <button className="red" onClick={handleClick}>
            Remove from Army
          </button>
        )}
        {deleteBot && (
          <button className="red" onClick={handleClick}>
            Delete Bot
          </button>
        )}
      </div>
    
  
            
        </div>
        
  </div>
      
  );
}

export default BotCard;