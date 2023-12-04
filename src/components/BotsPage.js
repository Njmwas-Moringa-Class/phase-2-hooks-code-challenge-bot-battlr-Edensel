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

  // Function to fetch bot data from the server
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8002/bots");
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Enlist a bot into the army
  function enlistBot(bot) {
    if (!bot.army) {
      setBots((prevBots) => [
        ...prevBots.map((b) =>
          b.id === bot.id ? { ...b, army: true } : { ...b }
        ),
      ]);
      setYourBotArmy((prevArmy) => [...prevArmy, bot]);
    }
  }
}

export default BotsPage;
