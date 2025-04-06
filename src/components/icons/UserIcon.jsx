const UserIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512px"
      height="512px"
      {...props}
      viewBox="0 0 36 36"
      fill="currentColor"
    >
      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.9 0-8 1.9-8 5v3h16v-3c0-3.1-4.1-5-8-5z" />
    </svg>
  );
};

export default UserIcon;
