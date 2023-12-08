import products from "../data";
import "../Components/styles/Products.css"

const Products = () => {
  console.log(products);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // Creates three columns
        gridColumnGap: "15px", // Horizontal gap between columns
        gridRowGap: "10px", // Vertical gap between rows
        width: "100%",
        
      }}
    >
      {products.map((product) => {
        const {description, image, price, rating, title, id } =
          product;
        return (
          <div className="background-color" key={id}>
            <img className="img " src={image} style={{ width: "100%", height: "270px" }} alt="" />
            <p>{title}</p>
            <p style={{ color: "orange" }}>Price : {price}</p>
            <p style={{ color: "orange" }}> Rating : {rating.rate}  /5 </p>
           
           <p style={{ width: "250px", fontSize: "12px", color: "whitesmoke" }}>{description}</p>
            <button className="button" type="button">Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
