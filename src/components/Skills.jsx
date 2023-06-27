import React from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skills">
        <img
          src="https://github.com/tandpfun/skill-icons/raw/main/icons/React-Light.svg"
          alt="React"
        />
        <img
          src="https://github.com/tandpfun/skill-icons/raw/main/icons/TypeScript.svg"
          alt="TypeScript"
        />
        <img
          src="https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg"
          alt="JavaScript"
        />
        <img
          src="https://github.com/tandpfun/skill-icons/raw/main/icons/HTML.svg"
          alt="HTML"
        />
        <img
          src="https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg"
          alt="CSS"
        />
        <img
          src="https://github.com/tandpfun/skill-icons/raw/main/icons/Python-Light.svg"
          alt="Python"
        />
      </div>
    );
  }
}

export default Skills;
