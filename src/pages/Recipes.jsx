import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal"; // Import modal component

  const recipesData= [
    { 
      id: 1, 
      name: "Spaghetti Carbonara", 
      category: "Pasta", 
      description: "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.", 
      image: "/images/carbonara.png",
      ingredients: ["200g spaghetti", "100g pancetta", "2 eggs", "50g parmesan cheese", "Black pepper", "Salt"],
      instructions: "1. Cook spaghetti. 2. Fry pancetta. 3. Mix eggs and cheese. 4. Combine everything with pasta.",
      level: "Medium"
    },
  
    { 
      id: 2, 
      name: "Chicken Curry", 
      category: "Asian", 
      description: "Rich and creamy curry with tender chicken pieces and aromatic spices.", 
      image: "/images/chicken-curry.png",
      ingredients: ["500g chicken", "1 onion", "2 cloves garlic", "400ml coconut milk", "2 tbsp curry powder"],
      instructions: "1. Fry onion and garlic. 2. Add chicken and cook. 3. Stir in curry powder and coconut milk. 4. Simmer for 20 minutes.",
      level: "Easy"
    },
  
    { 
      id: 3, 
      name: "Caesar Salad",
      category: "Salad",
      description: "Crispy romaine lettuce with creamy Caesar dressing, croutons, and parmesan.", 
      image: "/images/caesar-salad.png",
      ingredients: ["1 head romaine lettuce", "1/2 cup Caesar dressing", "1/4 cup croutons", "1/4 cup grated parmesan cheese"],
      instructions: "1. Toss lettuce with dressing. 2. Add croutons and cheese. 3. Serve chilled.",
      level: "Easy"
    },

    { id: 4, 
      name: "Beef Tacos",
      category: "Mexican",
      description: "Tasty beef tacos served with fresh salsa and soft tortillas.",
      image: "/images/beef-tacos.png",
      ingredients: ["500g ground beef", "1 onion", "1 bell pepper", "1/2 cup salsa", "4 tortillas"],
      instructions: "1. Cook beef, onion, and pepper. 2. Add salsa. 3. Serve in tortillas.",
      level: "Easy"
    },

    { id: 5, 
      name: "Veggie Burger", 
      category: "Vegetarian", 
      description: "Healthy veggie burger made with beans, mushrooms, and spices.", 
      image: "/images/veggie-burger.png",
      ingredients: ["1 can black beans", "1/2 cup breadcrumbs", "1/2 cup mushrooms", "1 tsp cumin", "1 tsp paprika"],
      instructions: "1. Mash beans. 2. Mix with other ingredients. 3. Form patties and cook.",
      level: "Medium"
    },

    { id: 6, 
      name: "Mushroom Risotto", 
      category: "Vegetarian", 
      description: "Creamy risotto cooked with flavorful mushrooms and parmesan.", 
      image: "/images/mushroom-risotto.png",
      ingredients: ["1 cup arborio rice", "1/2 cup white wine", "1/2 cup grated parmesan", "1 cup mushrooms", "1 onion"],
      instructions: "1. Cook onion and mushrooms. 2. Add rice and wine. 3. Stir in broth and cheese.",
      level: "Medium"
    },

    { id: 7,
      name: "Beef Stroganoff", 
      category: "Beef", 
      description: "Savory beef stroganoff with mushrooms in a creamy sauce.", 
      image: "/images/beef-stroganoff.png",
      ingredients: ["500g beef strips", "1 onion", "200g mushrooms", "1/2 cup sour cream", "1 tbsp flour"],
      instructions: "1. Brown beef and onion. 2. Add mushrooms. 3. Stir in flour and sour cream.",
      level: "Medium"
    },

    { id: 8, 
      name: "Chicken Alfredo", 
      category: "Chicken", 
      description: "Pasta dish with creamy Alfredo sauce and grilled chicken.", 
      image: "/images/chicken-alfredo.png",
      ingredients: ["200g fettuccine", "200g chicken breast", "1 cup heavy cream", "1/2 cup parmesan cheese", "2 cloves garlic"],
      instructions: "1. Cook pasta. 2. Grill chicken. 3. Make sauce with cream, cheese, and garlic.",
      level: "Medium"
    },

    { id: 9, 
      name: "Beef Wellington", 
      category: "Beef", 
      description: "Tender beef wrapped in puff pastry with mushroom duxelles.",
      image: "/images/beef-wellington.png",
      ingredients: ["500g beef fillet", "200g mushrooms", "1 sheet puff pastry", "2 cloves garlic", "1 egg"],
      instructions: "1. Sear beef. 2. Make duxelles. 3. Wrap beef in pastry. 4. Bake until golden.",
      level: "Hard"
    },

    { id: 10,
      name: "Chicken Parmesan", 
      category: "Chicken", 
      description: "Crispy breaded chicken topped with marinara sauce and cheese.", 
      image: "/images/chicken-parmesan.png",
     ingredients: ["2 chicken breasts", "1 cup breadcrumbs", "1 cup marinara sauce", "1/2 cup mozzarella cheese", "1/4 cup parmesan cheese"],
     instructions: "1. Bread chicken. 2. Fry until golden. 3. Top with sauce and cheese. 4. Bake until bubbly.",
     level: "Medium"
   },

  ];
  

  const Recipes = () => {
    const [search, setSearch] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearch(query);
      setFilteredRecipes(
        recipesData.filter(recipe =>
          recipe.name.toLowerCase().includes(query)
        )
      );
    };
  
    const openModal = (recipeId) => {
      const recipe = recipesData.find(r => r.id === recipeId);
      setSelectedRecipe(recipe);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedRecipe(null);
      setIsModalOpen(false);
    };
  
    return (
      <div className="recipes-container">
        <h1>Recipes</h1>
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={handleSearch}
        />
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              category={recipe.category}
              description={recipe.description}
              image={recipe.image}
              openModal={openModal} // Pass function to open modal
            />
          ))}
        </div>
        {isModalOpen && <RecipeModal recipe={selectedRecipe} closeModal={closeModal} />}
      </div>
    );
  };
  
  export default Recipes;


