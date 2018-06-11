import React from "react";

export default class SearchBar extends React.Component {
    render() {
        return (
            <form className="input-group">
                <input />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}
