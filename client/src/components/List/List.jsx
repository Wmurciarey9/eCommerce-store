import React from "react";
import "./List.scss";
import { Card } from "../Card/Card";

export const List = () => {
  const data = [
    {
      id: 1,
      img: "https://www.paperhigh.com/wp-content/uploads/2022/04/HIBLW1BK-Personalised-Black-Buffalo-Leather-Billfold-Wallet-2.jpg",
      img2: "https://cdn.shopify.com/s/files/1/0105/0622/products/no07_1200x.jpg?v=1577983108",
      title: "Wallet #1",
      isNew: true,
      oldPrice: 19,
      price: 14,
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0653/3919/files/RFID-Bifold-Leather-Wallets-Harber-London_2048x.jpg?v=1654774125",
      img2: "https://www.fjallraven.com/494934/globalassets/catalogs/fjallraven/f7/f773/f77307/f550/7323450476250_ss19_a_oevik_wallet_fjaellraeven_21.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=80",
      title: "Wallet #2",
      isNew: true,
      oldPrice: 29,
      price: 15,
    },
    {
      id: 3,
      img: "https://cdn.shopify.com/s/files/1/0605/8216/6695/products/wallet-trifold-open.jpg?v=1654710173&width=1445",
      img2: "https://www.charleskeith.eu/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw3c80a8e5/images/hi-res/2021-L7-CK6-10680957-7-B4-8.jpg?sw=1152&sh=1536",
      title: "Wallet #3",
      isNew: true,
      oldPrice: 9,
      price: 16,
    },
    {
      id: 4,
      img: "https://cdn.shopify.com/s/files/1/0074/2939/0406/products/120Navy1_600x.jpg?v=1610491206",
      img2: "https://putthison.com/wp-content/uploads/2013/02/tumblr_miqxa9MBtp1qa2j8co1_1280.jpg",
      title: "Wallet #3",
      isNew: true,
      oldPrice: 19,
      price: 13,
    },
    {
      id: 5,
      img: "https://cdn.shopify.com/s/files/1/0605/8216/6695/products/wallet-trifold-open.jpg?v=1654710173&width=1445",
      img2: "https://www.charleskeith.eu/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw3c80a8e5/images/hi-res/2021-L7-CK6-10680957-7-B4-8.jpg?sw=1152&sh=1536",
      title: "Wallet #3",
      isNew: true,
      oldPrice: 9,
      price: 16,
    },
    {
      id: 6,
      img: "https://cdn.shopify.com/s/files/1/0074/2939/0406/products/120Navy1_600x.jpg?v=1610491206",
      img2: "https://putthison.com/wp-content/uploads/2013/02/tumblr_miqxa9MBtp1qa2j8co1_1280.jpg",
      title: "Wallet #3",
      isNew: true,
      oldPrice: 19,
      price: 13,
    },
  ];

  return (
    <div className="list">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
