import React from "react";
import './railfence.css';

function RailFence({ colors }) {
    if (!colors || colors.length < 4) {
        return null; 
      }
    const style = {
        '--railfence-color-1': colors[0],
        '--railfence-color-2': colors[1],
        '--railfence-color-3': colors[2],
        '--railfence-color-4': colors[3],
    };
    

    return (
        <div className="railfence" style={style}>
            <div className="railfence-block">
                <div className="railfence-roll railfence-color-1"></div>
                <div className="railfence-roll railfence-color-2"></div>
                <div className="railfence-roll railfence-color-3"></div>
                <div className="railfence-roll railfence-color-4"></div>
            </div>
            <div className="railfence-block rrotate-1">
                <div className="railfence-roll railfence-color-1"></div>
                <div className="railfence-roll railfence-color-2"></div>
                <div className="railfence-roll railfence-color-3"></div>
                <div className="railfence-roll railfence-color-4"></div>
            </div>
            <div className="railfence-block rrotate-2">
                <div className="railfence-roll railfence-color-1"></div>
                <div className="railfence-roll railfence-color-2"></div>
                <div className="railfence-roll railfence-color-3"></div>
                <div className="railfence-roll railfence-color-4"></div>
            </div>
            <div className="railfence-block rrotate-3">
                <div className="railfence-roll railfence-color-1"></div>
                <div className="railfence-roll railfence-color-2"></div>
                <div className="railfence-roll railfence-color-3"></div>
                <div className="railfence-roll railfence-color-4"></div>
            </div>
        </div>
    )
}
export default RailFence;