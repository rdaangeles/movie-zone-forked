const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <div className="bg-c-primary h-8 text-c-white flex items-center justify-center">
      <p className="text-xs">
        © {getYear} Movie<span className="text-c-tertiary">Zonessss</span>
      </p>
    </div>
  );
};

export default Footer;
