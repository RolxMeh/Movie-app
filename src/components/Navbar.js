import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrollHandler, setScrollHandler] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollHandler(true);
      } else {
        setScrollHandler(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${scrollHandler === true && "bg-gr2"}`}>
      <img
        className="w-20 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
        alt="Netflix logo"
      />

      <img
        className="w-8 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User avatar"
      />
    </div>
  );
}
export default Navbar;
