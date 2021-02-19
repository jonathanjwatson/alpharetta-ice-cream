const axios = require("axios");

module.exports = {
  findAll: (req, res) => {
    // FIXME: convert this to dynamic input
    axios
      .get(
        "https://api.yelp.com/v3/businesses/search?term=ice%20cream&location=Alpharetta&limit=5&sort_by=rating",
        {
          headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`,
          },
        }
      )
      .then((response) => {
        res.json(response.data);
      });
  },
};
