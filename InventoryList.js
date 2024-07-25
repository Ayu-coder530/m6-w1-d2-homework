import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class InventoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: [],
      loading: true
    };
  }

  componentDidMount() {
    this.fetchInventory();
  }

  fetchInventory = async () => {
    try {
      const response = await fetch('/api/inventories');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Debug log
      this.setState({ inventories: data, loading: false });
    } catch (error) {
      console.error('Failed to fetch inventories:', error); // Debug log
    }
  };

  removeInventory = async (id) => {
    try {
      await fetch(`/api/inventories/${id}`, { method: 'DELETE' });
      this.fetchInventory();
    } catch (error) {
      console.error('Failed to delete inventory:', error); // Debug log
    }
  };

  render() {
    const { inventories, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <h1>Inventory List</h1>
        <Button color="success" tag={Link} to="/edit/new">Add Inventory</Button>
        <Table striped>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventories.length > 0 ? inventories.map((inventory) => (
              <tr key={inventory._id}>
                <td>{inventory.name}</td>
                <td>{inventory.quantity}</td>
                <td>{inventory.price}</td>
                <td>{inventory.status}</td>
                <td>
                  <Button color="warning" tag={Link} to={`/edit/${inventory._id}`}>Edit</Button>
                  <Button color="danger" onClick={() => this.removeInventory(inventory._id)}>Delete</Button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5">No inventory items found.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default InventoryList;
