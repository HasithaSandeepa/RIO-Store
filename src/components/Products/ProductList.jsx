import {
  Grid,
  Typography,
  Container,
  TextField,
  Box,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { PRODUCTS } from "../../data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesName && matchesCategory && matchesPrice;
  });

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
        }}
      >
        Our Products
      </Typography>
      <Box sx={{ mb: 3, display: "flex", gap: 2, justifyContent: "center" }}>
        <TextField
          label="Search by Name"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "200px" }}
        />
        <TextField
          select
          label="Category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          variant="outlined"
          sx={{ width: "200px" }}
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="Phone">phone</MenuItem>
          <MenuItem value="Laptop">Laptop</MenuItem>
          <MenuItem value="Mouse">Mouse</MenuItem>
          <MenuItem value="Keyboard">Keyboard</MenuItem>
          <MenuItem value="Earbuds">Earbuds</MenuItem>
          <MenuItem value="Watch">Watch</MenuItem>
          <MenuItem value="Headset">Headset</MenuItem>
        </TextField>
        <TextField
          label="Max Price"
          type="number"
          variant="outlined"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          sx={{ width: "200px" }}
        />
      </Box>
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
