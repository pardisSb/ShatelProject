const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-fuchsia-600	 text-white py-2 px-6 my-10 rounded hover:bg-fuchsia-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
