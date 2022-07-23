// import BrothersTable from './BrothersTable';
// import ClassesTable from './ClassesTable';
import RecruitmentColumn from './RecruitmentColumn'

function Admin() {
    return (
        <div className="bg-zinc-200 h-screen">
            <br></br>
            <br></br>
            {/* <div className='flex place-content-center'>
                <BrothersTable/>
            </div> */}
            <br></br>
            <br></br>
            {/* <div className='flex place-content-center'>
                ClassesTable/>
            </div> */}
            <br></br>
            <br></br>
            <div className='flex place-content-center'>
                {/*
                    TODO : make EditableComponents more reusable, pass along styling props,
                    merge editable cell and editable field back together
                    and have <td> be optional depending on style props passed in
                    
                    ex/  style = table --> add td enclosing, style = column --> no td enclosure, default column

                    refactor code to follow DRY and clean any stale references
                    refactor with consistent, relevant variable names

                    replace fields for front/back graphics with upload buttons -> have it just store latest in bucket at some identical path
                    upload button replaces file in s3 -> frontend serves same thing

                    also make sure invalidate CF cache later on?//
                */}
                <RecruitmentColumn/>
            </div>
        </div>
    );
}
  
export default Admin;
  