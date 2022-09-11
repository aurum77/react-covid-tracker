import { Footer, Header } from "./components";
import { NotesDashboardPage, NotFoundPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<NotesDashboardPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
