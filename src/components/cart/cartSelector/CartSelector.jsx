import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from 'prop-types';

CartSelector.propTypes = {
  customers: PropTypes.array,
  selectedCustomer: PropTypes.number,
  onCustomerChange: PropTypes.func,
};
function CartSelector({ customers, selectedCustomer, onCustomerChange }) {
  return (
    <Container maxWidth="md">
      <Typography variant="h6" gutterBottom>
        Selecciona un usuario:
      </Typography>
      <FormControl fullWidth>
        <Select value={selectedCustomer || ""} onChange={onCustomerChange}>
          {customers.map((customer) => (
            <MenuItem key={customer.id} value={customer.id}>
              {customer.name.firstname} {customer.name.lastname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
}

export default CartSelector;
