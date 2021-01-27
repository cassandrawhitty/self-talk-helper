import React from 'react'

export default function Journal() {
    return (
        <div className="journal">
            <div className="journal-titles">
                <div className="journal-date">
                    <p><b>Date:</b></p>
                </div>
                <div className="journal-unrealistic-thought">
                    <p><b>Unrealistic Thoughts:</b></p>
                </div>
                <div className="journal-cognitive-distortions">
                    <p><b>Cognitive Distortions:</b></p>
                </div>
                <div className="journal-realistic-reframe">
                    <p><b>Realistic Reframes:</b></p>
                </div>
            </div>
            <div className="journal-entries">
                <section className="journal-date">
                    <p><i>Example: 1/26/21</i></p>
                </section>
                <section className="journal-unrealistic-thought">
                    <p><i>Example: I will always fail and I can't do anything right.</i></p>
                </section>
                <section className="journal-cognitive-distortions">
                    <p><i>Example: All or Nothing Thinking, Jumping to Conclusions - Future Telling, Overgeneralization</i></p>
                </section>
                <section className="journal-realistic-reframe">
                    <p><i>Example: Sometimes I will fail, and sometimes I will succeed. 
                        Most times it'll be a mix of both. There is no "right" way 
                        to do things, and any way that things happen is acceptable. The 
                        goal is to find the way that works for me. </i></p>
                </section>
            </div>
        </div>
    )
}
