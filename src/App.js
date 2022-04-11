import React, { Component } from "react";
import Users from "./views/Users";
import { Switch, Route } from "react-router-dom";
import DefaultLayout from "./layouts/default";

class ScrollToTop extends Component {

  componentDidUpdate(prevProps) {
    console.log('Applicatin root.')
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <div className="app-frame">
        {this.props.children}
      </div>
    )
  }
}
function DefaultLayoutPage({ element: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => <DefaultLayout><Component {...props} /></DefaultLayout>}
    />
  )
}

const App = ({ location, history, ...props }) => {
  // const authenticated = localStorage.fmsToken ? true : false;

  return (
    <ScrollToTop location={location}>
      <Switch>
        <DefaultLayoutPage history={history} location={location} path="/" exact element={Users} />
      </Switch>
    </ScrollToTop>
  )
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import routes from "./routes";

// export default () => (
//   <Router basename={process.env.REACT_APP_BASENAME || ""}>
//       {routes.map((route, index) => {
//         return (
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={props => {
//               return (
//                 <route.layout {...props}>
//                   <route.component {...props} />
//                 </route.layout>
//               );
//             }}
//           />
//         );
//       })}
//   </Router>
// );
