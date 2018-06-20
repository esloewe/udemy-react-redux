import React from "react";

export default class GoogleMap extends React.Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            //this is how to create an embeded google map
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div className="maps" ref="maps" />; //we refer to the ref in react as this.refs.map
    }
}
