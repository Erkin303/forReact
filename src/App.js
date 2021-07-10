
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container mt-4 mb-4">
        <div className="d-flex justify-content-between">
          <p className="fw-bold fs-3">Rober.co</p>
          <ul>
            <li> <a href="#">Home</a></li>
            <li> <a href="#">Services</a></li>
            <li> <a href="#">Aboute</a></li>
          </ul>
        </div>
      </div>

      <div className="container card2">
        <div className="row">
          <div className="col-5 offset-2">
            <p className=" text-primary">Roberto Carlos</p>
            <p className=" fs-1 fw-bold">Visual designer & Developer</p>
            <p className="pin text-secondary">Hello I'm Roberto Carlos. I design interfaces - the metaphors that humanize them, and the systems that scale them. Let's create something together.</p>
            <button className="btnp">HIRE ME</button>
            <a href="#" className="ms-5">Download CV</a>
          </div>
        </div>



      </div>
    </div >
  );
}

export default App;
