import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faHome } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios
      .get("/api/iceCream")
      .then((response) => {
        console.log(response.data);
        setBusinesses(response.data.businesses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Alpharetta Ice Cream</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {businesses.map((business) => (
          <div className="col-sm-4">
            <div className="card">
              <img
                src={business.image_url}
                className="card-img-top"
                alt={business.name}
                style={{ width: "100%", height: 300 }}
              />
              <div className="card-body">
                <h5 className="card-title">{business.name}</h5>
                <div className="card-text row">
                  <div className="col-sm-8">Rating: {business.rating}</div>
                  <div className="col-sm-4 d-flex justify-content-end">
                    {business.transactions.includes("pickup") && (
                      <FontAwesomeIcon icon={faCar} style={{ padding: 1 }} />
                    )}
                    {business.transactions.includes("delivery") && (
                      <FontAwesomeIcon icon={faHome} style={{ padding: 1 }} />
                    )}
                  </div>
                  <div className="col">
                    <hr />
                    {business?.location?.address1}
                    <br />
                    {business?.location?.city}, {business?.location?.state}{" "}
                    {business?.location?.zip_code}
                    <br />
                    {business.display_phone}
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <a href={business.url} className="btn btn-primary" style={{width: "100%"}}>
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
