import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

const Dashboard = ({data}) => {
  return (
    <>
      <Container>
        <CardGroup className="mt-2">
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Total cases:</Card.Title>
              <Card.Text>{data.cases.toLocaleString("en-US")}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>New cases today :</Card.Title>
              <Card.Text>
                {data.todayCases.toLocaleString("en-US")}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Active cases:</Card.Title>
              <Card.Text>
                {data.active.toLocaleString("en-US")}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Total deaths:</Card.Title>
              <Card.Text>
                {data.deaths.toLocaleString("en-US")}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>New deaths today:</Card.Title>
              <Card.Text>
                {data.todayDeaths.toLocaleString("en-US")}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Critical cases:</Card.Title>
              <Card.Text>
                {data.critical.toLocaleString("en-US")}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Total recovered:</Card.Title>
              <Card.Text>
                {data.recovered.toLocaleString("en-US")}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>New recoveries today:</Card.Title>
              <Card.Text>
                {data.todayRecovered.toLocaleString("en-US")}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Total tests:</Card.Title>
              <Card.Text>{data.tests.toLocaleString("en-US")}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};

export default Dashboard;
