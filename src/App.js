import {  listArray } from './Arrays'
import Nest from './Nest'


function App() {
  return (
    <div>
    <ul className='main'>
      <h3>Repertuar</h3>
        {listArray.map(({ title, desc, director, mainR }) => (
          <Nest title={title} desc={desc} director={director} mainR={mainR}/>
        ))}
    </ul>
    </div>

  );
    }
export default App;