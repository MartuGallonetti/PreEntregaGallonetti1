import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Total } from "./Total";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

    return (
    <div>
      <div className="cartDisplay">
        <h1 className="myCart"> Carrito de Compras</h1>
        {cart.length > 0 ? (
          <div className="contenedor-carrito">
            {cart.map((item) => {
              return (
                <div className="items-carrito" key={item.id}>
                  <img className="imagen" src= {item.imagen} width= {100} />
                  <h6>{` Codigo: ${item.id}`}</h6>
                  <h3>{` ${item.nombre}  $${item.precio} `}</h3>
                  <h5>{`Cantidad: ${item.cantidad} `}</h5>
                  <h5>{`Subtotal: $ ${item.cantidad * item.precio}`}</h5>
                  <button
                    className="removeItem"
                    onClick={() => removeItem(item)}
                  >
                    Eliminar artículo
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <h1 className="cartEmpty">El carrito está vacío.</h1>
            <Link className="returnLink" to={"/"}>
              Ver nuestros productos
            </Link>
          </>
        )}

        <Total />
        <div className="btnsContainer cartBtns">
          <button
            className="removeItem clear enabDisab"
            disabled={cart.length === 0}
            onClick={clear}
          >
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;