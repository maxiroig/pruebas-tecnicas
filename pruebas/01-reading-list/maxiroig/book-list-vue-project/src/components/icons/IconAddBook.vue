<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500"
        style="width:100%;height:100%;transform:translate3d(0,0,0);content-visibility:visible" viewBox="0 0 500 500">
        <defs>
            <clipPath id="c">
                <path d="M0 0h500v500H0z" />
            </clipPath>
            <filter id="a" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
                <feComponentTransfer in="SourceGraphic">
                    <feFuncA tableValues="1.0 0.0" type="table" />
                </feComponentTransfer>
            </filter>
            <path id="b" fill="red"
                d="M151.528-21.814c0 37.041-30.028 67.069-67.069 67.069-37.041 0-67.069-30.028-67.069-67.069 0-37.041 30.028-67.069 67.069-67.069 37.041 0 67.069 30.028 67.069 67.069z"
                style="display:block" transform="translate(257.941 247.949) scale(.90597)" />
            <mask id="d" mask-type="alpha">
                <g filter="url(#a)">
                    <path fill="#fff" d="M0 0h500v500H0z" opacity="0" />
                    <use xmlns:ns1="http://www.w3.org/1999/xlink" ns1:href="#b" />
                </g>
            </mask>
        </defs>
        <g clip-path="url(#c)">
            <g mask="url(#d)" style="display:block">
                <path fill="none" stroke="#ED66AA" stroke-linecap="round" stroke-linejoin="round" stroke-width="10.08"
                    d="M165.608 153.553h168.918M165.54 339.863V99.147h168.918v240.718L250 419.522l-84.459-79.658z" />
            </g>
            <path fill="none" stroke="#E82F8B" stroke-linecap="round" stroke-linejoin="round" stroke-width="10.08"
                d="M151.528-21.814c0 37.041-30.028 67.069-67.069 67.069-37.041 0-67.069-30.028-67.069-67.069 0-37.041 30.028-67.069 67.069-67.069 37.041 0 67.069 30.028 67.069 67.069z"
                style="display:block" transform="translate(257.941 247.949) scale(.90597)" />
            <path fill="none" stroke="#E82F8B" stroke-linecap="round" stroke-linejoin="round" stroke-width="9.132"
                d="m341.986 195.779-15.054 64.814m35.219-25.973-55.397-12.867" style="display:block" />
        </g>
    </svg>
</template>