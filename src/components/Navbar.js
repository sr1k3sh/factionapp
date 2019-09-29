import React, { Component } from 'react'
import './navbar.css'
import $ from 'jquery'
export default class Navbar extends Component {
    componentDidMount(){
        $(window).scroll(function () {
            if ($(window).scrollTop() > $(window).height()) {
                $(".navbar-container").css({ "background-color": "#a2a5acdb"});
                $('.navbar-container .icon h1').css({'background-color':'transparent','border':'2px solid #fff'})
            }
            else {
                $('.navbar-container .icon h1').css({ 'background-color': '#000', 'border': 'none' })
                $(".navbar-container").css({ "background-color": "transparent" });
            }

        })
    }
    render() {
        return (
            <div className="navbar-container">
                <div className="icon">
                    <h1>co<sub>2</sub></h1>
                </div>
                <div className="menu">
                    <span>news</span>
                    <span>products</span>
                    <span>collections</span>
                    <span>about</span>
                    <span>game</span>
                </div>
            </div>
        )
    }
}
