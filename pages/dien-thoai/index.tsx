import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { log } from "console";
const name_mobile = [
  { name: "iPhone", img: "	https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" },
  {
    name: "iPhone",
    img: "	https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png",
  },
  { name: "iPhone", img: "https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg" },
  {
    name: "XIAOMI",
    img: "https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png",
  },
  {
    name: "iPhone",
    img: "	https://cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png",
  },
  { name: "iPhone", img: "https://cdn.tgdd.vn/Brand/1/Masstel42-b_0.png" },
];
const array_picture = [
  {
    name: "Samsung Galaxy S23 5G",
    img: "https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-600x600.jpg",
    title: " GIẢM GIÁ NGẤT NGƯ ",
  },
  {
    name: "iPhone 14 Pro Max",
    img: "	https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg",
    title: " GIẢM GIÁ NGẤT NGƯ ",
  },
  {
    name: "iPhone 14 Pro",
    img: "	https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
    title: "anh nhớ em ",
  },
  {
    name: "iPhone 11",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg",
    title: "anh nhớ em ",
  },
  {
    name: "iPhone 11",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg",
    title: "anh nhớ em ",
  },
  {
    name: "iPhone 11",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg",
  },
  {
    name: "iPhone 11",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg",
    price: "26.990.000đ",
  },
  {
    name: "iPhone 11",
    price: "26.990.000đ",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg",
  },
  {
    name: "SamSung S23",
    price: "26.990.000đ",
    img: "	https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-1-600x600.jpg  ",
  },
  {
    name: "Vivo Y35",
    price: "26.990.000đ",
    img: "https://cdn.tgdd.vn/Products/Images/42/286697/vivo-y35-thumb-den-600x600.jpg",
  },
];
function index() {
  return (
    <div className={styles.main}>
      <div className={styles.name_mobile}>
        {name_mobile.map((item) => (
          <li className={styles.nameItem}>
            {item.img && (
              <img
                className={styles.img}
                width={92}
                height={20}
                src={item.img}
                alt={item.name}
              ></img>
            )}
          </li>
        ))}
      </div>
      <div className={styles.container}>
        {array_picture.map((item, index) => (
          <li className={styles.item} key={index}>
            {item.img && (
              <img
                className={styles.img}
                width={150}
                height={150}
                src={item.img}
                // alt={product.name}
              />
            )}
            <p className={styles.text}>{item.name}</p>
            <h3>{item.price}</h3>
          </li>
        ))}
      </div>
    </div>
  );
}

export default index;
