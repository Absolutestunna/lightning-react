import React, { Component } from 'react';
import DemoComponentHeader from './DemoComponentHeader';

export default class DemoComponent extends Component {
  render(){
    return (
        <div>
            <DemoComponentHeader />
            <div className="container">
                <p>A simple React Webpack 2.0 babel kit with bootstrap framework</p>
            </div>
        </div>
    );
  }
};
