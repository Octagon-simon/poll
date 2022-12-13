import React from "react";

export default function Home(){

    return(
        <>
            <div className="container p-3">
                <section className="polls-section">
                    <div className="single-poll">
                        <div className="single-poll-head">
                            <div>
                                <h5>Poll ID: XXXXXX</h5>
                            </div>
                            <div>
                                <button className="poll-copy-btn">Copy</button>
                            </div>
                        </div>
                    <div className="single-poll-body">
                        <p>Some description here</p>
                    </div>
                    </div>
                </section>
            </div>
        </>
    )
}