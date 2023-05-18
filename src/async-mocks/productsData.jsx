const items = [
    {
      id: 1,
      title: "Producto 1",
      description: "Descripción del producto 1",
      price: 100,
      image: "https://via.placeholder.com/200",
      categoryId: 1,
    },
    {
      id: 2,
      title: "Producto 2",
      description: "Descripción del producto 2",
      price: 200,
      image: "https://via.placeholder.com/200",
      categoryId: 2,
    },
    {
      id: 3,
      title: "Producto 3",
      description: "Descripción del producto 3",
      price: 300,
      image: "https://via.placeholder.com/200",
      categoryId: 1,
    },
    {
      id: 4,
      title: "Producto 4",
      description: "Descripción del producto 4",
      price: 400,
      image: "https://via.placeholder.com/200",
      categoryId: 2,
    },
  ];
  
  export function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 1000);
    });
  }
  
  export function getItemsByCategory(categoryId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.filter((item) => item.categoryId == categoryId));
      }, 1000);
    });
  }
  
  export function getItem(itemId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.find((item) => item.id == itemId));
      }, 1000);
    });
  }
  