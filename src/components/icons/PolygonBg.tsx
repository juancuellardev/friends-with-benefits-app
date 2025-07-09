import React from 'react';

const PolygonBg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width="1426"
      height="886"
      viewBox="0 0 1426 886"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary, #000)" />
          <stop offset="100%" stopColor="var(--primary-dark, #fff)" />
        </linearGradient>
      </defs>
      <path
        d="M1425.5 0.5V444.773L955.043 860.237C931.068 881.41 898.376 889.766 867.183 882.694L192.281 729.699C156.625 721.616 128.274 694.629 118.443 659.415L0.5 236.932V0.5H1425.5Z"
        fill="url(#gradient)"
        stroke="black"
      />
    </svg>
  );
};

export default PolygonBg;
