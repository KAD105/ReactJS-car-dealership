import "./Popular.css";
import car_1 from "../../assets/car_1.jpg";
import car_2 from "../../assets/car_2.jpg";
import car_3 from "../../assets/car_3.jpg";
import car_4 from "../../assets/car_4.jpg";
import car_5 from "../../assets/car_5.jpg";
import car_6 from "../../assets/car_6.jpg";
import car_7 from "../../assets/car_7.jpg";

const Popular = () => {
  return (
    <main>
      <div className="container">
        <div className="grids">
          <card className="card">
            <img src={car_1} className="card__img" />
            <h2 className="card__title">Pellentesque Vestibulum</h2>
            <p className="card__price"> €70.000</p>
            <p className="card__description">Lorem ipsum dolor sit amet</p>
          </card>
          <card className="card">
            <img src={car_2} className="card__img" />
            <h2 className="card__title">Sodales Ipsum</h2>
            <p className="card__price">€74.300</p>
            <p className="card__description">
              Pellentesque vestibulum ante nec leo
            </p>
          </card>
          <card className="card">
            <img src={car_3} className="card__img" />
            <h2 className="card__title">Euismod Lacinia</h2>
            <p className="card__price">€133.600</p>
            <p className="card__description">Congue, tincidunt ligula</p>
          </card>
          <card className="card">
            <img src={car_4} className="card__img" />
            <h2 className="card__title">Vestibulum Urna</h2>
            <p className="card__price">€88.000</p>
            <p className="card__description">Etiam mattis tincidunt urna</p>
          </card>
          <card className="card">
            <img src={car_5} className="card__img" />
            <h2 className="card__title">Semper Hendrerit.</h2>
            <p className="card__price"></p>
            <p className="card__description">
              Sed consequat turpis ut urna pulvinar
            </p>
          </card>
          <card className="card">
            <img src={car_6} className="card__img" />
            <h2 className="card__title">Luctus Amet Libero</h2>
            <p className="card__price">€299.740</p>
            <p className="card__description">Suspendisse a dictum elit,</p>
          </card>
          <card className="card">
            <img src={car_7} className="card__img" />
            <h2 className="card__title">Lorem Ipsum</h2>
            <p className="card__price">€318.086</p>
            <p className="card__description">Tempor augue dapibus in.</p>
          </card>
        </div>
      </div>
    </main>
  );
};
export default Popular;
