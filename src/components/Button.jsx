export default function Button({ label,func,  className = "" }) {
  return (
    <button
    onClick={(e)=>{e.preventDefault()
      func()}}
      className={`${className} font-semibold rounded-full cursor-pointer bg-primary text-white`}
    >
      {label}
    </button>
  );
}
