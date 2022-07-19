import './Admin.css'
import BrothersTable from './BrothersTable';
import ClassesTable from './ClassesTable';

function Admin() {
    return (
      <div className="container">
        {/* Header with inline css */}
        <BrothersTable/>
        <ClassesTable/>
      </div>
    );
  }
  
export default Admin;
  