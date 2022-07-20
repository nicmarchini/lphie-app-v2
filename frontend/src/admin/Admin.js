import BrothersTable from './BrothersTable';
import ClassesTable from './ClassesTable';

function Admin() {
    return (
      <div className="bg-zinc-200 h-screen">
        <br></br>
        <br></br>
        {/* Header with inline css */}
        {/* <h3 className='text-3xl text-gray-700 font-bold mb-5'>test tailwinds</h3> */}
        <div className='flex place-content-center'>
          <BrothersTable/>
        </div>
        <br></br>
        <br></br>
        {/* <div className='flex place-content-center'>
          <ClassesTable/>
        </div> */}
        <br></br>
        <br></br>
      </div>
    );
  }
  
export default Admin;
  