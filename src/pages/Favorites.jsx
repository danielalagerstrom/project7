import { Link } from "react-router-dom";
import FavoriteManager from "../components/RecipeManager";
import RecipeManager from "../components/RecipeManager";
import TodoList from "../components/ToDoList";

const Favorites = () => {
  return (
    <div className="favorites">
      <RecipeManager />
      
    </div>
  );
};

export default Favorites;