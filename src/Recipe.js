import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div className = {style.recipe}>
            <h1 >{title}</h1>
            <p>
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text};
                    </li>
                ))}
            </p>
            <p>{calories}</p>
            <img src={image} alt="" className = {style.image}>


            </img>
        </div>
    )
}

export default Recipe;