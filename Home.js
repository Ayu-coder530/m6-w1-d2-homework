import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Inventory Management System</h1>
      <Button color="primary" tag={Link} to="/inventory">Manage Inventory List</Button>
    </div>
  );
};

export default Home;
