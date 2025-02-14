import React from "react";

const RecipeModal = ({ recipe, closeModal }) => {
  if (!recipe) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{recipe.name}</h2>
        <p><strong>Category:</strong> {recipe.category}</p>
        <p><strong>Difficulty Level:</strong> {recipe.level}</p>
        
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Instructions:</h3>
        <p>{recipe.instructions}</p>

        <button className="btn primary" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default RecipeModal;

  