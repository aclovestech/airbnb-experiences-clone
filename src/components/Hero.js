import photo_grid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={photo_grid} alt="" className="hero__photo-grid"></img>
      <h1 className="hero__header">Online Experiences</h1>
      <p className="hero__text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
