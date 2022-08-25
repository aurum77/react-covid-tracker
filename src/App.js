import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Dashboard } from "./components";
import * as diseaseService from "./services/diseaseService";

const App = () => {
  const [diseaseData, setDiseaseData] = useState({});

  useEffect(() => {
    diseaseService.getAll().then((diseaseData) => setDiseaseData(diseaseData));
  }, []);

  return (
    <div>
      {Object.keys(diseaseData).length === 0 ? (
        <div>Fetching data from API</div>
      ) : (
        <Dashboard data={diseaseData} />
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
