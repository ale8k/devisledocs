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
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createTutorial">Create Tutorial</Link>
          </li>
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
