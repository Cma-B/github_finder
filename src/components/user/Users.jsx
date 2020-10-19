import React, { Component } from 'react';
import UserItem from './UserItem'

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: '2',
        login: "tmcw",
        avatar_url: "https://avatars2.githubusercontent.com/u/32314?v=4",
        html_url: "https://github.com/tmcw",
      },
      {
        id: '3',
        login: 'tomnomnom',
        avatar_url: "https://avatars1.githubusercontent.com/u/58276?v=4",
        html_url: "https://github.com/tomnomnom",
      }
    ]
  }
  render() {
    return (
      <div style={userStyle}> {this.state.users.map(user => (
        <UserItem key={user.id} user={user} />
      ))} </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;