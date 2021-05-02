import React, { useState } from 'react';
import MainImage from './main-image'
import SlideImage from './slide-image'

function index({  }) {

  const images = [
    "https://source.unsplash.com/l8p1aWZqHvE/1600x900",
    "https://source.unsplash.com/164_6wVEHfI/1600x900",
    "https://source.unsplash.com/ZjViL8qxihM/1600x900",
    "https://source.unsplash.com/DMl5gG0yWWY/1600x900",
    "https://source.unsplash.com/ytpT9C8fuGI/1600x900"
  ] 

    
  const [ imageIndicator, setImageIndicator ] = useState(0)

  return (
    <div>
      <MainImage image={images[imageIndicator]}/>
      <SlideImage images={images} onSetImageIndicator={setImageIndicator}/>
    </div>
  );
}
export default index;
