import { Card } from "./Card";
import { Flex } from "./Flex";

export const Dashboard = ({ data }) => {
  return (
    <Flex>
      <Card
        background="Cyan"
        color="Black"
        header="Total cases:"
        body={data.cases.toLocaleString("en-US")}
      />
      <Card
        background="DarkTurquoise"
        color="Black"
        header="New cases today:"
        body={data.todayCases.toLocaleString("en-US")}
      />
      <Card
        background="MediumSlateBlue"
        color="White"
        header="Active cases:"
        body={data.active.toLocaleString("en-US")}
      />
      <Card
        background="Black"
        color="White"
        header="Total deaths:"
        body={data.deaths.toLocaleString("en-US")}
      />
      <Card
        background="Gray"
        color="White"
        header="New deaths today:"
        body={data.todayDeaths.toLocaleString("en-US")}
      />
      <Card
        background="Red"
        color="White"
        header="Critical cases:"
        body={data.critical.toLocaleString("en-US")}
      />
      <Card
        background="LightSeaGreen"
        color="White"
        header="Total recovered:"
        body={data.recovered.toLocaleString("en-US")}
      />
      <Card
        background="LightBlue"
        color="Black"
        header="New recoveries today:"
        body={data.todayRecovered.toLocaleString("en-US")}
      />
      <Card
        background="White"
        color="MediumSlateBlue"
        header="Total tests:"
        body={data.tests.toLocaleString("en-US")}
      />
    </Flex>
  );
};
