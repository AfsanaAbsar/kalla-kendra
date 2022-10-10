import React from 'react';
import Header from '../../Header/Header';
import './BAnner.css'
import speaker from '../../../images/speaker 1.png'
import guiterist from '../../../images/guitarist 1.png'
import painter from '../../../images/Painter 1.png'
import photographer from '../../../images/photographer 1.png'
import singer from '../../../images/Singer 1.png'

const Banner = () => {
    return (
        <div className='grad'>
            <Header></Header>

            <div className='banner-area'>
                <div className='banner-desc'>

                    <h1 className='banner-title'>Welcome ! To Kalla Kendra</h1>
                    <button>World Of Artists</button>

                </div>


                <div className='image-area'>
                    <img src={speaker} alt="" />
                    <img src={guiterist} alt="" />
                    <img src={painter} alt="" />
                    <img src={photographer} alt="" />
                    <img src={singer} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;