import { usePathname, useRouter } from 'next/navigation';

export function useMenu() {
  const pathname = usePathname();
  const router = useRouter();
  function getActiveLink(url: string) {
    return url === pathname;
  }

  function Logo() {
    return (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="122.000000pt"
        height="114.000000pt"
        viewBox="0 0 122.000000 114.000000"
        preserveAspectRatio="xMidYMid meet"
        className="Logo"
      >
        {' '}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(133 65 223 / 37%)', stopOpacity: 1 }}
            />
            <stop
              offset="10%"
              style={{ stopColor: 'rgba(199, 166, 232, 1)', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgba(102, 24, 196, 1)', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <g
          transform="translate(0.000000,114.000000) scale(0.100000,-0.100000)"
          fill="currentColor"
          stroke="none"
        >
          <path
            d="M340 1001 c-79 -24 -132 -79 -156 -159 -21 -69 -20 -475 2 -538 22
-64 51 -101 104 -132 l45 -27 259 -3 c226 -3 266 -1 305 14 52 20 92 58 123
117 21 39 23 57 26 268 3 146 0 246 -8 282 -15 76 -59 133 -123 163 -51 23
-58 24 -302 23 -137 0 -261 -4 -275 -8z m238 -411 c-4 -188 -9 -199 -98 -208
l-51 -5 3 163 3 162 28 24 c21 18 40 24 73 24 l45 0 -3 -160z m212 120 c0 -52
-24 -98 -56 -110 -14 -6 -45 -10 -70 -10 l-44 0 0 39 c0 53 17 96 43 109 12 6
46 11 75 11 l52 1 0 -40z m-31 -184 c19 -20 26 -38 29 -87 l5 -62 -63 6 c-85
7 -103 26 -108 113 l-5 67 58 -6 c44 -4 65 -12 84 -31z"
          />
        </g>
      </svg>
    );
  }

  function IconSpeedometer(props: {
    className?: string;
    style?: React.CSSProperties;
  }) {
    return (
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M425.7 118.25A240 240 0 0076.32 447l.18.2c.33.35.64.71 1 1.05.74.84 1.58 1.79 2.57 2.78a41.17 41.17 0 0060.36-.42 157.13 157.13 0 01231.26 0 41.18 41.18 0 0060.65.06l3.21-3.5.18-.2a239.93 239.93 0 00-10-328.76zM240 128a16 16 0 0132 0v32a16 16 0 01-32 0zM128 304H96a16 16 0 010-32h32a16 16 0 010 32zm48.8-95.2a16 16 0 01-22.62 0l-22.63-22.62a16 16 0 0122.63-22.63l22.62 22.63a16 16 0 010 22.62zm149.3 23.1l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14zm31.72-23.1a16 16 0 01-22.62-22.62l22.62-22.63a16 16 0 0122.63 22.63zm65.88 227.6zM416 304h-32a16 16 0 010-32h32a16 16 0 010 32z" />
      </svg>
    );
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  }

  return { getActiveLink, Logo, logout, IconSpeedometer };
}
