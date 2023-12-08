import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              if(route.children) {
                return (
                  <Route key={index} path={route.path} element={<Page />} >
                    {route.children.map((child : any, i : number) => {
                        const ChildrenPage = child.component;
                        return <Route key={i} path={child.path} element={<ChildrenPage/>} />
                    })}
                  </Route>
                )
              }
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
