import { Link } from "react-router-dom";
import React from 'react';

function RecipeForm({ currentRecipe, handleChange, handleSubmit, isEditing }) {
    return (
        <form onSubmit={handleSubmit} className= "recipes">
            <div>
                <label>Title:</label>
                <input className="recipe-input"
                    type="text"
                    name="title"
                    value={currentRecipe.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Recipe:</label>
                <textarea
                    name="content"
                    value={currentRecipe.content}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="secondary btn" type="submit">{isEditing ? 'Update' : 'Create'} Recipe</button>
        </form>
    );
}

export default RecipeForm;
