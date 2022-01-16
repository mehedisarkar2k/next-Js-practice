import { format } from "date-fns";

const OverView = ({ data }) => {
  const overview = data[0];
  return (
    <div>
      <h2 className='my-2 text-4xl text-center'>
        Showing All Updated Overview of USA
      </h2>
      <div className='grid grid-cols-4 my-5 gap-x-8'>
        <div className='h-44 text-red-600 bg-red-100   flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-red-200 shadow-lg shadow-red-400/40'>
          <h2 className='text-2xl'>Currently Affected</h2>
          <p className='text-2xl font-bold'>{overview.positive}</p>
        </div>
        <div className='h-44 text-amber-600 bg-amber-100  flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-amber-200 shadow-lg shadow-amber-400/40'>
          <h2 className='text-2xl'>Currently Death</h2>
          <p className='text-2xl font-bold'>{overview.death}</p>
        </div>
        <div className='h-44 text-sky-600 bg-sky-100 flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-sky-200 shadow-lg shadow-sky-400/40'>
          <h2 className='text-2xl'>Active</h2>
          <p className='text-2xl font-bold'>{overview.pending}</p>
        </div>
        <div className='h-44 text-green-600 bg-green-100  flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-green-200 shadow-lg shadow-green-400/40'>
          <h2 className='text-2xl'>Currently Hospitalizrd</h2>
          <p className='text-2xl font-bold'>{overview.hospitalizedCurrently}</p>
        </div>
      </div>
      <p className='text-xs text-gray-400'>
        Data Updated Today : {format(new Date(overview.date), "hh-mm-a")}
      </p>
    </div>
  );
};

export default OverView;
