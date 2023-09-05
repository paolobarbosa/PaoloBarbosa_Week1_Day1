import React, { Component, useState } from 'react';
import './AppD1.css';

class AppD1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Paolo Barbosa',
      age: 23,
      city: 'Makati City',
      items: [
        { id: 1, Ling: 'Item Sword' },
        { id: 2, Hayabusa: 'Item Kunai' },
        { id: 3, Lancelot: 'Item Lance' },
      ],
    };
  }

  render() {
    return (
      <div className="AppD1">
        <h1>Week1 Day1</h1>
        <h2>Person Information</h2>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>City: {this.state.city}</p>

        <h2>Array Objects Mobile Legends</h2>
        <table className="grid-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ling</th>
              <th>Hayabusa</th>
              <th>Lancelot</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Ling}</td>
                <td>{item.Hayabusa}</td>
                <td>{item.Lancelot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AppD1;
