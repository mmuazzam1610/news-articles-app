import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeLinks } from "../../components/home/HomeLinks";
import { AppLayout } from "../../components/shared/AppLayout";
import { useAppSelector } from "../../redux/hooks";
import "./home.css";

const Home: FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  return (
    <AppLayout>
      <h1 className="heading">
        Select the type of news you want, or search for an article.
      </h1>
      <HomeLinks />
    </AppLayout>
  );
};

export default Home;
