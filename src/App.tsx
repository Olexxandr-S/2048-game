import { useState } from "react";
import { Button } from "./components/Button";
import { Game } from "./components/Game";
import GithubCorner from "react-github-corner";

import "./App.less";

export const App = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleRestart = () => {
    setDate(new Date());
  };

  return (
    <div className="App">
      <div className="header">
        <GithubCorner href="https://github.com/OlexxandrS/2048-game" />
        <div>
          <h1>Play 2048</h1>
        </div>
        <div>
          <Button onClick={handleRestart}>Restart</Button>
        </div>
      </div>
      <Game key={date.toISOString()} />
    </div>
  );
};
