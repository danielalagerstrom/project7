import { useState } from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';

function RecipeManager() {
    const [recipes, setRecipes] = useState([]);
    const [currentRecipe, setCurrentRecipe] = useState({ title: '', content: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentRecipe({ ...currentRecipe, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isEditing) {
            const updatedRecipes = recipes.map((recipe, index) =>
                index === editIndex ? currentRecipe : recipe
            );
            setRecipes(updatedRecipes);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setRecipes([...recipes, currentRecipe]);
        }
        setCurrentRecipe({ title: '', content: '' });
    }

    function handleDelete(index) {
        // The underscore (_) is used as a placeholder for 
        // the first parameter of the callback function. 
        // This is a common convention to indicate that the parameter is intentionally unused.
        const updatedRecipes = recipes.filter((_, i) => i !== index);
        setRecipes(updatedRecipes);
    }

    function handleEdit(index) {
        setCurrentRecipe(recipes[index]);
        setIsEditing(true);
        setEditIndex(index);
    }

    return (
        <div className= "recipe">
            <h1>Recipe Creator</h1>
            <RecipeForm
                currentRecipe={currentRecipe}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isEditing={isEditing}
            />
            <h2>Recipes</h2>
            <RecipeList
                recipes={recipes}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default RecipeManager;