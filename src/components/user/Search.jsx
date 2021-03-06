import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  }

  onChangeHandler = (e) => {
    this.setState({ text: e.target.value })
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    const { showClear, clearUsers } = this.props
    return (
      <div>
        <form onSubmit={this.onSubmitHandler} className="form">
          <input type="text" name="text" placeholder="search Users..." value={this.state.text} onChange={this.onChangeHandler} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}

      </div>
    );
  }
}

export default Search;

