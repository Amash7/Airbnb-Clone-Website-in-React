import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <div>
        <section className='main'>
            <div className='image-container'>
               <img src={require('../images/one.jpg')} alt="center image1" />
               <img src={require('../images/two.jpg')} alt="center image2" />
               <img src={require('../images/three.jpg')} alt="center image3" />
            </div>
            <div className='text'>
                <h1>Online Experiences</h1>
                <p>
                   Join unique interactive activities led by <br />
                   one-of-a-kind hosts-all without <br />
                   leaving home.
                </p>
            </div>
        </section>
    </div>
  )
}
