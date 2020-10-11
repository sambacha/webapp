import React, { Component } from "react";
import "./patterns.scss";

class Header extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="bx--row pattern-description">
        <div className="bx--col-xs-12">
          <h1 className="pattern-title">{title}</h1>
          <div
            data-notification
            className="bx--inline-notification bx--inline-notification--info"
            role="alert"
          >
            <div className="bx--inline-notification__details">
              <div className="bx--inline-notification__text-wrapper">
                <p className="bx--inline-notification__title">{""}</p>
                <p className="bx--inline-notification__subtitle">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
