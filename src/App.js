import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard"
import diseaseService from "./services/diseaseService";

const App = () => {
  const [diseaseData, setDiseaseData] = useState({});

  useEffect(() => {
    diseaseService.getAll().then((diseaseData) => setDiseaseData(diseaseData));
  }, []);

  return (
    <div>
    {Object.keys(diseaseData).length === 0 ? (
      <div>loading</div>
    )
      :
      (
        <Dashboard data={diseaseData}/>
    )
    }
</div>
  );
};

export default App;
