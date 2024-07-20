const sortProducts = (products, option) => {
  let sortedProducts = [...products];
  switch (option) {
    case 'title':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'price-low-high':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high-low':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      sortedProducts = products;
  }
  return sortedProducts;
};

export default sortProducts;
