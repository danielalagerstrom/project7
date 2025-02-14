import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-area">
      <h1>About</h1>
      <p>Dish Delights has thousands of recipes you will love to cook, 
        from easy weeknight dinners to holiday showstoppers. Editor-curated collections 
        make it easy to find the right recipe, and helpful step-by-step visuals make them 
        fun and simple to cook. We publish new recipes every day.
        </p>
        <button className="btn primary"><Link to="/recipes">Recipes</Link></button>
      <h2 className="about">Fun Facts</h2>
      <p className="listing">Dish Delights was established after a fun night out.  </p>
      <p className="listing">The founder of Dish Delights is a food enthusiast. </p>
      <p className="listing">Dish Delights has been featured in various publications. </p>
      <p className="listing">The first recipe on Dish Delights was a chocolate cake. </p>
       <div className="image">
        <img
          src= './images/about-picture2.png'
          alt="Founder of Dish Delights"
        />
      </div>
      
    </div>
  );
};

export default About;