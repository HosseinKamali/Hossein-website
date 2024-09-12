


const DecrementButton = ({ id,onClick,getProductQty }) => {

    

  const isDisabled = getProductQty(id) === 1;
  
  return (
    <button
      className={`mr-2 text-xl font-bold bg-blue-600 text-slate-50 py-2 px-4 rounded-2xl ${isDisabled ? "opacity-50" : ""}`}
      onClick={() => onClick(id)}
      disabled={isDisabled }
    >
      -
    </button>
  );
};

export default DecrementButton;
