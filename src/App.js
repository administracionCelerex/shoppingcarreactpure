import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [shopCar, setCart] = useState({
    items: [],
    totalPrice: 0,
    totalItems: 0,
  });

  const [products, setProducts] = useState([
    { _id: "123", description: "djaskda", name: "Celular", price: 100 },
    { _id: "145", description: "djaskda", name: "MAC", price: 100 },
  ]);

  const addItem = (item) => {
    console.log(item);
    let quan = 0;
    let priceAux = 0;

    const numElem = shopCar.items.length;
    let totalPrice = shopCar.totalPrice;
    let totalItems = shopCar.totalItems;

    totalPrice += item.price;
    totalItems += 1;

    const itemaux = {
      _id: item._id,
      nameItem: item.name,
      quantity: quan,
      individualPrice: priceAux,
    };

    const itemObj = shopCar.items.find((item2) => {
      return item2._id === item._id;
    });

    const itemObjIndex = shopCar.items.findIndex(
      (item2) => item2._id === item._id
    );

    if (!itemObj) {
      //no hay nada en item object no existealgo previo

      quan = 1;
      priceAux = item.price;
      itemaux.quantity = quan;
      itemaux.individualPrice = priceAux;
      //shopCar.items.push(itemaux); old javascript

      setCart((prevState) => {
        const allProducts = [...prevState.items];
        allProducts.push(itemaux);
        return { ...prevState, items: allProducts };
      });
    } else {
      //si existe
      let quantity2 = itemObj.quantity;
      let newPrice = itemObj.individualPrice + item.price;
      quantity2 += 1;

      const replaceItem = {
        ...itemObj,
        quantity: quantity2,
        individualPrice: newPrice,
      };

      //shopCar.items[itemObjIndex] = replaceItem;

      setCart((prevState) => {
        const allItems = [...prevState.items];
        allItems[itemObjIndex] = replaceItem;
        /* prevState.items[itemObjIndex] = replaceItem; */
        return { ...prevState, items: allItems };
      });
    }

    setCart((prevState) => {
      /* prevState.totalItems = totalItems;
      prevState.totalPrice = totalPrice; */
      return { ...prevState, totalItems, totalPrice };
    });

    /*  shopCar.totalPrice = totalPrice;
    shopCar.totalItems = totalItems; */
  };

  const enviarAlCRM = (listaProductos, precioTotal, totalItems) => {
    console.log(listaProductos, precioTotal, totalItems);
  };

  const finalizarCompra = () => {
    console.log(shopCar);
    let listaProductos = "";
    const precioTotal = shopCar.totalPrice;
    const totalItems = shopCar.totalItems;

    for (let index = 0; index < shopCar.items.length; index++) {
      const item = shopCar.items[index];
      listaProductos += item.nameItem + " - " + item.quantity + "\n";
    }

    console.log(listaProductos);
    console.log(precioTotal);
    console.log(totalItems);

    enviarAlCRM(listaProductos, precioTotal, totalItems);
  };

  return (
    <div className="App">
      <ul className="card-wrapper">
        {products.map((product, ind) => {
          const { _id, name, description, price } = product;
          return (
            <ProductCard
              key={ind}
              name={name}
              description={description}
              price={price}
              addToCart={addItem.bind(null, product)}
            />
          );
        })}
      </ul>
      <hr></hr>
      <button className="Compra" onClick={finalizarCompra}>
        Finalizar compra
      </button>
    </div>
  );
}

export default App;
