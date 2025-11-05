import React from 'react'
import CardComponent from '../components/CardComponent';

const CardsPage = () => {
  return (
    <div>
        <div className="row g-4">
            <div className="col-md-4">
            <CardComponent
            title="Лягушечка 1"
            imageUrl = {`${process.env.PUBLIC_URL}/images/1.jpg`}
            desctiption="Это самая крутая лягушечка номер 1"
            imageAlt="Лягушечка 1"/>
          </div>
          
          <div className="col-md-4">
            <CardComponent
            title="Лягушечка 2"
            imageUrl = {`${process.env.PUBLIC_URL}/images/2.jpg`}
            desctiption="Это самая крутая лягушечка номер 2 Это самая крутая лягушечка номер 2 Это самая крутая лягушечка номер 2 Это самая крутая лягушечка номер 2"
            imageAlt="Лягушечка 2"/>
          </div>

            <div className="col-md-4">
            <CardComponent
            title="Лягушечка 3"
            imageUrl = {`${process.env.PUBLIC_URL}/images/3.jpg`}
            desctiption="Это самая крутая лягушечка номер 3"
            imageAlt="Лягушечка 3"/>
          </div>
        </div>
    </div>
  );
};

export default CardsPage;