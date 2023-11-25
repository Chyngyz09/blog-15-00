import React from "react";
import "./homepage.css";

const HomePage = () => {
  const courses = [
    {
      name: "HTML",
      duration: 1,
    },
    {
      name: "CSS",
      duration: 1,
    },
    {
      name: "JAVA SCRIPT",
      duration: 2,
    },
  ];

  return (
    <div className="course-wrapper">
      {/* 
        использовать метод перебора массива (map) и отобразить три карточки
        с информацией о курсах
    */}
          {courses.map()}
      <div className="course">
              <h2>Название Курса: {courses[0].name}</h2>
        <h3>Продолжительность курса: </h3>
      </div>
    </div>
  );
};

export default HomePage;

// rsc - стартовая разметка
