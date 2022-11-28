import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeLinks } from "../../components/home/HomeLinks";
import { useAppSelector } from "../../redux/hooks";
import "./home.css";

const Home: FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  return (
    <div className="App">
      <h1 className="heading">
        Select the type of news you want, or search for an article.
      </h1>
      <HomeLinks />
    </div>
  );
};

export default Home;
