import React from "react";
import { connect } from "react-redux";
import Chart from "../components/charts";

class WeatherList extends React.Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => {
            console.log("weather", weather);
            return weather.main.temp;
        });
        console.log("temps", temps);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temperature </th>
                        <th> Pressure </th>
                        <th> Humidity </th>
                    </tr>
                </thead>
                <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    console.log(weather);
    return {
        weather
    };
}

export default connect(mapStateToProps)(WeatherList);
