import React from "react";
import ProductCard from "./ProductCard";
function ProductsDisplay() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // const handleDelete = (id) => {
  //   fetch(`http://localhost:3001/delete/${id}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       const newProducts = products.filter((product) => product._id !== id);
  //       setProducts(newProducts);
  //     }
  //   });
  // };

  return (
    <>
      <h1>Products Display</h1>
    </>
  );
}

export default ProductsDisplay;
