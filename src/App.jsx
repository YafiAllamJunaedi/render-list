import { useState } from "react";
import Card from "./Card";
import { Products } from "./data/dataProduct";

function App() {
  const [color, setColor] = useState("");

  function handleChangeColor() {
    const gantiWarna = prompt("Ganti Warna : ");
    if (gantiWarna === "red") {
      setColor("red");
    } else if (gantiWarna === "yellow") {
      setColor("yellow");
    }
  }

  return (
    <div className="text-center mt-10 ">
       <h1 className="font-bold text-3xl text-center pb-7">Our Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {Products.map((product) => (
          <Card
            key={product.id}
            image={product.imageURL}
            name={product.nama}
            desc={product.deskripsi}
            price={product.price}
            
          />
        ))}
      </div>
    
    </div>
  );
}

export default App;
