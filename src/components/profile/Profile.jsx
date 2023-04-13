import React from 'react'
import './profile.css';
import img from './ranbir-kapoor-profile.jpg'
import Price_button from '../price_button/Price_button';

const Profile = () => {
    return (
        <>
            <div className="profile-flex">
                <div className="profile-left">
                    <img src={img} alt="" />
                </div>
                <div className="profile-right">
                    <h2 className='celeb-name'>Ranbir Kapoor</h2>
                    <h3>(CELEBRITY APPEARANCE)</h3>
                    <b>Mumbai, Maharashtra</b>

                    <Price_button />

                    <p>
                        The 'ROCKSTAR' who is a heart throb of millions, Ranbir Kapoor is one of the finest actors in Bollywood and is a true versatile performer
                    </p>
                </div>
            </div>
        </>
    )
}

export default Profile