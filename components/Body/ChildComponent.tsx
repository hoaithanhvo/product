import React, { useState, useContext, useEffect } from "react";
import styles from "./index.module.scss";
import Input from "../Input/input";
interface IProps {
  article: {
    name: string;
    headline: string;
    title: string;
    description: string;
  };
}
export default function ProductList(props: any) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(props);

  const products = [
    {
      name: "iPhone 13 Pro Max 128GB",
      price: "27.990.000đ",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg",
    },
    {
      name: "OPPO Find N2 Flip",
      title: "Hàng sắp về",
      price: "19.990.000",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/299034/oppo-find-n2-flip-purple-thumb-1-600x600.jpg",
    },
    {
      name: "Xiaomi Redmi Note 12 8GB",
      price: "5.790.000",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/303298/xiaomi-redmi-note-12-den-thumb-600x600.jpg",
    },
    {
      name: "Samsung A34 5G 256GB",
      price: "8.990.000",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg",
    },
    {
      name: "realme C30s (2GB/32GB)",
      price: "2.190.000",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/290877/Realme-c30s-xanh-temp-600x600.jpg",
    },
    {
      name: "realme C33 (2GB/32GB)",
      price: "3.090.000",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/290877/Realme-c30s-xanh-temp-600x600.jpg",
    },
    {
      name: "realme C30s (2GB/32GB)",
      price: "2.190.000",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/290877/Realme-c30s-xanh-temp-600x600.jpg",
    },
    {
      name: "realme C30s (2GB/32GB)",
      price: "2.190.000",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/290877/Realme-c30s-xanh-temp-600x600.jpg",
    },
    {
      name: "realme C30s (2GB/32GB)",
      price: "2.190.000",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/290877/Realme-c30s-xanh-temp-600x600.jpg",
    },
    {
      name: "realme C30s (2GB/32GB)",
      price: "2.190.000",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/290877/Realme-c30s-xanh-temp-600x600.jpg",
    },
  ];

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div>
        {/* <h1>{props.name}</h1> */}
        <div className={styles.banner}>
          <img
            width={"100%"}
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/03/banner/Banner-BIG-TGDD-1920x450.jpg"
            alt=""
          />
        </div>
        <input
          className={styles.input}
          type="text"
          name=""
          id=""
          onChange={handleChange}
        />
      </div>

      <div>
        <div className={styles.main}>
          {filteredProducts.map((product, index) => (
            <li className={styles.center} key={index}>
              {product.img && (
                <img
                  className={styles.img}
                  width={150}
                  height={150}
                  src={product.img}
                  alt={product.name}
                />
              )}
              <p className={styles.text}>{product.name}</p>
              <p className={styles.text}>{product.title}</p>
              <p className={styles.text}>{product.price}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
