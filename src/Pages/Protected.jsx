import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate(); // Call useNavigate to get the navigate function

  useEffect(() => {
    const auth = localStorage.getItem("loggedInUser");
    if (!auth) {
      navigate("/login");
    }
  }, [navigate]); // Dependency array to ensure useEffect runs only on mount

  return (
    <>
      <Component />
    </>
  );
};

// PropTypes validation
Protected.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Protected;
