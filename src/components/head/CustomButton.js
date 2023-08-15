import React, { useState } from "react";

import { Box, Typography, Button, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Loginpage from "../login/Loginpage";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  texttransform: none;
  fontweight: 600;
  borderradius: 2;
  padding: 5px 40px;
  height: 32;
  boxshadow: none;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={() => openDialog()}>
        Login
      </LoginButton>

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container>
        <ShoppingCart />

        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <Loginpage open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
