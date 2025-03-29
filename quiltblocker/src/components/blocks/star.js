import React from "react";
import "./star.css";

function Star({ colors }) {
    const colorArray = typeof colors === "string"
        ? colors.split(",")
        : Array.isArray(colors)
            ? colors
            : ["#ffffff", "#ffffff", "#ffffff"]; // Fallback
    const [color1, color2, color3] = colorArray;
    // console.log("Colors:", color1, color2, color3);

    return (
        <div className="star">
            <div className="star-block">
                <div style={{ backgroundColor: color1 }} className="star-block-1" >
                    
                </div>
                <div 
                    style={{ 
                        background: `linear-gradient(45deg, ${color2} 50%, ${color1} 50%)`,
                        width: '25px',
                        height: '25px'
                    }} 
                    className="star-block-2" 
                    />
                <div style={{ 
                        background: `linear-gradient(45deg, ${color1} 50%, ${color2} 50%)`,
                        width: '25px',
                        height: '25px'
                    }} className="star-block-3"></div>
                <div style={{ 
                        background: `linear-gradient(135deg, ${color2} 50%, ${color3} 50%)`,
                        width: '25px',
                        height: '25px'
                    }} className="star-block-4"></div>
            </div>
            <div className="star-block rotate-1">
            <div style={{ backgroundColor: color1 }} className="star-block-1" >
                    
                    </div>
                    <div 
                        style={{ 
                            background: `linear-gradient(45deg, ${color2} 50%, ${color1} 50%)`,
                            width: '25px',
                            height: '25px'
                        }} 
                        className="star-block-2" 
                        />
                    <div style={{ 
                            background: `linear-gradient(45deg, ${color1} 50%, ${color2} 50%)`,
                            width: '25px',
                            height: '25px'
                        }} className="star-block-3"></div>
                    <div style={{ 
                            background: `linear-gradient(135deg, ${color2} 50%, ${color3} 50%)`,
                            width: '25px',
                            height: '25px'
                        }} className="star-block-4"></div>
            </div>
            <div className="star-block rotate-3">
            <div style={{ backgroundColor: color1 }} className="star-block-1" >
                    
                    </div>
                    <div 
                        style={{ 
                            background: `linear-gradient(45deg, ${color2} 50%, ${color1} 50%)`,
                            width: '25px',
                            height: '25px'
                        }} 
                        className="star-block-2" 
                        />
                    <div style={{ 
                            background: `linear-gradient(45deg, ${color1} 50%, ${color2} 50%)`,
                            width: '25px',
                            height: '25px'
                        }} className="star-block-3"></div>
                    <div style={{ 
                            background: `linear-gradient(135deg, ${color2} 50%, ${color3} 50%)`,
                            width: '25px',
                            height: '25px'
                        }} className="star-block-4"></div>
            </div>
            <div className="star-block rotate-2">
            <div style={{ backgroundColor: color1 }} className="star-block-1" >
                    
                    </div>
                    <div 
                        style={{ 
                            background: `linear-gradient(45deg, ${color2} 50%, ${color1} 50%)`,
                            width: '25px',
                            height: '25px'
                        }} 
                        className="star-block-2" 
                        />
                    <div style={{ 
                            background: `linear-gradient(45deg, ${color1} 50%, ${color2} 50%)`,
                            width: '25px',
                            height: '25px'
                        }} className="star-block-3"></div>
                    <div style={{ 
                            background: `linear-gradient(135deg, ${color2} 50%, ${color3} 50%)`,
                            width: '25px',
                            height: '25px'
                        }} className="star-block-4"></div>
            </div>
        </div>
    )
}
export default Star;