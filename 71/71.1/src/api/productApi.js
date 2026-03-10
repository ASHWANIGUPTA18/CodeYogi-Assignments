const mockProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  description: "Sample product description",
  price: Math.round(100 + Math.random() * 900),
  image: "https://via.placeholder.com/300x200.png?text=Product",
}));

export async function getProductList() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 300);
  });
}
