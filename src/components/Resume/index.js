import React from 'react';

function Resume() {

    return (
        <section>

            <div className="spacing"></div>
            <h1 className="text-center heading" id="resume">Work Experience</h1>
            <h2 className="text-center px-5 pb-3" id="res-head">For a complete list of my work experience, view my resume <a href="https://docs.google.com/document/d/e/2PACX-1vRnoMNg3ZXRAEBTEAL2KTEgrAg-Gj-pp4UkaTWyc938lqlRlzxpziNfSax-aTIb5GoEvhN0E6lNINlL/pub">here</a></h2>

            <div className="work-ex">
                <div className="row my-3">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h2>Software Developer</h2>
                        <h3>Utah Valley University
                            Dec 2022 - Present</h3>
                        I am a full stack developer as a part of UVU's SDSI (Software Development and Systems Integration) team. I develop full stack applications along with other developers on the team, as well as update existing applications to be more modern or contain new features. Our Development stack prioritizes Vue and Python, and also utlizes Git, php, React, MySQL, NoSQL, typescript, Docker, etc.
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row my-3">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h2>Co-Owner and Front End Developer</h2>
                        <h3>Cory's Karate, LLC
                            Jan 2020 - Dec 2022 (3 yrs)</h3>
                        Front End Developer and Martial Arts Business Co-Owner Location — Cory’s Karate
                        Springville, UT - 2020-2023

                        Created the current website for Cory’s Karate School of Tan Ren Do Karate, including a publicly available section, student only access pages, and admin pages where business owners can update the material, class schedules, and events. This was primarily created using Vue.js, Vite, and AWS. The current visitor site can be found live at: coryskarate.com
                        Operated Cory’s Karate School of Tan Ren Do Karate as Head Instructor and co-owner for a period of 3 years. During this time I ran weekly classes, bi-yearly tournaments, and community events for the school. The school consisted of approximately 40 students during my ownership. This was always intended as a transitory period while the new (now current) owners of Cory’s Karate trained and prepared to purchase the business.
                    </div>
                    <div className="col-2"></div>
                </div>
                {/* <div className="row my-3">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h2>Research Assistant</h2>
                        <h3>Brigham Young University
                            Feb 2020 - Apr 2021 (1 yr 3 mos)</h3>
                        Our research group studied language samples from elementary aged children to better identify language disorders at a young age. This involved data recording and analysis.
                    </div>
                    <div className="col-2"></div>
                </div> */}
            </div>

        </section>
    );
}

export default Resume;