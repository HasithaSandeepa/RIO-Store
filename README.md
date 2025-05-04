# RIO Store

**RIO Store** is an e-commerce web application built with React and Material UI. It provides a simple and user-friendly shopping experience, including product listings, a shopping cart, and authentication features. Users can log in, browse products, add items to the cart, and proceed to checkout.

<img width="1679" alt="RIO Store" src="https://github.com/user-attachments/assets/c312729a-acb0-4712-a5eb-78546bc06283" />

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [Acknowledgments](#acknowledgments)

---

## Project Overview

RIO Store is an online store that offers products for sale. The app includes the following features:

- **User Authentication**: Users can log in and register.
- **Product Catalog**: Products are displayed with their images, descriptions, and prices.
- **Shopping Cart**: Users can add, remove, and update product quantities in their cart.
- **Checkout**: A simple checkout screen that displays the total price.
- **Responsive Design**: The app is mobile-friendly and works well across devices.

---

## Features

- **Product List**: Displays products fetched from a mock database or API.
- **Cart Management**: Users can add items to the cart, change quantities, or remove items.
- **Authentication**: Basic login and registration functionality using a simulated authentication system.
- **Toast Notifications**: Toast alerts are shown when items are added to or removed from the cart.
- **Footer with Social Media Links**: A footer with links to social media and legal pages.
- **Responsive Design**: Fully responsive UI using Material UI components.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework for fast, beautiful, and accessible design systems.
- **Formik**: Form management library for handling forms and validations.
- **Yup**: Schema validation library used with Formik for form validation.
- **Context API**: Used for global state management (Auth, Cart).
- **React Router**: For navigation between different views/pages.

---

## Setup and Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/rio-store.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd rio-store
   ```

3. **Install Dependencies**:

   Make sure you have `Node.js` and `npm` installed. If not, you can download and install them from [nodejs.org](https://nodejs.org/).

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   pnpm install
   ```

4. **Run the Application**:

   After installing the dependencies, start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   pnpm run dev
   ```

   This will start the application at `http://localhost:5173`.

---

## Project Structure

Here’s a breakdown of the project structure:

```
/src
  /components             # React components for various parts of the UI
    /Auth                 # Authentication components (Login, Register)
    /Cart                 # Shopping cart components (Cart, CartItem)
    /Footer               # Footer component
    /Products             # Product listing components (ProductCard, ProductList)
  /context                # React Context for global state (Auth, Cart)
  /data                   # Products Details (product)
  /App.jsx                # App component
  /main.js                # Main component
  .gitignore              # Git ignore file
  package.json            # Project dependencies and scripts
  README.md               # Project documentation
```

---

## Usage

Once the application is running, you can use it as follows:

1. **Authentication**:
   - Navigate to the login page to log in or register.
   - Enter the credentials (for example, an email address and password) to authenticate.
2. **Browse Products**:
   - After logging in, you will be able to browse the product list, which displays product details like name, price, and description.
3. **Add to Cart**:
   - Click the "Add to Cart" button on a product to add it to your shopping cart.
4. **View Cart**:
   - You can view your cart by clicking on the "Cart" button in the navigation bar.
   - The cart allows you to adjust product quantities or remove items.
5. **Checkout**:
   - Click "Proceed to Checkout" to view the checkout page (currently under construction).

---

## Contributing

We welcome contributions to this project! To contribute:

1. **Fork the Repository**: Click on the "Fork" button at the top right of this page.
2. **Clone Your Fork**: Clone your forked repository to your local machine.
3. **Create a New Branch**: Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Changes**: Make the necessary changes to the codebase.
5. **Commit Your Changes**: Commit your changes with a meaningful message.
   ```bash
   git commit -m "Your commit message"
   ```
6. **Push to Your Fork**: Push your changes to your forked repository.
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**: Open a pull request to merge your changes into the main repository.

---

## Acknowledgments

- **Material UI** for the great React UI framework.
- **Formik** and **Yup** for simplifying form handling and validation.
- **React** for providing the base for building interactive UIs.
- The open-source community for providing amazing libraries and tools.
