import './App.css';
import Testimonials from './Components/Testimonials';
import data from './Components/data';

function App() {
  return (
    <div className="App bg-slate-200 w-full min-h-screen flex flex-col justify-center items-center gap-20 sm:gap-4">
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-3xl'>Our Testimonials</h2>
        <div className='bg-violet-500 w-28 h-1 mt-1'></div>
      </div>
      <Testimonials data={data}/>
    </div>
  );
}

export default App;
