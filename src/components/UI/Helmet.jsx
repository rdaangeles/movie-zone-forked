const Helmet = (props) => {
  document.title = "MovieZone - " + props.title;
  return <div className="">{props.children}</div>;
};

export default Helmet;
