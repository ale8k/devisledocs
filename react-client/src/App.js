import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import "./App.scss"

import Home from "./routes/Home/Home"
import CreateTutorial from "./routes/Create Tutorial/CreateTutorial"

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="container-fluid d-flex justify-content-between align-items-center p-4 bg-primary nav-height">
          <p className="mb-3 mt-3 pr-3 pl-3 text-light main-title">
            Dev Isle Docs
          </p>
          <ul className="d-flex list-unstyled mt-3 mb-3">
            <li className="pr-3 pl-3">
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li className="pr-3 pl-3">
              <NavLink className="link" to="/createTutorial">
                Create Tutorial
              </NavLink>
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
