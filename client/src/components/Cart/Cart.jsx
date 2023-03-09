import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://www.paperhigh.com/wp-content/uploads/2022/04/HIBLW1BK-Personalised-Black-Buffalo-Leather-Billfold-Wallet-2.jpg",
      img2: "https://cdn.shopify.com/s/files/1/0105/0622/products/no07_1200x.jpg?v=1577983108",
      title: "Wallet #1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isNew: true,
      oldPrice: 19,
      price: 14,
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0653/3919/files/RFID-Bifold-Leather-Wallets-Harber-London_2048x.jpg?v=1654774125",
      img2: "https://www.fjallraven.com/494934/globalassets/catalogs/fjallraven/f7/f773/f77307/f550/7323450476250_ss19_a_oevik_wallet_fjaellraeven_21.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=80",
      title: "Wallet #2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isNew: true,
      oldPrice: 29,
      price: 15,
    },
  ];

  return (
    <div className="cart-section">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x $ {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$1222</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};
