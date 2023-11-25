import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // props = object

  return (
    <header>
      <nav>
        <a href="">Главная</a>
        <a href="../createpost.jsx">Обо мне</a>
        <a href="">Контакты</a>

        <Link>About me</Link>
      </nav>
    </header>
  );
};

export default Header; // это нужно для отображение файла в других компонентах
