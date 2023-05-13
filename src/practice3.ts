interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }
  
  function filterProducts<P extends Product[], T extends keyof Product>(
    products: P,
    criterion: Product[T],
  ): Product[] {

    return products.filter((product) => product.category === criterion);
  }
  
  // Example usage:
  
  const products: Product[] = [
    { id: 1, name: "Product A", price: 10, category: "Category X" },
    { id: 2, name: "Product B", price: 20, category: "Category X" },
    { id: 3, name: "Product C", price: 30, category: "Category X" },
    { id: 4, name: "Product D", price: 40, category: "Category Z" },
  ];
  
  const filteredProducts = filterProducts(products, "Category X");
  console.log(filteredProducts);
  