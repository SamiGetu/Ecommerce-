/* eslint-disable react/prop-types */

const Helmet = (props) => {
  document.title = "Mart - " + props.title;
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export default Helmet;
