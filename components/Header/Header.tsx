import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useState } from "react";
import { faCartPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { log } from "console";
const array = [
  { title: "Điện thoại", link: "/dien-thoai" },
  { title: "Laptop", link: "/laptop" },
  { title: "Tablet", link: "/tablet" },
  { title: "Phụ Kiện", link: "/phu-kien" },
  { title: "SmartWatch", link: "/smartwatch" },
  { title: "Đồng hồ", link: "/dong-ho" },
];
function Header(props: any) {
  console.log(props.name);

  const [style, setStyle] = useState("");
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        {/* <Input /> */}
        <h1>{props.name}</h1>
        <a onClick={() => router.push("/")}>
          <img
            className={styles.logo}
            src="https://lh6.googleusercontent.com/jQXE325__my6TIcTVtoATgaQ_ZZvp-zHH0izCGQT5Obt-sdDaci5QQetrlo6qWcH8wnoQ2wdiM79uPA3g6ymd9jox-aex1g8OF5Sdk0ky_Q-vBvv81h103m2f7qKOyLOIH8cHjUH"
          />
        </a>
        <h1>{props.name}</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Bạn tìm gì..."
        />
        {/* <h1>{console.log(props.name)}</h1> */}
        <Link href="/history" legacyBehavior>
          <a
            style={{
              height: "35px",
              width: "150px",
              alignItems: "center",
              textAlign: "center",
              // backgroundColor: "rgba(255, 172, 10, 0.6)",
            }}
          >
            <h5 className={styles.history}>Lịch sử đơn hàng </h5>
          </a>
        </Link>

        <Link href="/login" legacyBehavior>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              height: "35px",
              width: "150px",
              justifyContent: "center",
              // backgroundColor: "rgba(255, 172, 10, 0.6)",
            }}
          >
            <div className={styles.giohang}>
              <h5>Giỏ hàng</h5>
              <FontAwesomeIcon
                className={styles.cartIcon2}
                style={{ width: "20px", height: "20px", marginLeft: "15px" }}
                icon={faCartPlus}
              />
            </div>
          </a>
        </Link>

        <div className={styles.menu}>
          <Link href="/Menu" legacyBehavior>
            <a>
              <FontAwesomeIcon
                className={styles.cartIcon2}
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
                icon={faBars}
              />
              <h5>Menu</h5>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.phone}>
        {array.map((p, index) => (
          <div key={index}>
            <Link href={p.link}>
              <p
                className={styles.main}
                onClick={() => setStyle(p.title)}
                style={
                  style === p.title
                    ? {
                        color: "white",
                      }
                    : {}
                }
              >
                {p.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
