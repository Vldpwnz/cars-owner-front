import React from 'react';

import axios from 'axios';

export default class Cars extends React.Component {
  state = {
    cars: []
  }

  componentDidMount() {
    axios.get(`/cars`)
      .then(res => {
        const cars = res.data;
        this.setState({ cars });
      })
  }

  render() {
    return (
      <ul>
        { this.state.cars.map(car => <li>{car.numberPlate}</li>)}
      </ul>
    )
  }
}