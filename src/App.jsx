import React from "react";
import Avatar from "./components//Avatar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main-flex">
        <div className="profile-card">
          <Avatar />
          <Intro />
          <Skills />
        </div>
      </main>
    );
  }
}

export default App;
