import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './slice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-96 text-center transform transition duration-500 hover:scale-105">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Counter: <span className="text-indigo-600">{count}</span>
        </h1>
        <div className="mt-6 flex justify-center space-x-4">
          <button 
            onClick={() => dispatch(increment())} 
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transform hover:scale-110 transition duration-300"
          >
            Increment
          </button>
          <button 
            onClick={() => dispatch(decrement())} 
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transform hover:scale-110 transition duration-300"
          >
            Decrement
          </button>
        </div>
        <button 
          onClick={() => dispatch(reset())} 
          className="mt-4 px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full shadow-lg transform hover:scale-105 transition duration-300"
        >
          Reset
        </button>
        <div className="mt-6">
          <input 
            type="number"
            value={incrementAmount}
            onChange={e => setIncrementAmount(Number(e.target.value))}
            className="w-2/3 border-2 border-gray-300 p-3 rounded-full focus:outline-none focus:border-indigo-500 transition duration-300 shadow-sm"
            placeholder="Enter Amount"
          />
          <button 
            onClick={() => dispatch(incrementByAmount(incrementAmount))} 
            className="ml-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-110 transition duration-300 mt-3"
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
