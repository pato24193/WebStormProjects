import './App.css';
import {Header} from "./components/Header";
import {StudentList} from "./components/StudentList";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <div className="row">
                <div className="col-lg-2">
                    Left bar
                </div>
                <div className="col-lg-8">
                    <StudentList />
                </div>
                <div className="col-lg-2">
                    Right bar
                </div>
            </div>
        </div>
    );
}

export default App;
