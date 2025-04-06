export default function Button({ label, onClick }) {
    return (
      <button
        onClick={onClick}
         className="px-8 py-3 font-semibold rounded-full cursor-pointer bg-[#ff8300] text-white"
      >
        {label}
      </button>
    );
  }