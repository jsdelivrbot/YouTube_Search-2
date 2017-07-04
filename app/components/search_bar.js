import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
  	super(props);
  	// this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={event => this.props.onSearchTermChange(event.target.value)} />
      </div>
    )
  }
}