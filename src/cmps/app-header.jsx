import { MdMenu } from "react-icons/md";
export function AppHeader() {
    return <header className="app-header">
        <a href="">
            <svg width="100" height="24" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --> */}

                <g>
                    <title>background</title>
                    <rect fill="none" id="canvas_background" height="15" width="100" y="-1" x="-1" />
                    <g display="none" overflow='visible' y="0" x="0" height="100%" width="100%" id="canvasGrid">
                        <rect fill="url(#gridpattern)" stroke-width="0" y="2" x="2" height="36" width="164" />
                    </g>
                </g>
                <g>
                    <title>Layer 1</title>
                    <g stroke="null" id="svg_5">
                        <path stroke="null" id="svg_4" fill="#000" d="m0.33333,2.84514a2.83227,5.1168 0 0 0 2.04391,3.65562l3.19141,0l0.16351,0.11606l0,14.54857l1.99134,0l0,-14.52749l0.18104,-0.11606l3.19434,0a2.86731,5.1801 0 0 0 2.0439,-3.65559l0,-0.03694l-12.80944,0l0,0.01583zm69.67086,-0.02109l-1.98551,0l0,18.38354l9.09245,0a2.82643,5.10625 0 0 0 1.73441,-3.61868l-8.84721,0l0.00586,-14.76486zm-15.27965,3.61868c1.057,-0.52752 1.94464,-2.01507 2.15779,-3.62922l-11.12468,0.03163l0,10.84024l9.10121,0l0,3.81385l-7.14199,0a3.97101,7.17407 0 0 0 -2.54319,3.69254l11.64734,0l0,-11.11452l-9.0983,0l0,-3.63451l7.00182,0zm33.92006,14.75432l1.97383,0l0,-7.39562l7.17702,0l0,7.39562l1.97089,0l0,-11.08815l-11.12175,-0.02111l0,11.10927zm-63.39023,-14.71212l7.59164,0a2.79431,5.04822 0 0 0 2.0585,-3.69254l-11.70864,0a2.80599,5.06932 0 0 0 2.0585,3.69254zm0,7.26373l7.59164,0a2.80015,5.05877 0 0 0 2.0585,-3.69251l-11.70864,0a2.81183,5.07987 0 0 0 2.0585,3.69251zm0,7.45893l7.59164,0a2.80015,5.05877 0 0 0 2.0585,-3.69254l-11.70864,0a2.80891,5.0746 0 0 0 2.0585,3.69254zm65.14507,-14.71212l7.59164,0a2.79723,5.0535 0 0 0 2.06142,-3.69254l-11.71156,0a2.80015,5.05877 0 0 0 2.0585,3.69254z" class="tds-icon-fill--primary" />
                    </g>
                </g>
            </svg>
            {/* <img src={`${require(`../assets/img/logo}.svg`)}`} alt="" /> */}
        </a>

        <nav>
            <p><a href="#">Model S</a></p>
            <p><a href="#">Model 3</a></p>
            <p><a href="#">Model X</a></p>
            <p><a href="#">Model Y</a></p>
        </nav>
        <div className="shop-menu">
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <MdMenu/>
            {/* <a href="#">Shop</a> */}
        </div>
    </header>
}