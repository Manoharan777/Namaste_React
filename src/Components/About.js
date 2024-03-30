import { useEffect, useState } from "react";
import User from "./User";
import Shimmer from "./Shimmer"

const About = () => {
  const [gituser, setGituser] = useState(null);
  const fetchdata = async () => {
    const response = await fetch(
      "https://api.github.com/users/manoharan777/repos"
    );
    const data = await response.json();
   // console.log(data);
    setGituser(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (!gituser) return <Shimmer/>;


  return (
    <div className="about">
      <h1>About us</h1>
      <h4>Food ordering app</h4>
      <b>Our Develeoper's are below : </b>
      <User git={gituser} />
    </div>
  );
};

export default About;
