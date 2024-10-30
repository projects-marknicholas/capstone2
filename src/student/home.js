// Components
import Navbar from "./components/navbar";
import StudentInfo from "./components/student-info";
import StudentEval from "./components/student-eval";

// CSS
import '../assets/css/student/default.css';

const StudentHome = () => {
  return(
    <>
      <Navbar/>
      <StudentInfo/>
      <StudentEval/>
    </>
  );
}

export default StudentHome;