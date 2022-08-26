import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "sobre", "projetos", "skills", "testimonial", "contato"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#61dbfb" } : {}}
        />
      ),
    )}
  </div>
);

export default NavigationDots;
