import './App.css';
import ClassAndFunctionComponent from "./_03_04/ClassAndFunctionComponent";
import {Link, Route, Routes} from "react-router-dom";
import ShowListStudent from "./_02/ShowListStudent";
import RegisterForm from "./_05/RegisterForm";

const name = "Test";

function App() {
  return (
      <div>
          {name}
          <ClassAndFunctionComponent />

      {/*    <ul>*/}
      {/*        <li>*/}
      {/*            <Link to="/show-list-student">Show List Student</Link>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*            <Link to="/register-form">Register Form</Link>*/}
      {/*        </li>*/}
      {/*    </ul>*/}
      {/*    <Routes>*/}
      {/*        <Route path="/show-list-student" element={<ShowListStudent/>} />*/}
      {/*        <Route path="/register-form" element={<RegisterForm/>} />*/}
      {/*    </Routes>*/}
      </div>
  );
}

export default App;
