

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = recipesData.find((r) => r.id === parseInt(id)); // Find the recipe

  if (!recipe) {
    return <h2>Recipe not found</h2>; // Handle missing recipe
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p><strong>Category:</strong> {recipe.category}</p>
      <p>{recipe.description}</p>
      <Link to="/">← Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetail;
