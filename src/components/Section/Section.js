import React from "react";
import s from "./Section.module.css";
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return <section className={s.Gallery}>{children}</section>;
};
Section.propTypes = {
  title: PropTypes.string.isRequired
};

export default Section;
