import { useEffect, useState } from "react";
import axios from "axios";
import BusinessCard from "../../components/BusinessCard/BusinessCard";

const Home = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios
      .get("/api/iceCream")
      .then((response) => {
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
          <BusinessCard {...business} key={business.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
