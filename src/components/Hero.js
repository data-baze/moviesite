const heroStyle = {
  height: "400px",
};

const Hero = ({ text,text1,backdrop, homeBackdropUrl, aboutBackdropUrl }) => {
  return (
    <header
      className="bg-dark text-white text-center py-5 hero-container"
      style={heroStyle}
    >
      <h1 className="hero-text text-start px-5 pt-5 h-5">{text}</h1>
      <p className="hero-text text-start px-5 pt-0 h-5">{text1}</p>
      <div
        className="hero-backdrop"
        style={{ backgroundImage: `url(${backdrop})` }}
      ></div>
      <div
        className="hero-backdrop"
        style={{ backgroundImage: `url( ${homeBackdropUrl})` }}
      ></div>
      <div
        className="hero-backdrop"
        style={{ backgroundImage: `url( ${aboutBackdropUrl})` }}
      ></div>
    </header>
  );
};

export default Hero;
