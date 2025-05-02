export default function Button({ label,func,  className="bg-orange-500 hover:bg-orange-600 py-3 px-6",type='button' }) {
  return (
    <button
      type={type}
      onClick={(e) => {
        
        if (func) {
          e.preventDefault();
          func();  // `func` funksiyası varsa çağırılır
        }
      }}
      className={`${className} font-semibold rounded-full cursor-pointer bg-primary text-white`}
    >
      {label}
    </button>
  );
}
