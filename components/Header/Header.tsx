import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useState } from "react";
import {
  faUser,
  faCartPlus,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const array = [
  { title: "Điện thoại", link: "/dien-thoai" },
  { title: "Laptop", link: "/laptop" },
  { title: "Tablet", link: "/tablet" },
  { title: "Phụ Kiện", link: "/phu-kien" },
  { title: "SmartWatch", link: "/smartwatch" },
  { title: "Đồng hồ", link: "/dong-ho" },
];
function Header() {
  const [post, setPost] = useState<{ id: string }[] | null>(null);
  const [style, setStyle] = useState("");
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <a onClick={() => router.push("/")}>
          <img
            className={styles.logo}
            src="https://lh6.googleusercontent.com/jQXE325__my6TIcTVtoATgaQ_ZZvp-zHH0izCGQT5Obt-sdDaci5QQetrlo6qWcH8wnoQ2wdiM79uPA3g6ymd9jox-aex1g8OF5Sdk0ky_Q-vBvv81h103m2f7qKOyLOIH8cHjUH"
          />
        </a>

        <input
          className={styles.input}
          type="text"
          placeholder="Bạn tìm gì..."
        />
        {/* <h5>Lịch sử đơn hàng </h5> */}
        <Link href="/history" legacyBehavior>
          <a
            style={{
              height: "35px",
              width: "150px",
              alignItems: "center",
              textAlign: "center",
              // marginTop: "5px",
              backgroundColor: "rgba(255, 172, 10, 0.6)",
            }}
          >
            <h5 style={{ marginTop: "10px" }}>Lịch sử đơn hàng </h5>
          </a>
        </Link>

        <Link href="/login" legacyBehavior>
          <a
            style={{
              display: "flex",
              // border: "1px solid red",
              alignItems: "center",
              height: "35px",
              width: "150px",
              justifyContent: "center",
              backgroundColor: "rgba(255, 172, 10, 0.6)",
            }}
          >
            <h5>Giỏ hàng</h5>
            <FontAwesomeIcon
              className={styles.cartIcon2}
              style={{ width: "20px", height: "20px", marginLeft: "15px" }}
              icon={faCartPlus}
            />
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
        {array.map((p) => (
          <div>
            <Link href={p.link}>
              <p
                className={styles.main}
                onClick={() => setStyle(p.title)}
                style={
                  style === p.title
                    ? {
                        // backgroundColor: "red",
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
