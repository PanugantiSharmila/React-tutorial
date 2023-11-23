import logo from "./logo.svg";
import "./App.css";
import { Header } from "./componentsprac/Header";
import { Alert, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Home } from "./componentsprac/Home";
import { Course } from "./componentsprac/Course";
import { AllCourses } from "./componentsprac/AllCourses";

function App() {
  const btnHandle = () => {
    // toast("This is my first message")
    toast.error("Done", { position: "bottom-center" });
  };
  return (
    <div className="App">
      {/* <Header name="J.Sindhuja" title="First Card" />
      <hr />
      <Header name="J.Susmitha" title="Second Card" />
      <hr />
      <h1>This is my react app</h1>
      <p>This is my program.I am currently learing React Js</p>
      <p>Because I want to develop applications that calls Rest Api's</p>
      <Header name="J.RakeshReddy" title="Last Card" />
      <hr />
      <Header name="Sulochana" title="Footer" /> */}
      {/* <h1>This is bootstrap Components</h1>
      <Button color="primary">Primary</Button> */}

      <ToastContainer />
      <h1>This is bootstrap components</h1>
      <Button color="warning" outline onClick={btnHandle}>
        First React Button
      </Button>
      <ToastContainer />
      <Home />
      {/* <Course
        course={{ title: "Django Course", description: "This is just testing" }}
      />
      <Course
        course={{ title: "Java Course", description: "This is just testing" }}
      /> */}

      <AllCourses />
    </div>
  );
}

export default App;
