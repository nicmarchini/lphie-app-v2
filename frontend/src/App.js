// import logo from './logo.svg';
import './App.css';
import * as api from './api/api-wrapper';

//local testing, move into .test file

api.create_classes_table()
api.create_brothers_table()

// get_tables().then((data) => {
//   console.log('tables are: ' + data.TableNames)

// })

// insert_bro(
//   19, 
//   'John', 
//   'Smith', 
//   'Freestyle',
//   'Alumni',
//   's3://bros/19/class.png',
//   ['s3://bros/19/personal1.png', 's3://bros/19/personal2.png']
// )

// insert_class(
//   'Beta',
//   'Fall 2018',
//   '6',
//   [12,5],
//   "Blazin' Betas",
//   's3://classes/beta.png',
//   [15,16,17,18,19]
// )

//if status deleterred./or cut whatever dont show in cards later

// get_bro(19)

api.get_bro_ids_in_class('Beta').then((data) => {
  console.log(data.Items[0].ClassBroIds)
})

// get_bro(10).then((data) => {
//   console.log(data)
// })

api.get_class('Beta').then((data) => {
  console.log(data)
})

// console.log(get_bro(19))
// console.log(get_class('Beta'))

// insert should return the new object since doing a get right after might race condition

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
      </header>
    </div>
  );
}

export default App;
