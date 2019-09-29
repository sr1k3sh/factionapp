import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-icon">
                    <h1>CO<sub>2</sub></h1>
                </div>
                <div className="tags">
                    <ul>
                        <li>news</li>
                        <li>products</li>
                        <li>collection</li>
                        <li>about</li>
                        <li>join</li>
                    </ul>
                </div>
                <div className="tags">
                    <ul>
                        <li>news</li>
                        <li>products</li>
                        <li>collection</li>
                        <li>about</li>
                        <li>join</li>
                    </ul>
                </div>
                <div className="tags">
                    <ul>
                        <li>news</li>
                        <li>products</li>
                        <li>collection</li>
                        <li>about</li>
                        <li>join</li>
                    </ul>
                </div>
                <div className="footer-4">
                    <div className="f-header">
                        <span>stay in the know,yo!</span>
                    </div>
                    <div className="f-subscribe">
                        <input type="text" placeholder="Your Email"></input>
                        <span>subscribe</span>
                    </div>
                </div>
                

            </div>
        )
    }
}
