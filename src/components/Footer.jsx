import React from "react";

const Footer = () => {
  return (
    <footer className="text-center p-10 text-xs">
      <span className="font-bold text-brand">Open Droids </span> by{" "}
      <a className="underline" href="https://mahis.life">Mahi Shafiullah</a>. The source code is
      licensed <a className="underline" href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      The website content is licensed{" "}
      <a className="underline" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>
    </footer>
  );
};

export default Footer;
