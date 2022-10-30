import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Vaibhav Dwivedi's Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
