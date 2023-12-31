import React from "react";
import { Link } from "react-router-dom"; 

const Header = () => {

  // props = object

  // react-router-dom позволит сделать запрос на JSX

  // <a> - запрашивает новый HTML файл и этот тег не умеет работать с jsx

  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About me</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default Header; // это нужно для отображение файла в других компонентах
