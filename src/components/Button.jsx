export default function Button({ label, onClick, className = ""  }) {
    return (
      <button
        onClick={onClick}
        className={`${className} font-semibold rounded-full cursor-pointer bg-primary text-white`}
      >
        {label}
      </button>
    );
  }