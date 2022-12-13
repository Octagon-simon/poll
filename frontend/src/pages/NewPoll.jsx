import React from "react";

export default function NewPoll(){

    return (
        <>
            <div className="container p-3">
                <section className="form-section">
                    <h4 className="title is-4 has-text-centereds">Create a new poll</h4>
                    <form>
                        <div className="field">
                            <label className="label">Enter Poll Title</label>
                            <input name="poll_title" type="text" className="input" placeholder="Voting for the best language" />
                        </div>
                        <div className="field">
                            <label className="label">Enter Number of Options</label>
                            <input type="number" className="input" placeholder="Number of options" range="1-5" octavalidate="R,DIGITS" />
                        </div>
                        <section id="poll_names" className="mb-2 mt-2" style={{padding: "10px",backgroundColor: "#f7f7f7"}}>
                            <div className="field">
                                <label className="label">Option Number 1</label>
                                <input type="number" className="input" placeholder="Number of options" range="1-5" octavalidate="R,DIGITS" />
                            </div>
                        </section>
                        <div className="field">
                            <label className="label">Poll Description</label>
                            <textarea className="textarea" name="poll_desc" placeholder="Enter a brief description of this poll"></textarea>
                        </div>
                        <div className="field">
                            <button className="button is-app-primary">Create poll</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}