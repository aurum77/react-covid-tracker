import { useState, useEffect } from "react";
import * as diseaseService from "../services/diseaseService";
import { Dashboard } from "../components";

export const NotesDashboardPage = () => {
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
    </div>
  );
};
