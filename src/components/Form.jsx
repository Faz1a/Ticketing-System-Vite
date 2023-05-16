const Form = () => {

    return (
      <div className="mt-5">
        <label className="flex justify-center space-x-1">
          
          <input
            type="text"
            className="mt-8 h-10 md:mt-2 text-yellow-400 text-center bg-gray-800 border-gray-300 rounded-md shadow-sm  focus:border-yellow-400  focus:ring  focus:ring-yellow-500 "
            placeholder="Otoka"
          />
          <label>
            <span className="text-white lg:mr-2">do</span>
            <input
              type="text"
              className="w-44 py-2 mt-2 text-yellow-400 text-center bg-gray-800 border-gray-300 rounded-md shadow-sm  focus:border-yellow-400  focus:ring  focus:ring-yellow-500 "
              placeholder="Marijin Dvor"
            />
          </label>
        </label>
        <div className="w-44">
            
        </div>
      </div>
    );
  };
  
  export default Form;
  