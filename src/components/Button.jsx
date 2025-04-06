export default function Button({ label, onClick }) {
    return (
      <button
        onClick={onClick}
         className="px-8 py-3 font-semibold rounded-full cursor-pointer bg-primary text-white"
      >
        {label}
      </button>
    );
  }