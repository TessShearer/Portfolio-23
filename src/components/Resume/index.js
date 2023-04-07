import React from 'react';

function Resume() {

    return (
        <section>

            <div className="spacing"></div>
            <h1 className="text-center heading" id="resume">Work Experience</h1>
            <h2 className="text-center px-5 pb-3" id="res-head">For a complete list of my work experience, view my resume <a href="https://docs.google.com/document/d/1cPAy4oZDZhUQFDtP1rWeMZDcJC1DXWYmMzfjrPSDPZ4/edit?usp=sharing">here</a></h2>

            <div className="work-ex">
                <div className="row my-3">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h2>Software Developer</h2>
                        <h3>Utah Valley University
                        Dec 2022 - Present</h3>
                        I am a full stack developer as a part of UVU's AIS (Advanced Integration Systems) team. I develop full stack applications along with other developers on the team, as well as update existing applications to be more modern or contain new features.
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row my-3">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h2>Co-Owner</h2>
                        <h3>Cory's Karate, LLC
                        Jan 2020 - Present (3 yrs)</h3>
                        I co-own a karate school with approximately 40 students in Springville, Utah. The school offers classes 2-3 days a week and I oversee multiple talented instructors teaching classes. I also modify the website and update the calendar.
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row my-3">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h2>Research Assistant</h2>
                        <h3>Brigham Young University
                        Feb 2020 - Apr 2021 (1 yr 3 mos)</h3>
                        Our research group studied language samples from elementary aged children to better identify language disorders at a young age. This involved heavy data recording and analysis.
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>

        </section>
    );
}

export default Resume;