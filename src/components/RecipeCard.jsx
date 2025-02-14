// RecipeCard component
import React from "react";

const RecipeCard = ({ id, name, category, description, image, openModal }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{description}</p>
      <button className="recipe-btn" onClick={() => openModal(id)}>View Details</button>
    </div>
  );
};

export default RecipeCard;

