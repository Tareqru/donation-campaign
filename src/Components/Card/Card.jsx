import React from 'react';

const Card = ({donation}) => {
const {img,title,category,color_card_bg,color_text,color_button}=donation

    return (
        <div>
            <div style={{backgroundColor:color_card_bg}} className="card  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
  <p className="w-28 text-center p-2 rounded-sm" style={{color:color_text,backgroundColor:color_button}}>{category}</p>
    <h2 style={{color:color_text}} className="card-title">{title}</h2>
    
   
  </div>
</div>
        </div>
    );
};

export default Card;
