import { Card } from "./Card";
import { Flex } from "./Flex";

export const Dashboard = ({ data }) => {
  return (
    <Flex>
      <Card
        modifier="card--turquoise"
        header="Total cases:"
        body={data.cases.toLocaleString("en-US")}
      />
      <Card
        modifier="card--blue"
        header="New cases today:"
        body={data.todayCases.toLocaleString("en-US")}
      />
      <Card
        modifier="card--lightblue"
        header="Active cases:"
        body={data.active.toLocaleString("en-US")}
      />
      <Card
        modifier="card--black"
        header="Total deaths:"
        body={data.deaths.toLocaleString("en-US")}
      />
      <Card
        modifier="card--gray"
        header="New deaths today:"
        body={data.todayDeaths.toLocaleString("en-US")}
      />
      <Card
        modifier="card--red"
        header="Critical cases:"
        body={data.critical.toLocaleString("en-US")}
      />
      <Card
        modifier="card--lightgreen"
        header="Total recovered:"
        body={data.recovered.toLocaleString("en-US")}
      />
      <Card
        modifier="card--lightblue"
        header="New recoveries today:"
        body={data.todayRecovered.toLocaleString("en-US")}
      />
      <Card
        modifier="card--tests"
        header="Total tests:"
        body={data.tests.toLocaleString("en-US")}
      />
    </Flex>
  );
};
