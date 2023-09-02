import { useState, useEffect } from 'react';
import CartSection from '../components/cart/cartSection/CartSection';
import CartSelector from '../components/cart/cartSelector/CartSelector';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
export default function Carts() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  const handleCustomerChange = (event) => {
    const customerId = event.target.value;
    setSelectedCustomer(customerId);
  };

  return (
    <Container maxWidth="md">
      <Typography sx= {styleText} variant="h4" gutterBottom>
        Carritos
      </Typography>
      <CartSelector
        customers={customers}
        selectedCustomer={selectedCustomer}
        onCustomerChange={handleCustomerChange}
      />
      {selectedCustomer && (
        <CartSection customerId={selectedCustomer} />
      )}
    </Container>
  );
}

const styleText = {
  textAlign: 'center', 
  margin: '2rem'
}