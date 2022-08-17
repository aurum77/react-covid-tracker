import { useEffect, useState } from "react";
import diseaseService from "./services/diseaseService";

const App = () => {
  const [diseaseData, setDiseaseData] = useState({});

  useEffect(() => {
    diseaseService.getAll().then(diseaseData => setDiseaseData(diseaseData))
  }, []);

  return (
    <div>
      <div className="flexbox">
        <div>
          Total cases: {diseaseData.cases}
          <br />
          Today cases: {diseaseData.todayCases}
          <br />
          Active cases: {diseaseData.active}
        </div>
        <div>
          Total deaths: {diseaseData.deaths}
          <br />
          Today deaths: {diseaseData.todayDeaths}
          <br />
          Critical cases: {diseaseData.critical}
        </div>
        <div>
          Total recovered: {diseaseData.recovered}
          <br />
          Today recovered: {diseaseData.todayRecovered}
          <br />
          Total tests: {diseaseData.tests}
        </div>
      </div>
    </div>
  );
};

export default App;
