import React from "react";
import styles from "./footer.module.scss";
function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__item}>
        <p>Tích điểm Quà tặng VIP</p>
        <p>Lịch sử mua hàng</p>
        <p>Tìm hiểu về chính sách mua trả góp</p>
        <p>Chính sách bảo hành</p>
      </div>
      <div className={styles.footer__item}>
        <p>Giới thiệu công ty (MWG.vn)</p>
        <p>Tuyển dụng </p>
        <p>Gửi góp ý, khiếu nại</p>
        <p>Tìm siêu thị</p>
      </div>
      <div className={styles.footer__item_mobile}>
        <p>
          <b>Tổng đài hỗ trợ </b>(Miễn phí gọi)
        </p>
        <p>
          Gọi mua: <em>1800.1060</em> (7:30 - 22:00)
        </p>
        <p>
          Gọi mua: <em>1800.1060</em> (7:30 - 22:00)
        </p>
        <p>
          Gọi mua: <em>1800.1060</em> (7:30 - 22:00)
        </p>

        <p>
          <em>Tìm 3.385 cửa hàng Thế Giới Di Động</em>
        </p>
        <p>
          <em>Tích điểm quà tặng VIP</em>
        </p>
      </div>
    </div>
  );
}

export default footer;
