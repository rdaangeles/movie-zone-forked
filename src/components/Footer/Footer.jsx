const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <div className="bg-c-secondary h-8 text-c-white flex items-center justify-center">
      <p className="text-xs">
        © {getYear} Movie<span className="text-c-tertiary">Zone</span>
      </p>
    </div>
  );
};

export default Footer;
