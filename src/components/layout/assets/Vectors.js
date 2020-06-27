const encodeSvg = (source) => {
    return 'data:image/svg+xml;base64,' + window.btoa(source);
}

const Vectors = {
    // Header
    transform: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:10;">
    <g id="transform" transform="matrix(0.463655,0,0,0.463655,-2.73853,-2.64484)">
        <g transform="matrix(2.15678,-0,-0,2.15678,5.9064,5.70433)">
            <path d="M9.5,20.34L12.5,23.34L15.5,20.34" style="fill:none;stroke:rgb(112,112,112);stroke-width:2px;"/>
            <path d="M9.5,4.66L12.5,1.66L15.5,4.66" style="fill:none;stroke:rgb(112,112,112);stroke-width:2px;"/>
            <path d="M12.5,23.34L12.5,1.66" style="fill:none;stroke:rgb(112,112,112);stroke-width:2px;stroke-linejoin:round;stroke-miterlimit:1.5;"/>
        </g>
        <g transform="matrix(6.12323e-17,1,-1,6.12323e-17,65.5301,-0.202071)">
            <g transform="matrix(1.32064e-16,-2.15678,2.15678,1.32064e-16,5.9064,59.6237)">
                <path d="M4.66,9.5L1.66,12.5L4.66,15.5" style="fill:none;stroke:rgb(112,112,112);stroke-width:2px;"/>
                <path d="M20.34,9.5L23.34,12.5L20.34,15.5" style="fill:none;stroke:rgb(112,112,112);stroke-width:2px;"/>
                <path d="M1.66,12.5L23.34,12.5" style="fill:none;stroke:rgb(112,112,112);stroke-width:2px;stroke-linejoin:round;stroke-miterlimit:1.5;"/>
            </g>
        </g>
    </g>
</svg>`),
    selection:  encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(0.390625,0,0,0.416032,-0.0405135,0.734505)">
        <rect x="7.072" y="4.837" width="50.063" height="46.887" style="fill:none;stroke:rgb(112,112,112);stroke-width:4.96px;stroke-dasharray:4.96,9.91,0,0;"/>
    </g>
</svg>`),
    // Bonds
    single: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;">
    <g id="single-bond" serif:id="single bond" transform="matrix(0.390625,0,0,0.390625,-0.0405135,0.112873)">
        <path d="M7.072,56.679L57.135,6.743" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;"/>
    </g>
</svg>`),
    double: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;">
    <g id="double-bond" serif:id="double bond" transform="matrix(0.440933,0,0,0.440933,-0.623126,-1.62628)">
        <g transform="matrix(1,0,0,1,2.60229,6.74968)">
            <path d="M39.197,6.743L7.072,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.21px;"/>
        </g>
        <g transform="matrix(1,0,0,1,10.6531,16.0203)">
            <path d="M39.197,6.743L7.072,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.21px;"/>
        </g>
    </g>
</svg>`),
    triple: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;">
    <g id="triple-bond" serif:id="triple bond" transform="matrix(0.440933,0,0,0.440933,-2.40203,-3.64344)">
        <g transform="matrix(1,0,0,1,2.60229,6.74968)">
            <path d="M39.197,6.743L7.072,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.21px;"/>
        </g>
        <g transform="matrix(1,0,0,1,10.6531,16.0203)">
            <path d="M39.197,6.743L7.072,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.21px;"/>
        </g>
        <g transform="matrix(1,0,0,1,18.7219,25.1698)">
            <path d="M39.197,6.743L7.072,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.21px;"/>
        </g>
    </g>
</svg>
`),
    quadruple: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;">
    <g id="quad-bond" serif:id="quad bond" transform="matrix(0.413176,0,0,0.413176,-3.22015,-4.53224)">
        <g transform="matrix(1,0,0,1,2.60229,6.74968)">
            <path d="M39.197,6.743L7.072,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.36px;"/>
        </g>
        <g transform="matrix(1,0,0,1,19.1722,25.1207)">
            <path d="M39.197,6.743L7.072,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.36px;"/>
        </g>
        <g transform="matrix(1,0,0,1,10.6531,16.0203)">
            <path d="M39.197,6.743L7.072,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.36px;"/>
        </g>
        <g transform="matrix(1,0,0,1,27.223,34.3913)">
            <path d="M39.197,6.743L7.072,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.36px;"/>
        </g>
    </g>
</svg>`),
    forward_plane: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="forward" transform="matrix(0.577553,0,0,0.577553,-6.42482,-2.53462)">
        <path d="M34.754,7.307L51.506,21.295L13.855,43.821L34.754,7.307Z" style="fill:rgb(113,113,113);"/>
    </g>
</svg>`),
    backward_plane: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;">
    <g id="backward" transform="matrix(0.500176,0.288777,-0.288777,0.500176,1.719,-9.67402)">
        <g transform="matrix(0.855567,-0.11473,0.107863,0.80436,3.68378,5.94916)">
            <path d="M28.381,8.62L48.712,15.451" style="fill:none;stroke:rgb(113,113,113);stroke-width:2.02px;"/>
        </g>
        <g transform="matrix(0.90527,-0.154282,0.15815,0.927968,0.973012,6.77602)">
            <path d="M28.381,13.581L44.561,19.098" style="fill:none;stroke:rgb(113,113,113);stroke-width:1.82px;"/>
        </g>
        <g transform="matrix(1.02366,-0.202957,0.217119,1.09509,-4.32001,5.13453)">
            <path d="M40.254,23.095L28.381,18.704" style="fill:none;stroke:rgb(113,113,113);stroke-width:1.56px;"/>
        </g>
        <g transform="matrix(1.3136,-0.111632,0.090232,1.06178,-10.8325,2.43996)">
            <path d="M28.381,23.909L36.269,26.755" style="fill:none;stroke:rgb(113,113,113);stroke-width:1.41px;"/>
        </g>
        <g transform="matrix(1.88655,-0.407968,0.440432,2.03667,-38.1517,-20.8434)">
            <path d="M28.381,30.414L32.203,32.041" style="fill:none;stroke:rgb(113,113,113);stroke-width:0.84px;"/>
        </g>
        <g transform="matrix(4.98544,-1.95365,1.78284,4.54955,-170.429,-70.6013)">
            <path d="M27.487,34.887L28.381,35.537" style="fill:none;stroke:rgb(113,113,113);stroke-width:0.33px;"/>
        </g>
        <g transform="matrix(3.58263,-1.41579,1.19016,3.01166,-111.517,-27.0201)">
            <path d="M27.487,34.887L28.381,35.537" style="fill:none;stroke:rgb(113,113,113);stroke-width:0.48px;"/>
        </g>
        <g transform="matrix(1.48998,-0.737405,0.772714,1.56132,-39.5428,9.27983)">
            <path d="M27.487,34.887L28.381,35.537" style="fill:none;stroke:rgb(113,113,113);stroke-width:0.99px;"/>
        </g>
    </g>
</svg>`),
    unspecified_plane: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="plane-not-specified" serif:id="plane not specified" transform="matrix(0.274838,-0.277582,0.277582,0.274838,-3.68524,12.179)">
        <path d="M2.602,23.583C3.772,27.893 6.113,36.513 8.62,36.513C11.127,36.513 15.139,23.583 17.647,23.583C20.154,23.583 21.171,36.513 23.665,36.513C26.158,36.513 30.102,23.583 32.61,23.583C35.117,23.583 36.215,36.513 38.709,36.513C41.203,36.513 45.079,23.583 47.573,23.583C50.067,23.583 52.47,32.203 53.672,36.513" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;"/>
    </g>
</svg>`),
    dative: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:10;">
    <g transform="matrix(0.425548,-0.425548,0.324365,0.324365,-12.207,14.7858)">
        <g id="dipole">
            <g id="dipole1" serif:id="dipole" transform="matrix(1.17496,1.54147,-1.17496,1.54147,31.7154,-3.97519)">
                <path d="M15.144,4.553L21.773,3.227L20.447,9.856" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;"/>
                <path d="M1.634,23.366C8.347,16.653 15.06,9.94 21.773,3.227" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;stroke-linejoin:round;stroke-miterlimit:1.5;"/>
            </g>
        </g>
    </g>
</svg>
`),
    intermediate: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;">
    <g id="single-bond" serif:id="single bond" transform="matrix(0.390625,0,0,0.390625,-0.0405135,0.112873)">
        <path d="M7.072,56.679L57.135,6.743" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;stroke-dasharray:2.5,5,0,0;stroke-dashoffset:2.5;"/>
    </g>
</svg>`),
    // Ring Structures
    benzene: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="benzene" transform="matrix(0.464487,0,0,0.464487,-2.00188,-1.85056)">
        <g transform="matrix(1,0,0,1,3.76112,9.35197)">
            <path d="M7.435,11.582L27.46,1.518L47.486,11.582L47.486,31.607L27.46,41.569L7.435,31.607L7.435,11.582Z" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.1px;"/>
        </g>
        <g transform="matrix(1,0,0,0.932432,0,2.57375)">
            <path d="M16.482,23.047L16.482,38.091" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.17px;"/>
        </g>
        <g transform="matrix(0.438182,0.898886,-0.898886,0.438182,59.4191,13.1177)">
            <path d="M16.482,23.047L16.482,38.091" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.1px;"/>
        </g>
        <g transform="matrix(0.438182,-0.898886,-0.898886,-0.438182,59.4191,48.5379)">
            <path d="M16.482,23.047L16.482,38.091" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.1px;"/>
        </g>
    </g>
</svg>`),
    cyclohexane: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(0.464487,0,0,0.464487,-0.254886,2.49331)">
        <g id="benzene">
            <path d="M7.435,11.582L27.46,1.518L47.486,11.582L47.486,31.607L27.46,41.569L7.435,31.607L7.435,11.582Z" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.1px;"/>
        </g>
    </g>
</svg>`),
    cyclobutane: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="cyclobutane" transform="matrix(0.275927,0.2765,-0.2765,0.275927,9.68507,-0.584365)">
        <path d="M13.806,1.066C12.426,1.066 11.306,2.186 11.306,3.566L11.306,33.553C11.306,34.934 12.426,36.053 13.806,36.053L43.794,36.053C45.174,36.053 46.294,34.934 46.294,33.553L46.294,3.566C46.294,2.186 45.174,1.066 43.794,1.066L13.806,1.066ZM13.806,3.566L43.794,3.566L43.794,33.553L13.806,33.553L13.806,3.566Z" style="fill:rgb(112,112,112);"/>
    </g>
</svg>`),
    cyclopropane: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="cyclopropane" transform="matrix(0.487389,0,0,0.553268,-1.46498,0.100969)">
        <path d="M30.29,8.893C29.914,8.424 29.304,8.145 28.653,8.145C28.001,8.145 27.391,8.424 27.016,8.893L6.99,33.893C6.559,34.432 6.504,35.137 6.848,35.723C7.193,36.308 7.879,36.676 8.627,36.676L48.678,36.676C49.427,36.676 50.113,36.308 50.457,35.723C50.801,35.137 50.747,34.432 50.315,33.893L30.29,8.893ZM28.653,9.911L48.678,34.911L8.627,34.911L28.653,9.911Z" style="fill:rgb(112,112,112);"/>
    </g>
</svg>`),
    cyclopentane: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.390625,0,0,0.390625,-1.23175,-0.282962)">
        <g id="cyclopentane">
            <path d="M36.634,11.599C35.744,10.93 34.519,10.931 33.63,11.601L13.701,26.601C12.924,27.185 12.556,28.168 12.759,29.119L17.715,52.372C17.96,53.526 18.98,54.351 20.16,54.351L50.147,54.351C51.327,54.351 52.346,53.526 52.592,52.372L57.548,29.119C57.75,28.167 57.382,27.184 56.604,26.599L36.634,11.599ZM35.133,13.598L55.102,28.598L50.147,51.851L20.16,51.851L15.204,28.598L35.133,13.598Z" style="fill:rgb(112,112,112);"/>
        </g>
    </g>
</svg>`),
    cyclooctane: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="cyclooctane" transform="matrix(2.4106e-17,0.393681,-0.500495,3.06465e-17,31.3208,0.919857)">
        <path d="M20.012,18.017C19.331,18.017 18.68,18.237 18.211,18.626L6.826,28.079C6.39,28.442 6.147,28.922 6.147,29.421L6.147,44.466C6.147,44.921 6.349,45.363 6.72,45.713L18.105,56.488C18.576,56.934 19.275,57.192 20.012,57.192L40.038,57.192C40.823,57.192 41.562,56.9 42.03,56.404L52.195,45.629C52.512,45.292 52.683,44.885 52.683,44.466L52.683,29.421C52.683,28.96 52.476,28.514 52.097,28.161L41.932,18.708C41.46,18.269 40.767,18.017 40.038,18.017L20.012,18.017ZM20.012,19.968L40.038,19.968L50.203,29.421L50.203,44.466L40.038,55.241L20.012,55.241L8.627,44.466L8.627,29.421L20.012,19.968Z" style="fill:rgb(112,112,112);"/>
    </g>
</svg>`),
    // Charges
    radical: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.390625,0,0,0.390625,-5.77981,11.688)">
        <g id="radical">
            <text x="26.389px" y="28.381px" style="font-family:'CambriaMath', 'Cambria Math', serif;font-size:92.16px;fill:rgb(113,113,113);">&#x2022;</text>
        </g>
    </g>
</svg>`),
    minus: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.390625,0,0,0.390625,-7.70251,15.3254)">
        <g id="Layer3">
            <text x="24.518px" y="34.887px" style="font-family:'CambriaMath', 'Cambria Math', serif;font-size:163.84px;fill:rgb(113,113,113);">-</text>
        </g>
    </g>
</svg>`),
    plus: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.390625,0,0,0.390625,-10.5248,10.5938)">
        <g id="Layer2">
            <text x="24.518px" y="31.227px" style="font-family:'CambriaMath', 'Cambria Math', serif;font-size:92.16px;fill:rgb(113,113,113);">+</text>
        </g>
    </g>
</svg>`),
    neg_dipole: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.390625,0,0,0.390625,-5.83003,6.91771)">
        <g id="neg-dipole" serif:id="neg dipole">
            <text x="24.762px" y="32.041px" style="font-family:'CambriaMath', 'Cambria Math', serif;font-size:51.2px;fill:rgb(113,113,113);">&#x1E9F;-</text>
        </g>
    </g>
</svg>
`),
    pos_dipole: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.390625,0,0,0.390625,-9.78023,6.71752)">
        <g id="pos-dipole" serif:id="pos dipole">
            <text x="24.762px" y="32.041px" style="font-family:'CambriaMath', 'Cambria Math', serif;font-size:51.2px;fill:rgb(113,113,113);">&#x1E9F;+</text>
        </g>
    </g>
</svg>
`),
    dipole: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:10;">
    <g id="dipole" transform="matrix(0.458722,0,0,0.458722,-2.62032,-2.59832)">
        <g id="dipole1" serif:id="dipole" transform="matrix(0.951185,0,0,1,2.79468,-1.95934)">
            <g transform="matrix(2.29185,-0,-0,2.17997,3.06727,7.6236)">
                <path d="M15.763,8.607L21.388,12.357L15.763,16.107" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;"/>
                <path d="M1.358,12.357L21.388,12.357" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;stroke-linejoin:round;stroke-miterlimit:1.5;"/>
            </g>
        </g>
        <g id="dipole--" serif:id="dipole |" transform="matrix(1,0,0,1.11247,4.34625,-3.04697)">
            <path d="M9.596,25.86L9.596,38.79" style="fill:none;stroke:rgb(112,112,112);stroke-width:5.15px;stroke-linejoin:round;stroke-miterlimit:1.5;"/>
        </g>
    </g>
</svg>`),
    // Reaction Arrows
    reaction_arrow: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:10;">
    <g transform="matrix(0.440217,0,0,0.458722,-0.918274,-3.35416)">
        <g id="dipole">
            <g id="dipole1" serif:id="dipole" transform="matrix(2.27161,-0,-0,2.17997,2.08596,7.31198)">
                <path d="M16.406,8.75L22.031,12.5L16.406,16.25" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;"/>
                <path d="M1.802,12.5L22.031,12.5" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;stroke-linejoin:round;stroke-miterlimit:1.5;"/>
            </g>
        </g>
    </g>
</svg>
`),
    half_equilibrium: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="half_eqilibrium" transform="matrix(0.390625,0,0,0.390625,0.111182,1.91019)">
        <g id="dipole" transform="matrix(1,0,0,1,0,-2)">
            <path d="M6.18,34.562L57.25,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:5.12px;"/>
        </g>
        <path d="M57.25,32.562L48.072,21.658" style="fill:none;stroke:rgb(112,112,112);stroke-width:5.12px;"/>
    </g>
</svg>`),
    equilibrium: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="eqilibrium" transform="matrix(0.390625,0,0,0.390625,0.148656,-1.3657)">
        <g id="dipole" transform="matrix(1,0,0,1,0,-2)">
            <path d="M6.18,34.562L57.25,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:5.12px;"/>
        </g>
        <g id="dipole1" serif:id="dipole" transform="matrix(-1,0,0,-1,63.2389,72.9924)">
            <path d="M6.18,34.562L57.25,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:5.12px;"/>
        </g>
        <path d="M57.25,32.562L48.072,21.658" style="fill:none;stroke:rgb(112,112,112);stroke-width:5.12px;"/>
        <g transform="matrix(-1,0,0,-1,63.2389,70.9924)">
            <path d="M57.25,32.562L48.072,21.658" style="fill:none;stroke:rgb(112,112,112);stroke-width:5.12px;"/>
        </g>
    </g>
</svg>`),
    full_curly_arrow: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="half-curly-arrow" serif:id="half curly arrow" transform="matrix(0.390625,0,0,0.390625,0.337575,0.29974)">
        <path d="M31.136,12.892C19.206,12.892 9.535,22.358 9.535,34.035C9.535,45.705 19.214,55.179 31.136,55.179C43.066,55.179 52.737,45.712 52.737,34.035" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;"/>
        <g transform="matrix(1,0,0,1,-0.813214,0.508259)">
            <path d="M32.077,13.511C36.685,13.511 45.336,12.383 45.336,12.383L28.623,6.778L31.739,13.511C31.739,13.511 27.469,13.511 32.077,13.511Z" style="fill:rgb(112,112,112);"/>
            <path d="M32.077,13.511C36.685,13.511 45.336,12.383 45.336,12.383L28.623,6.778L31.739,13.511C31.739,13.511 27.469,13.511 32.077,13.511ZM43.081,12.154L29.564,7.621L32.058,13.011L32.077,13.011C33.593,13.006 35.108,12.912 36.62,12.795C38.661,12.636 40.698,12.426 42.733,12.195L43.081,12.154Z" style="fill:rgb(112,112,112);"/>
        </g>
        <g transform="matrix(1,0,0,-1,-0.893157,25.2747)">
            <path d="M32.077,13.511C36.685,13.511 45.336,12.383 45.336,12.383L28.623,6.778L31.739,13.511C31.739,13.511 27.469,13.511 32.077,13.511Z" style="fill:rgb(112,112,112);"/>
            <path d="M32.077,13.511C36.685,13.511 45.336,12.383 45.336,12.383L28.623,6.778L31.739,13.511C31.739,13.511 27.469,13.511 32.077,13.511ZM32.058,13.011L29.564,7.621L43.081,12.154C40.22,12.487 35.21,13.011 32.077,13.011L32.058,13.011Z" style="fill:rgb(112,112,112);"/>
        </g>
    </g>
</svg>`),
    half_curly_arrow: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="half-curly-arrow" serif:id="half curly arrow" transform="matrix(0.390625,0,0,0.390625,0.337575,0.29974)">
        <path d="M31.136,12.892C19.206,12.892 9.535,22.358 9.535,34.035C9.535,45.705 19.214,55.179 31.136,55.179C43.066,55.179 52.737,45.712 52.737,34.035" style="fill:none;stroke:rgb(112,112,112);stroke-width:2.5px;"/>
        <g transform="matrix(1,0,0,1,-0.813214,0.508259)">
            <path d="M32.077,13.511C36.685,13.511 45.336,12.383 45.336,12.383L28.623,6.778L31.739,13.511C31.739,13.511 27.469,13.511 32.077,13.511Z" style="fill:rgb(112,112,112);"/>
            <path d="M32.077,13.511C36.685,13.511 45.336,12.383 45.336,12.383L28.623,6.778L31.739,13.511C31.739,13.511 27.469,13.511 32.077,13.511ZM43.081,12.154L29.564,7.621L32.058,13.011L32.077,13.011C33.593,13.006 35.108,12.912 36.62,12.795C38.661,12.636 40.698,12.426 42.733,12.195L43.081,12.154Z" style="fill:rgb(112,112,112);"/>
        </g>
    </g>
</svg>
`),
    retro_arrow: encodeSvg(`<svg width="25" height="25" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="retro-arrow" serif:id="retro arrow" transform="matrix(0.390625,0,0,0.390625,-0.762389,0.825921)">
        <g id="dipole" transform="matrix(0.783506,0,0,1,8.42738,-7.5725)">
            <path d="M6.18,34.562L57.25,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:7.12px;"/>
        </g>
        <g id="dipole1" serif:id="dipole" transform="matrix(0.783506,0,0,1,8.42738,2.4275)">
            <path d="M6.18,34.562L57.25,34.562" style="fill:none;stroke:rgb(112,112,112);stroke-width:7.12px;"/>
        </g>
        <g transform="matrix(1,0,0,1,6.10165,-0.711563)">
            <path d="M42.685,19.93L51.506,32.978L42.685,44.936" style="fill:none;stroke:rgb(112,112,112);stroke-width:6.4px;"/>
        </g>
    </g>
</svg>
`)
}

export default Vectors;