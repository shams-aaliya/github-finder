import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Search from './components/users/Search';
import Users from './components/users/Users.jsx';
import axios from 'axios'; 

class App extends Component {
state = {
  users: [],
  loading: false
}

searchUsers = async text => {
  this.setState({loading: true});
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&
  client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  this.setState({users: res.data.items, loading: false})
}

clearUsers = () => this.setState({users:[], loading:false})

  render(){
    const {loading, users} = this.state

  return (
      <div className="App">
      <Navbar />
      <div className="container">
      <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
      showClear={users.length>0 ? true : false}/>
      <Users loading={loading} users={users}/>
      </div>
      </div>
    );
  }
}

export default App;