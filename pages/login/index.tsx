import { rejects } from "assert";
import { resolve } from "path";
import React, { useEffect, useState } from "react";

function Image() {
  // const [urls, setUrls] = useState<{ urls: string }[] | null>(null);
  // useEffect(() => {
  //   const fetchData = () => {
  //     Promise.all([
  //       fetch("https://picsum.photos/200/300"),
  //       fetch("https://picsum.photos/200/300"),
  //       fetch("https://picsum.photos/200/300"),
  //     ])
  //       .then((responses) =>
  //         Promise.all(responses.map((response) => response.url))
  //       )
  //       .then((urls) =>
  //         urls.map((url) => {
  //           return {
  //             urls: url,
  //           };
  //         })
  //       )
  //       .then((urls) => setUrls(urls))
  //       .catch((error) => console.log(error));
  //   };
  //   const set = setInterval(() => {
  //     fetchData();
  //   }, 1000);
  //   return () => clearInterval(set);
  // }, []);

  //   fetch("https://picsum.photos/200/300")
  //     .then((trave) => resolve(trave))
  //     .catch((error) => reject(error));
  // });
  // const promise2 = new Promise((resolve, reject) => {
  //   fetch("https://picsum.photos/200/300")
  //     .then((trave) => resolve(trave))
  //     .catch((error) => reject(error));
  // });
  // const promise3 = new Promise((resolve, reject) => {
  //   fetch("https://picsum.photos/200/300")
  //     .then((trave) => resolve(trave))
  //     .catch((error) => reject(error));
  // });

  // promise1

  //   .then((data) => {
  //     console.log(data.url);
  //     document.getElementById("img_1")?.setAttribute("src", data.url);
  //     return promise2;
  //   })
  //   .then((data) => {
  //     console.log(data.url);
  //     document.getElementById("img_2")?.setAttribute("src", data.url);
  //     return promise3;
  //   })
  //   .then((data) => {
  //     console.log(data.url);
  //     document.getElementById("img_3")?.setAttribute("src", data.url);
  //   })
  //   .catch((err) => {
  //     console.log("gg");
  //   });
  return (
    // <div style={{ display: "flex", justifyContent: "center" }}>
    //   {urls &&
    //     urls.map((url) => <img key={url.urls} src={url.urls} alt="random" />)}
    // </div>
    <div></div>
  );
}

export default Image;
