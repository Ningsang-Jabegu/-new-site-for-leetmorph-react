import * as React from "react";
import CompLogoColor from "../img/Logo.png"
import CompLogoWhite from "../img/Logo-white.png"

function SvgComponent({bg=""}) {
  return (
      <img src={bg == "dark"? CompLogoWhite: CompLogoColor} alt="Leetmorph Technology Logo"  height={30} />
  );
}

export default SvgComponent;
