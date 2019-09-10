import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./App.css"
// import Header from "./components/header";

import Home from "./routes/Home"
import CreateTutorial from "./routes/CreateTutorial"

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav
          className="container-fluid d-flex justify-content-between align-items-center p-4 bg-primary"
          style={{ height: "50px" }}
        >
          <p className="mb-3 mt-3 pr-3 pl-3 text-light" id="title">
            Dev Isle Docs
          </p>
          <ul className="d-flex list-unstyled mt-3 mb-3">
            <li className="pr-3 pl-3">
              <Link to="/">Home</Link>
            </li>
            <li className="pr-3 pl-3">
              <Link to="/createTutorial">Create Tutorial</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/createTutorial" component={CreateTutorial} />
      </div>
    </Router>
  )
}

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about/">About</Link>
//             </li>
//           </ul>
//         </nav>

//         <Route path="/" exact component={Home} />
//         <Route path="/about/" component={CreateTutorial} />
//       </div>
//     </Router>
//   );
// }
