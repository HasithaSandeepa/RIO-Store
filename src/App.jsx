// src/App.jsx
import { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useAuth } from "./context/AuthContext";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const { user, logout } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            RIO Store
          </Typography>
          {user ? (
            <>
              <Button color="inherit" onClick={() => setShowCart(false)}>
                Products
              </Button>
              <Button color="inherit" onClick={() => setShowCart(true)}>
                Cart
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? "Register" : "Login"}
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, flex: 1 }}>
        {/* Conditional rendering for Login, Register, Cart, or Products */}
        {!user ? (
          showLogin ? (
            <Login />
          ) : (
            <Register />
          )
        ) : showCart ? (
          <Cart />
        ) : (
          <ProductList />
        )}
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
