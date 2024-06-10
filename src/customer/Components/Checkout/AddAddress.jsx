import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../Redux/Customers/Order/Action";
import userEvent from "@testing-library/user-event";
import AddressCard from "../adreess/AdreessCard";
import { useState } from "react";

export default function AddDeliveryAddressForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAdress] = useState(null);
  const [zip, setZip] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    dispatch(createOrder({ address, jwt, navigate }));
    // after perfoming all the opration
    handleNext();
  };

  const handleCreateOrder = (item) => {
    dispatch(createOrder({ address:item, jwt, navigate }));
    handleNext();
  };
  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstNameError(!/^[a-zA-Z\s]*$/.test(value));
  };
  
  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastNameError(!/^[a-zA-Z\s]*$/.test(value));
  };
  
  const handleZipChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 6) {
      setZip(value);
    }
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
    setPhoneNumberError(!/^\d+$/.test(value));
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={5}>
        <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
          {auth.user?.addresses.map((item) => (
            <div
              onClick={() => setSelectedAdress(item)}
              className="p-5 py-7 border-b cursor-pointer"
            >
              {" "}
              <AddressCard address={item} />
              {selectedAddress?.id === item.id && (
                <Button
                  sx={{ mt: 2 }}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={()=>handleCreateOrder(item)}
                >
                  Deliverd Here
                </Button>
              )}
            </div>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
              <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                  error={firstNameError}
                  helperText={
                    firstNameError ? "Please enter only character values" : ""
                  }
                  onChange={handleFirstNameChange}
                  InputProps={{
                    inputProps: {
                      style: { textTransform: "capitalize" },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                  error={lastNameError}
                  helperText={
                    lastNameError ? "Please enter only character values" : ""
                  }
                  onChange={handleLastNameChange}
                  InputProps={{
                    inputProps: {
                      style: { textTransform: "capitalize" },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address"
                  multiline
                  rows={4}
                  InputProps={{
                    inputProps: {
                      style: { textTransform: "capitalize" },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  InputProps={{
                    inputProps: {
                      style: { textTransform: "capitalize" },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  InputProps={{
                    inputProps: {
                      style: { textTransform: "capitalize" },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                value={zip}
                onChange={handleZipChange}
                inputProps={{
                  maxLength: 6,
                  pattern: "\\d*",
                }}
                 error={phoneNumberError}
                 helperText={phoneNumberError ? "Please enter a valid " : ""}
               />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  inputProps={{
                    maxLength: 10, 
                    pattern: "[0-9]*", 
                  }}
                  error={phoneNumberError}
                  helperText={phoneNumberError ? "Please enter a valid phone number" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Deliverd Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
