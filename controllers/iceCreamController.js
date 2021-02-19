const axios = require("axios");

const config = {
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
};

module.exports = {
  findAll: (req, res) => {
    // FIXME: convert this to dynamic input
    axios
      .get(
        "https://api.yelp.com/v3/businesses/search?term=ice%20cream&location=Alpharetta&limit=5&sort_by=rating",
        config
      )
      .then((response) => {
        const sortedBusinesses = [...response.data.businesses];
        sortedBusinesses.sort((a, b) => {
          if (a.rating < b.rating) {
            return 1;
          }
          if (a.rating > b.rating) {
            return -1;
          }
          return 0;
        });
        res.json({
          businesses: sortedBusinesses,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  },
  findByID: (req, res) => {
    axios
      .get(`https://api.yelp.com/v3/businesses/${req.params.id}`, config)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  },
  findReviewsByID: (req, res) => {
    axios
      .get(`https://api.yelp.com/v3/businesses/${req.params.id}/reviews`, config)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  },
};
