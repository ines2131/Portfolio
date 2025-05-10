import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentLang = location.pathname.startsWith("/ko") ? "ko" : "en";

  const toggleLang = () => {
    const nextLang = currentLang === "en" ? "ko" : "en";
    navigate(`${nextLang}`);
  };

  return (
    <header>
      <nav>
        <a href="profile">Profile</a>
        <a href="skills">Skills</a>
        <a href="projects">Projects</a>
      </nav>
      <button onClick={toggleLang}>{currentLang === "en" ? "KO" : "EN"}</button>
    </header>
  );
};

export default Header;
