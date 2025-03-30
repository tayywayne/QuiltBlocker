import React from "react";
import "./star.css";

function Star({ colors }) {

    if (!colors || colors.length < 3) {
        return null;
      }
    

    const style = {
        '--star-color-1': colors[0],
        '--star-color-2': colors[1],
        '--star-color-3': colors[2],
    };

    return (
        <div className="star" style={style}>
            <div className="star-block">
                <div className="star-block-1"/>
                <div className="star-block-2"/>
                <div className="star-block-3"/>
                <div className="star-block-4"/>
            </div>
            <div className="star-block rotate-1">
            <div className="star-block-1"/>
                    <div className="star-block-2"/>
                    <div className="star-block-3"/>
                    <div className="star-block-4"/>
            </div>
            <div className="star-block rotate-3">
            <div className="star-block-1"/>
                    <div className="star-block-2"/>
                    <div className="star-block-3"/>
                    <div className="star-block-4"/>
            </div>
            <div className="star-block rotate-2">
            <div className="star-block-1"/>
                    <div className="star-block-2"/>
                    <div className="star-block-3"/>
                    <div className="star-block-4"/>
            </div>
        </div>
    )
}
export default Star;