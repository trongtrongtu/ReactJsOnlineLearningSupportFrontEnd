import React, { Component } from 'react';
import './createGroup.css';
import './createGroupJS.js';
export default class createGroup extends Component {
     render() {
          return (
               <form>
        <label>
          <p className="label-txt">ENTER YOUR ROOM</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
        <label>
          <p className="label-txt">ENTER YOUR PASSWORD</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
        <label>
          <p className="label-txt">ENTER YOUR PASSWORD</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
        <button type="submit">submit</button>
      </form>
          )
     }
}
