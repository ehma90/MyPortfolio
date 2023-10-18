import { Link } from "react-router-dom";
import "../../style/Card.css";

function Cards({ items }) {
  return (
    <div className="card" data-aos="zoom-in-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000">
      <div className="card-img">
        <img src={items.image} alt="cards" className="w-full rounded" />
      </div>

      <div className="">
        <Link to={`/projects/${items.slug}`} className='card-btn'>See Project</Link>
      </div>
    </div>
  );
}

export default Cards;
