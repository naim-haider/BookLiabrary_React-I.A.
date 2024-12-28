import React from "react";

const RatingStar = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 >= 0.5; // Half star if rating has decimal part
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0); // Empty stars
  return (
    <>
      {"★".repeat(fullStars)}
      {halfStar ? "☆" : ""}
      {"☆".repeat(emptyStars)}
    </>
  );
};

export default RatingStar;
