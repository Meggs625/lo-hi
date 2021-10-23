import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';


const RecipeCard = ({ id, category, title, /* img */ }) => {

    return (
        <Link to= {`/${ category }/${ id }`} >
            <section className='recipe-card-container'>
                <div className='recipe-card-main-img-container'>
                    {/* <img className='recipe-card-main-img' src=`images/${ title }.png` alt={ title }/> */}
                    <img className='recipe-card-main-img' src='https://cdn.leitesculinaria.com/wp-content/uploads/2016/01/five-minute-artisan-bread-recipe.jpg.webp' alt={ title }/>
                    <h3 className='recipe-card-title'>{ title }</h3>
                    {/* <Link className='links'>'{ props.title }'</Link> */}
                </div>
            </section>
        </Link> 
    )
}

export default RecipeCard;