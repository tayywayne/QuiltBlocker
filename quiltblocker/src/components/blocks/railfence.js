import React from "react";
import './railfence.css';

function RailFence({colors}) {
    const colorArray = typeof colors === 'string'
    ? colors.split(',')
    : Array.isArray(colors)
    ? colors
    : ['#ffffff', '#ffffff', '#ffffff', '#ffffff']; // Fallback

    const [color1, color2, color3, color4] = colorArray;
    return (
        <div className="railfence">
            <div className="railfence-block">
                <div style={{ backgroundColor: colorArray[0] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[1] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[2] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[3] }} className="railfence-roll"></div>
            </div>
            <div className="railfence-block rrotate-1">
                <div style={{ backgroundColor: colorArray[0] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[1] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[2] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[3] }} className="railfence-roll"></div>
            </div>
            <div className="railfence-block rrotate-2">
                <div style={{ backgroundColor: colorArray[0] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[1] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[2] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[3] }} className="railfence-roll"></div>
            </div>
            <div className="railfence-block rrotate-3">
                <div style={{ backgroundColor: colorArray[0] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[1] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[2] }} className="railfence-roll"></div>
                <div style={{ backgroundColor: colorArray[3] }} className="railfence-roll"></div>
            </div>
        </div>
    )
}
export default RailFence;