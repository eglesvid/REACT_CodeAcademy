// komponentas, skirtas atvaizduoti viena article
import React from "react";

// {
//   "source": {
//     "id": "wired",
//     "name": "Wired"
//   },
//   "author": "Louryn Strampe",
//   "title": "16 Best Spring Sales: Google Pixel Phones, Samsung Galaxy S23, and More",
//   "description": "Save on Google Pixel and Samsung smartphones or camera bags and video games.",
//   "url": "https://www.wired.com/story/spring-sales-2023/",
//   "urlToImage": "https://media.wired.com/photos/641b41d84d133330b1639c1c/191:100/w_1280,c_limit/Google-Pixel-Buds-Pro-New-Gear.jpg",
//   "publishedAt": "2023-03-22T22:22:00Z",
//   "content": "Spring is officially here, and retailers are celebrating by holding seasonal sales. While these kinds of sale events often have themes tied to the warmer weather, these deals aren't limited to fitnes… [+6004 chars]"
// }

export default function Article({ article }) {
  return (
    <div>
      <p>Author: {article.author}</p>
      <h4>{article.title}</h4>
      <img src={article.urlToImage} alt="" />
      <p>{article.content}</p>
    </div>
  );
}
