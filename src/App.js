
import './App.css';
import Card from "./Card"
import Nav from "./Nav"

const data2 = [
  {
    navb: "home",
  },
  {
    navb: "contact",
  },
  {
    navb: "gallery",
  },
  {
    navb: "information",
  }
];

const data = [
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Jesica",
    name2: "VP of sales",
    policy: "3564$",
    policystatus: "Approved",
    destionation: "Fontana",
    status: "waiting",
  },
  {
    img: "https://vempraminds.com.br/wp-content/uploads/2020/02/duvidas1-1000x650.jpg",
    name: "Ralph Simmson",
    name2: "Advercery Board",
    policy: "6945$",
    policystatus: "Early staded",
    destionation: "Oakland",
    status: "waiting",
  },
  {
    img: "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.2.1411205658.1625529600",
    name: "Michel",
    name2: "Social Content Maneger",
    policy: "7894$",
    policystatus: "Approved",
    destionation: "Bolder",
    status: "waiting",
  },
  {
    img: "https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg",
    name: "Ralph Simmson",
    name2: "Developer",
    policy: "4456$",
    policystatus: "Rejected",
    destionation: "Glendale",
    status: "waiting",
  },
  {
    img: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
    name: "Jonathan ",
    name2: "CEO",
    policy: "6945$",
    policystatus: "Early staded",
    destionation: "Fontana",
    status: "waiting",
  },
  {
    img: "https://img.freepik.com/free-photo/confident-handsome-businessman-in-suit-and-glasses-looking-serious_176420-31755.jpg?size=626&ext=jpg",
    name: "Ralph Simmson",
    name2: "Developer",
    policy: "6945$",
    policystatus: "Rejected",
    destionation: "Fontana",
    status: "waiting",
  }
];

function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="row mt-5">
          <div className="d-flex justify-content-between  mb-5">
            <div className="d-flex align-items-center "> <p className="fs-2 fw-bold text-primary">Employes</p>
              <p className="fs-6 text-secondary ms-3">32 people</p></div>
            <button className="btn btn-primary">Add Employee</button>
          </div>

          {
            data.map((value, index) => {
              return <table>
                <tbody>
                  <Card
                    img={value.img}
                    name={value.name}
                    name2={value.name2}
                    policy={value.policy}
                    policystatus={value.policystatus}
                    destionation={value.destionation}
                    status={value.status} />
                </tbody>
              </table>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
