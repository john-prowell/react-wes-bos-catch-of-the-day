import React from "react";

// Stateless Functional Component
// If your component only has a render method and prop types
const Header = props => (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>{props.tagline}</span>
        </h3>
      </header>
    );

export default Header;