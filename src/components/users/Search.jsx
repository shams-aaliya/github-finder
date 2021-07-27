import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Search extends Component {
state = {
  text: ''
}

static propTypes = {
  text:PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
}

onChange = (e) => {
  this.setState({[e.target.name] : e.target.value})
}

onSubmit = (e) => {
  e.preventDefault();
  this.props.searchUsers(this.state.text);
  this.setState({text: ''});
}

  render() {
    const {showClear,clearUsers} = this.props

    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
        <input 
        type="text" 
        name="text" 
        placeholder='Search Users...'
        value={this.state.text} 
        onChange={this.onChange}/>
        <input 
        type="submit" 
        value="Search" 
        className='btn btn-block btn-dark' />
        </form>
        {
        showClear && (
          <button className="btn btn-block btn-light" onClick={clearUsers}>
          Clear Users
          </button>)
        }
      </div>
    )
  }
}

export default Search
