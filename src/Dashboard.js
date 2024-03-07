import React from "react";
import Header from "./Header";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <h1 style={{ marginTop: 20 }}>Dashboard</h1>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Card bg="primary" text="white" className="mb-4">
              <Card.Body>
                <Card.Title>Statistics</Card.Title>
                <Card.Text>Some statistical information can go here.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="success" text="white" className="mb-4">
              <Card.Body>
                <Card.Title>Recent Activity</Card.Title>
                <Card.Text>
                  Display recent activities or updates here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="info" text="white" className="mb-4">
              <Card.Body>
                <Card.Title>Notifications</Card.Title>
                <Card.Text>
                  Important notifications can be shown in this section.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
