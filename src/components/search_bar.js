import React, { Component } from "react"; //import react and pull off the component method from react

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  //our render function - class based
  render() {
    //make an attribute which calls the user event handler function
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }

  //event is an object from bundle.js
  //target is part of the event object which pertains to an input
}

export default SearchBar;
