import cardsData from "../data.js";
import Card from "../components/Card";

export default function CardsPanel() {
  const cards = cardsData.map((data) => {
    return <Card key={data.id} {...data} />;
  });

  return <section className="cards-panel">{cards}</section>;
}
