import { type } from "os";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
const array = [
  { title: "Điện thoại", link: "/dien-thoai" },
  { title: "Laptop", link: "/laptop" },
  { title: "Tablet", link: "/tablet" },
  { title: "Phụ Kiện", link: "/phu-kien" },
  { title: "SmartWatch", link: "/smartwatch" },
  { title: "Đồng hồ", link: "/dong-ho" },
];
function index() {
  const [post, setPost] = useState<{ id: string }[] | null>(null);
  const [style, setStyle] = useState("post");

  return (
    <div>
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
                        backgroundColor: "red",
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

export default index;
