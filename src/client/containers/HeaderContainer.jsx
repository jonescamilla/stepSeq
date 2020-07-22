import React from 'react';
import Share from '../components/Share';
import Users from '../components/Users';

const HeaderContainer = ({ users }) => {
  return (
    <div className="HeaderContainer">
      <p>header</p>
      <Share />
      <Users users={users} />
    </div>
  )
}

export default HeaderContainer;