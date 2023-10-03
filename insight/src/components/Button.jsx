import React from "react";

const Button = ({ styles }) => (
 <a href="https://chrome.google.com/webstore/category/ext/11-web-development?hl=en"> <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get The Chrome extension
  </button></a>
);

export default Button;
