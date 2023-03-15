import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import {
  faUser,
  faCartPlus,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
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
          <a>
            <h5>Lịch sử đơn hàng </h5>
          </a>
        </Link>
        <div className={styles.cart}>
          <FontAwesomeIcon
            className={styles.cartIcon2}
            style={{ width: "20px", height: "20px", marginRight: "5px" }}
            icon={faCartPlus}
          />
          {/* <h5>Giỏ hàng </h5> */}
        </div>
        <Link href="/login" legacyBehavior>
          <a>
            <h5>Hỏi đáp công nghệ </h5>
          </a>
        </Link>
        <p>Hỏi đáp </p>
        <p>Game App </p>
        <div className={styles.menu}>
          <FontAwesomeIcon
            className={styles.cartIcon2}
            style={{ width: "20px", height: "20px", marginRight: "5px" }}
            icon={faBars}
          />
          <Link href="/Menu" legacyBehavior>
            <a>
              <h5>Menu</h5>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.input_mobile}>
        <input
          style={{
            width: "100%",
            borderColor: "white",
            borderRadius: "4px",
            borderTop: "white",
            borderLeft: "white",
          }}
          type="text"
          placeholder="Bạn tìm gì..."
        />
      </div>
      <div className={styles.nav}>
        <div className={styles.nav_item}>
          <li className={styles.menulink__link}>Điện thoại</li>
          <li className={styles.menulink__link}>Laptop</li>
          <li className={styles.menulink__link}>Tablet</li>
          <li className={styles.menulink__link}>
            Phụ kiện
            <div className={styles.menu_child}>
              <div className={styles.menu_child_item}>
                <h4 className={styles.menu_child_item_name}>
                  PHỤ KIỆN DI ĐỘNG
                </h4>
                <ul className={styles.menu_child_list}>
                  <li className={styles.menu_list_item}>Sạc cáp dự phòng</li>
                  <li className={styles.menu_list_item}>Sạc, cáp</li>
                  <li className={styles.menu_list_item}>Ốp lưng điện thoại</li>
                  <li className={styles.menu_list_item}>Miếng dán màn hình</li>
                  <li className={styles.menu_list_item}>Gậy chụp ảnh</li>
                  <li className={styles.menu_list_item}>Gía đỡ điện thoại</li>
                  <li className={styles.menu_list_item}>Túi chống nước</li>
                </ul>
              </div>
              <div className={styles.menu_child_item}>
                <h4 className={styles.menu_child_item_name}>PHỤ KIỆN LAPTOP</h4>
                <ul className={styles.menu_child_list}>
                  <li className={styles.menu_list_item}>Chuột, bàn phím</li>
                  <li className={styles.menu_list_item}>Thiết bị mạng </li>
                  <li className={styles.menu_list_item}>Balo túi chống nước</li>
                  <li className={styles.menu_list_item}>Giá đỡ laptop</li>
                  <li className={styles.menu_list_item}>Phần mềm</li>
                </ul>
              </div>
              <div className={styles.menu_child_item}>
                <h4 className={styles.menu_child_item_name}>
                  THIẾT BỊ NHÀ THÔNG MINH{" "}
                </h4>
                <ul className={styles.menu_child_list}>
                  <li className={styles.menu_list_item}>Khóa điện tử</li>
                  <li className={styles.menu_list_item}>Camera, webcam</li>
                  <li className={styles.menu_list_item}>Máy chiếu</li>
                  <li className={styles.menu_list_item}>TV Box</li>
                  <li className={styles.menu_list_item}>
                    Ổ cắm, bóng đèn thông minh
                  </li>
                </ul>
              </div>
              <div className={styles.menu_child_item}>
                <h4 className={styles.menu_child_item_name}>
                  THƯƠNG HIỆU HÀNG ĐẦU
                </h4>
                <ul className={styles.menu_child_list}>
                  <li className={styles.menu_list_item}>Apple</li>
                  <li className={styles.menu_list_item}>Samsung</li>
                  <li className={styles.menu_list_item}>Sony</li>
                  <li className={styles.menu_list_item}>JBL</li>
                  <li className={styles.menu_list_item}>Anker</li>
                </ul>
              </div>
              <div className={styles.menu_child_item}>
                <h4 className={styles.menu_child_item_name}>
                  THIẾT BỊ LƯU TRỮ
                </h4>
                <ul className={styles.menu_child_list}>
                  <li className={styles.menu_list_item}>Ổ cứng di động</li>
                  <li className={styles.menu_list_item}>Thẻ nhớ</li>
                  <li className={styles.menu_list_item}>USB</li>
                  <li className={styles.menu_list_item}>JBL</li>
                  <li className={styles.menu_list_item}>Anker</li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.menulink__link}>Smartwatch</li>
          <li className={styles.menulink__link}>Đồng hồ</li>
          <li className={styles.menulink__link_pc}>Máy cũ giá rẻ </li>
          <li className={styles.menulink__link_pc}>PC, Máy in</li>
        </div>
      </div>
    </div>
  );
}

export default Header;
