import React from 'react';
import Share from './Share';
import Users from './Users';

const Header = ({ users }) => {
  return (
    <div className="Header">
      <Share />
      <h3>title</h3>
      <Users users={users} />
    </div>
  )
}

export default Header;