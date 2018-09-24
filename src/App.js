import React, { Component } from 'react';
import './App.css';
import JSONView from './component/json/jsonview';
class App extends Component {
  state = {
    brandClass: 'brandRed',
    brandClasses: ['brandRed', 'brandYellow', 'brandGreen', 'brandBlue', 'brandOrange', 'brandViolet', 'brandCyan'],
    colorCount: 0
  }
  componentDidMount() {
    this.timerBrand();
  }
  render() {
    return (
      <div className="App">
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand"><a className={"brandHue "+this.getBrandClass()} href="http://hudroid.com">HueDROID</a>Lint</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#JSON">JSON <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#JS">JS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#Lint">Lint</a>
              </li>
            </ul>
          </div>
        </nav>
        <JSONView className="tab"/>
      </div>
    );
  }

  getBrandClass() {
    const brandColor = this.state.brandClass;
    return brandColor;
  }
  
  timerBrand() {
    setTimeout(() => {
      this.changeBrandColor();
    }, 500);
  }

  changeBrandColor() {
    let {colorCount, brandClasses} = this.state;
    colorCount = colorCount + 1 === 7 ? 0 : colorCount + 1;
    let brandClass = brandClasses[colorCount];
    this.setState({
      brandClass,
      colorCount 
    });
    this.timerBrand();
  }
}

export default App;
