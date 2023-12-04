import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  // Render BotCards for each bot in the army
  const renderArmy = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={removeBot}
      deleteBot={deleteBot}
    />
  ));
   
}
export default YourBotArmy;
