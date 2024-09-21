import cardPictureOne from "./images/woman.png";
import cardPictureTwo from "./images/wedding-photography.png";
import cardPictureThree from "./images/mountain-bike.png";

const cardsData = [
  {
    id: 1,
    image: cardPictureOne,
    rating: "5.0",
    ratingQuantity: "6",
    location: "Jed's Island Resort",
    detail: "Life Lessons with Katie Zaferes",
    price: "$136",
    openSlots: 0,
  },
  {
    id: 2,
    image: cardPictureTwo,
    rating: "5.0",
    ratingQuantity: "30",
    location: "Online",
    detail: "Learn Wedding Photography",
    price: "$125",
    openSlots: 10,
  },
  {
    id: 3,
    image: cardPictureThree,
    rating: "4.8",
    ratingQuantity: "2",
    location: "Canada",
    detail: "Group Mountain Biking",
    price: "$50",
    openSlots: 10,
  },
];

export default cardsData;
