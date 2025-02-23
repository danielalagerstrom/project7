import { Link } from "react-router-dom";
import React from 'react';

function RecipeList({ recipes, handleEdit, handleDelete }) {
    

    return (
        <ul className="recipes">
            {recipes.map((recipe, index) => (
                <li key={index} className="recipe">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.content}</p>
                    <button className="primary btn" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="primary btn" onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}


export default RecipeList;