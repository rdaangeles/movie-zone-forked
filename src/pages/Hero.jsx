import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";
import HeroBg from "../assets/hero-cinema.jpg";
import "../stylesheets/hero/hero.scss";
const Hero = () => {
  return (
    <div
      className="hero-section h-screen bg-img relative"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Hero Content */}
      <div className="content text-center absolute">
        <h1>
          Movie<span className="text-c-tertiary">Zone</span>
        </h1>
        <p className="mb-6 ">Browse and review your desired movie.</p>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#DA0037",
            color: "white",
            border: "1px solid #DA0037",
            ":hover": {
              border: "1px solid #DA0037",
            },
          }}
        >
          <a href="/movies">Get Started</a>
          <MovieIcon sx={{ marginLeft: "1rem" }} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
