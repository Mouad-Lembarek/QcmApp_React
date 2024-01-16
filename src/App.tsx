import React from "react";
import QcmCreation from "./components/QcmCreation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import QuestionCreation from "./components/QuestionCreation";
import QcmQuestionnaire from "./components/QcmQuestionnaire";
import QcmList from "./components/QcmList";
import Teacher from "./Pages/Teacher";
import LoginTeacher from "./Pages/Auth/loginTeacher";
const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/teacher/login" element={<LoginTeacher />} />
          <Route path="/teacher/*" element={<Teacher />} />
          <Route path="/qcm-questionnaire/:id" element={<QcmQuestionnaire />} />
          <Route path="/qcm-questionnaire" element={<QcmList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
