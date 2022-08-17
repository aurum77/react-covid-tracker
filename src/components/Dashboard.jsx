import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Dashboard = ({ data }) => {
  return (
    <>
      <Container className="mt-4">
        <CardGroup>
          <Card className="mb-2" bg="danger" text="light">
            <Card.Body>
              <Card.Title>Total cases:</Card.Title>
              <Card.Text>{data.cases.toLocaleString("en-US")}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2" bg="light" text="dark">
            <Card.Body>
              <Card.Title>New cases today :</Card.Title>
              <Card.Text>{data.todayCases.toLocaleString("en-US")}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2" bg="primary" text="light">
            <Card.Body>
              <Card.Title>Active cases:</Card.Title>
              <Card.Text>{data.active.toLocaleString("en-US")}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="mb-2" bg="dark" text="white">
            <Card.Body>
              <Card.Title>Total deaths:</Card.Title>
              <Card.Text>{data.deaths.toLocaleString("en-US")}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2" bg="secondary" text="white">
            <Card.Body>
              <Card.Title>New deaths today:</Card.Title>
              <Card.Text>{data.todayDeaths.toLocaleString("en-US")}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2" bg="warning">
            <Card.Body>
              <Card.Title>Critical cases:</Card.Title>
              <Card.Text>{data.critical.toLocaleString("en-US")}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="mb-2" bg="success" text="light">
            <Card.Body>
              <Card.Title>Total recovered:</Card.Title>
              <Card.Text>{data.recovered.toLocaleString("en-US")}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2" bg="primary" text="light">
            <Card.Body>
              <Card.Title>New recoveries today:</Card.Title>
              <Card.Text>
                {data.todayRecovered.toLocaleString("en-US")}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2" bg="info">
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
