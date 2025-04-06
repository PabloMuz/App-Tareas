const LogoutIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h10.5v-2c0-1.66 1.34-3 3-3h2v-2h-2c-.73 0-1.41.2-2 .54C13.95 14.21 13.02 14 12 14z"
    />
    <line
      x1="4"
      y1="4"
      x2="20"
      y2="20"
      stroke="#fff"
      strokeWidth="2"
    />
  </svg>
);

export default LogoutIcon;
