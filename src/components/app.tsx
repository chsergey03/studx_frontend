import Authentication from "./authentication/authentication.tsx";
import Layout from "./core/layout.tsx"
import MainContent from "./core/main_content.tsx";
import Courses from "./content/courses.tsx";
import Course from "./content/course.tsx";

import {
  useState
} from "react";

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ?
            (<Navigate to="/" />) :
            (<>
               <Layout>
                 <Authentication onAuthenticate={handleAuthentication} />
               </Layout>
             </>
            )
        }
      />
      <Route
        path="/"
        element={
          isAuthenticated ?
            (<>
               <Layout isNecessaryToDisplayProfileIcon={true}>
                 <MainContent
                   headerTitle="Курсы"
                   content={<Courses />}
                   isSectionFlex={true}
                 />
               </Layout>
             </>
            ) :
            (<Navigate to="/login" />)
        }
      />
      <Route
        path="/course/:id"
        element={
          <Course />
        }
      />
    </Routes>
  );
}

export default App;