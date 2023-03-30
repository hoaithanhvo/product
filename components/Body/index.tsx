// import React, { useState } from "react";
// import styles from "./index.module.scss";
// import Header from "../Header/Header";
// export default function Index() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const products = [
//     { name: "iPhone 13", price: 999 },
//     { name: "Samsung Galaxy S21", price: 799 },
//     { name: "Google Pixel 6", price: 599 },
//     { name: "OnePlus 9 Pro", price: 899 },
//   ];

//   const handleChange = (event: any) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Product List</h1>
//       <input
//         type="text"
//         placeholder="Search for a product"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <ul className={styles.main}>
//         {filteredProducts.map((product, index) => (
//           <li key={index}>
//             {product.name} - ${product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState, useContext } from "react";
import styles from "./index.module.scss";
import Header from "../Header/Header";
import Input from "../Input/input";
export default function ProductList(props: any) {
  const [searchTerm, setSearchTerm] = useState("");
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
      name: "Samsung Galaxy S21",
      price: 799,
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuSEoko_P6GanFE1TE8kyAPU-tqLTpHl1j4nzU1H74ieu2PT_hXs6qyj1s0JtuZ-JrnAJRnvNKXupT&usqp=CAc",
    },
    {
      name: "Samsung Galaxy S21",
      price: 799,
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuSEoko_P6GanFE1TE8kyAPU-tqLTpHl1j4nzU1H74ieu2PT_hXs6qyj1s0JtuZ-JrnAJRnvNKXupT&usqp=CAc",
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
        <input type="text" name="" id="" onChange={handleChange} />
        <p>{props.displayValue}</p>
      </div>
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
            <p>{product.name}</p>
            {/* <p>{product.title}</p> */}
            <p>{product.price}</p>
          </li>
        ))}
      </div>
    </div>
  );
}
