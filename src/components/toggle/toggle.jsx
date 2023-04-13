import React, { useState } from "react";
import './toggle.css';
import PostReviewStarRating from '../star/Star.js';


function ClickToShow() {
    const [isVisible0, setIsVisible0] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    const handleClick0 = () => {
        setIsVisible0(!isVisible0);
    };
    const handleClick1 = () => {
        setIsVisible1(!isVisible1);
    };
    const handleClick2 = () => {
        setIsVisible2(!isVisible2);
    };
    const handleClick3 = () => {
        setIsVisible3(!isVisible3);
    };


    return (
        <div className="toggle-main">

            {/* Biography */}
            <div>
                <button className="bio" onClick={handleClick0}>
                    <div className="toggle-bio-icon">
                        <img src="https://stcdn.starclinch.in/mobile/images/profile/biography_icon.svg" alt="" />
                        <span className="bio-line">
                            Biography
                        </span>
                    </div>
                </button>
                {isVisible0 &&
                    <p className="bio-content">
                        Ranbir Kapoor is a Bollywood Superstar. A recipient of several accolades including five FILMFARE AWARDS, he is one of the most popular and highest paid celebrities in India. He is the grandson of well acclaimed Actor-Director Raj Kapoor and the son of actors Neetu Kapoor & Rishi Kapoor. At the LEE STRASBERG and THEATER AND FILM INSTITUTE & SCHOOL OF VISUAL ARTS, Ranbir pursued film-making and method acting respectively, following which he assisted SANJAY LEELA BHANSALI on the film BLACK (2005).   Ranbir Kapoor kick-started his acting debut with Bhansali's Tragic-Romance SAAWARIYA (2007), a performance so ecstatic that he bagged a Filmfare Award for THE BEST MALE DEBUT   3 hit flicks, namely Ajab Prem Ki Ghazab Kahani, Rocket Singh-Salesman Of The Year & Wake Up Sid earned him 3 Filmfare Critics Awards for Best Actor Ranbir Kapoor’s award winning spree was extended with 2 BEST ACTOR awards at FILMFARE with stellar performances in ROCKSTAR (Drama, 2011) and BARFI (Drama-Comedy, 2012), where he played a troubled musician and a deaf-mute man respectively   He further proved his versatile acting skills by engaging the audiences in films like BOMBAY TALKIES (Appearance), YEH JAWAANI HAI DIWANI (RomanticComedy,2013) & RAJNEETI (Drama, 2010)   Films aside, Kapoor is a stern supporter of charitable causes and initiatives. He happens to be the Co-Owner of the INDIAN SUPER LEAGUE football team, MUMBAI CITY FC and the Co-Founder of  Picture Shuru Productions
                    </p>
                }
            </div>

            {/* Performance Details */}
            <div>
                <button className="bio" onClick={handleClick1}>
                    <div className="toggle-bio-icon">
                        <img src="https://stcdn.starclinch.in/mobile/images/profile/Performance_Details.svg" alt="" />
                        <span className="bio-line">
                            Performance Details
                        </span>
                    </div>
                </button>
                {isVisible1 &&
                    <p className="bio-content">
                        <div className="toggle-flex">
                            <div className="off-stage-member">
                                <div className="off-stage-icon">
                                    <img src="https://stcdn.starclinch.in/mobile/images/profile/offstage_members_new.svg" alt="" />
                                </div>
                                <div className="off-stage-number">4</div>
                                <div className="off-stage-line">Off Stage Members</div>
                            </div>
                            <div className="off-stage-member red">
                                <div className="off-stage-icon">
                                    <img src="https://stcdn.starclinch.in/mobile/images/profile/performing_members_new.svg" alt="" />
                                </div>
                                <div className="off-stage-number">1</div>
                                <div className="off-stage-line">Performing Members</div>
                            </div>
                            <div className="off-stage-member purple">
                                <div className="off-stage-icon">
                                    <img src="https://stcdn.starclinch.in/mobile/images/profile/performance_min_duration_new.svg" alt="" />
                                </div>
                                <div className="off-stage-number">60 - 120 Min</div>
                                <div className="off-stage-line">Performance Duration</div>
                            </div>
                            <div className="off-stage-member yellow">
                                <div className="off-stage-icon">
                                    <img src="https://stcdn.starclinch.in/mobile/images/profile/can_travel_new.svg" alt="" />
                                </div>
                                <div className="off-stage-number">Can Travel</div>
                                <div className="off-stage-line">Nationwide</div>
                            </div>
                        </div>
                    </p>
                }
            </div>

            {/*  Language */}
            <div>
                <button className="bio" onClick={handleClick2}>
                    <div className="toggle-bio-icon">
                        <img src="https://stcdn.starclinch.in/mobile/images/profile/performance_language_v2.svg" alt="" />
                        <span className="bio-line">
                            Performance Language
                        </span>
                    </div>
                </button>
                {isVisible2 &&
                    <p className="bio-content">
                        <div className="toggle-flex language">
                            <div className="off-stage-icon">
                                <img src="https://starclinch.com/static/mobile/images/language_icons/English.svg" alt="" />
                                <p>English</p>
                            </div>

                            <div className="off-stage-icon">
                                <img src="https://starclinch.com/static/mobile/images/language_icons/Hindi.svg" alt="" />
                                <p>Hindi</p>
                            </div>
                        </div>
                    </p>
                }
            </div>

            {/* Review */}
            <div>
                <button className="bio" onClick={handleClick3}>
                    <div className="toggle-bio-icon">
                        <img src="https://starclinch.com/static/mobile/images/profile/review_icon.svg" alt="" />
                        <span className="bio-line">
                            Review
                        </span>
                    </div>
                </button>
                {isVisible3 &&
                    <p className="bio-content">
                        <div className="review-content">
                            <div className="reviews">0 Reviews</div>
                            <h2>Post a review</h2>

                            <PostReviewStarRating />
                            <form>
                                <label>
                                    <input className="postarea" placeholder="Review" type="textarea" name="textValue" />
                                </label>
                                <input className="post-btn" type="submit" value="POST" />
                            </form>
                        </div>
                    </p>
                }
            </div>

        </div>
    );
}

export default ClickToShow;
