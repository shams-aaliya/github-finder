import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Alert from './components/layout/Alert'
import Search from './components/users/Search';
import Users from './components/users/Users.jsx';
import axios from 'axios'; 

class App extends Component {
state = {
  users: [],
  loading: false,
  alert: null
}

searchUsers = async text => {
  this.setState({loading: true});
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&
  client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  this.setState({users: res.data.items, loading: false})
}

clearUsers = () => this.setState({users:[], loading:false})

setAlert = (msg,type) => {
this.setState({alert:{msg,type}})

setTimeout(() => {this.setState({alert:null})},5000)
}

  render(){
    const {loading, users} = this.state

  return (
      <div className="App">
      <Navbar />
      <div className="container">
      <Alert alert={this.state.alert}/>
      <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
      showClear={users.length>0 ? true : false}
      setAlert={this.setAlert}/>
      <Users loading={loading} users={users}/>
      </div>
      </div>
    );
  }
}

export default App;