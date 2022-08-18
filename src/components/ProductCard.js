import classes from "./ProductCard.module.css";
const ProductCard = (props) => {
  return (
    <li className={classes["card"]}>
      <img
        src="https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
        alt=""
      />
      <h3>
        <a href="">{props.name}</a>
      </h3>
      <p>{props.description}</p>

      <p>{props.price}</p>
      <button
        className={`${classes["button-secondary"]} ${classes["pure-button"]}`}
        onClick={props.addToCart}
      >
        Agregar al carrito
      </button>
    </li>
  );
};

export default ProductCard;
