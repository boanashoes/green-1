module.exports = {
  config: {
    tailwindjs: "./tailwind.config.js",
    port: 9050,
  },
  paths: {
    root: "./",
    src: {
      base: "./src",
      scss: "./src/scss",
      css: "./src/css",
      js: "./src/js",
      img: "./src/img",
    },
    dist: {
      base: "./dist",
      css: "./dist/css",
      js: "./dist/js",
      img: "./dist/img",
    },
  },
  site: {
    fb_pixel_code: "3033676103423109",
    products: [
      {
        discount: 40,
        model: "GT0917",
        price: {
          new: 1379,
          old: 2299,
        },
        images: {
          with_bg: [
            "/img/products/GT0917/with-bg/1.jpg",
            "/img/products/GT0917/with-bg/2.jpg",
            "/img/products/GT0917/with-bg/3.jpg",
            "/img/products/GT0917/with-bg/4.jpg",
          ],
        },
      },
    ],
    texts: {
      hero: {
        discount: "DISCOUNT ",
        title: "Пора переобуться по супер ценам!",
        subtitle: "Забирай по скидке стильные ботинки!",
        button: "Заказать сейчас",
      },
      advantages: [
        {
          icon: "/img/advantages/season.svg",
          title: "Сезонность",
          subtitle: "зимняя коллекция",
        },
        {
          icon: "/img/advantages/leather.svg",
          title: "натуральная кожа",
          subtitle: "подошва, фурнитура и кожа высокого качества",
        },
        {
          icon: "/img/advantages/rating.svg",
          title: "Трендовая модель",
          subtitle: "Трендовая модель",
        },
      ],
      gallery: {
        title: "Женские ботинки украинского бренда Boana",
        first_p: `Зимние ботинки бренда BOANA – выглядят массивно согласно последним трендам, 
        но при этом комфортные и довольно легкие. Мы разработали модель на меху, которая выдерживает до -15 ° мороза. 
        Вам будет тепло и удобно. Ботинки сделаны
        из натуральной кожи.`,
        second_p: `Осенняя модель внешне не отличается от
        зимней, но вместо меха мы использовали байку, кожа тоже натуральная. Обе пары влагоустойчивы, а это значит, что погодные условия не повлияют на внешний вид обуви,
        она выдержит и дождь, и слякоть!`,
        sub: `Мы привлекли к работе стилистов, 
        чтобы создать максимально трендовую 
        и универсальную модель на каждый день!`,
      },
      cert: {
        title:
          "При заказе любой парЫ обуви вы получите сертификат на вторую покупку!!!",
        bg_text: "Сертификат",
        image: "/img/cert.jpg",
      },
    },
  },
};
