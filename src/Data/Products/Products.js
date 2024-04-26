import paintImage from "../../assets/image/paint.png";
import paint1Image from "../../assets/image/paint1.png";
import paint2Image from "../../assets/image/paint2.png";
import paint3Image from "../../assets/image/paint3.png";
import paint4Image from "../../assets/image/paint4.png";
import paint5Image from "../../assets/image/paint5.png";
import craftImage from "../../assets/image/craft.png";
import craft1Image from "../../assets/image/craft1.png";
import craft5Image from "../../assets/image/craft5.png";
import craft6Image from "../../assets/image/craft6.png";
import ring1Image from "../../assets/image/ring1.png";
import earringImage from "../../assets/image/earing.png";
import necklace3Image from "../../assets/image/nake.png";
import necklace4Image from "../../assets/image/nake1.png";

const Products = [
  {
    id: 1,
    ProductsImage: paintImage,
    title: "Pikok",
    type: "Wall Paint",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "TrandingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 2,
    ProductsImage: paint1Image,
    title: "Feather",
    type: "Wall Paint",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "TrandingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 3,
    ProductsImage: paint2Image,
    title: "Town",
    type: "Wall Paint",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "TrandingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 4,
    ProductsImage: paint3Image,
    title: "Abstract Farm",
    type: "Wall Paint",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "TrandingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 5,
    ProductsImage: paintImage,
    title: "Pikok",
    type: "Wall Paint",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "NewArived",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 6,
    ProductsImage: paint4Image,
    title: "Nake Less",
    type: "Wall Paint",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "NewArived",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 7,
    ProductsImage: paint5Image,
    title: "Nake Less",
    type: "Wall Paint",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "NewArived",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 8,
    ProductsImage: paint3Image,
    title: "Drame",
    type: "Wall Paint",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "NewArived",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 9,
    ProductsImage: craftImage,
    title: "Drame",
    type: "Craft",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "SellingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 10,
    ProductsImage: craft1Image,
    title: "Drame",
    type: "Craft",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "SellingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 11,
    ProductsImage: craft5Image,
    title: "Wood Craft",
    type: "Craft",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "SellingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 12,
    ProductsImage: craft6Image,
    title: "Ceramic Craft",
    type: "Craft",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "SellingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 13,
    ProductsImage: ring1Image,
    title: "Ring",
    type: "Jewelry",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "SellingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 14,
    ProductsImage: earringImage,
    title: "Earring",
    type: "Jewelry",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "SellingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 15,
    ProductsImage: necklace3Image,
    title: "Necklace",
    type: "Jewelry",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "SellingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 16,
    ProductsImage: necklace4Image,
    title: "Necklace",
    type: "Jewelry",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur officiis magnam minima aperiam laudantium ex? Numquam architectolibero sint ab.",
    Categories: "SellingProducts",
    Price: 299,
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
];

export default Products;
