import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';

const InventoryEdit = () => {
  const [item, setItem] = useState({ name: '', quantity: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== 'new') {
      fetchInventory(id);
    }
  }, [id]);

  const fetchInventory = async (id) => {
    const response = await fetch(`/api/inventories/${id}`);
    const data = await response.json();
    setItem(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`/api/inventories/${id !== 'new' ? id : ''}`, {
      method: id !== 'new' ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });

    navigate('/inventory');
  };

  return (
    <div className="container">
      <h1>{id === 'new' ? 'Add' : 'Edit'} Inventory</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Product Name</Label>
          <Input type="text" name="name" id="name" value={item.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <Input type="number" name="quantity" id="quantity" value={item.quantity} onChange={handleChange} />
        </FormGroup>
        <Button color="primary" type="submit">Save</Button>
        <Button color="secondary" onClick={() => navigate('/inventory')}>Cancel</Button>
      </Form>
    </div>
  );
};

export default InventoryEdit;
