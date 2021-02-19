import React from "react";
import PropTypes from "prop-types";

const Review = ({ text, url, user }) => {
  return (
    <>
      <h5>Here's what {user.name ? user.name : "someone"} had to say . . .</h5>
      <p>
        {text} <a href={url}>Read more</a>
      </p>
    </>
  );
};

Review.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  user: PropTypes.object,
};

export default Review;
