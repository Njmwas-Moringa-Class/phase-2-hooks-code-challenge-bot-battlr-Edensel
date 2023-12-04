import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function BotsPage() {
  // State variables to store bots and enlisted bots in the army
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  // Fetch bot data from the server on component mount
  useEffect(() => {
    fetchData();
  }, []);

}

export default BotsPage;
