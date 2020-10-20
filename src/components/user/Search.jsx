import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  }

  onChangeHandler = (e) => {
    this.setState({ text: e.target.value})
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({ text: ''})
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler} className="form">
          <input type="text" name="text" placeholder="search Users..." value={this.state.text} onChange={this.onChangeHandler} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
      </div>
    );
  }
}

export default Search;

