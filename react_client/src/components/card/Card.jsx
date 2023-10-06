/**
 * Bootstrap 5.0 Cards: https://react-bootstrap.netlify.app/docs/components/cards/
 * Bootstrap 5.0 Grid: https://react-bootstrap.netlify.app/docs/layout/grid/#setting-column-widths-in-row
 */
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import crypto_image from "../../assets/crypto.svg";

// CSS Styles (using grid for Card.Text > children)
import "./styles/card.css";

export default function ComponentOne() {
  return (
    <>
      <h1 className="card-title d-none">Crypto Assets</h1>
      {/* <Row s={1} md={3} lg={4} xl={6} className="media-card mt-2"> */}
      <Row className="media-scroll snaps-inline mt-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <Col key={index}>
            <Card className="media-element" bg="dark">
              <Card.Img
                className="card-img"
                alt="cryptocurrency"
                variant="top"
                src={crypto_image}
              />
              <Card.Body>
                <div className="card-grid">
                  <div className="value-type">
                    <p className="card-text">Asset</p>
                    <p className="card-text">Qty</p>
                    <p className="card-text">Spot</p>
                    <p className="card-text">Value</p>
                    <p className="card-text">Day</p>
                    <p className="card-text">Week</p>
                    <p className="card-text">Month</p>
                  </div>
                  <div className="value">
                    <p className="card-text">BTC</p>
                    <p className="card-text">1.0000</p>
                    <p className="card-text">$ 1.12</p>
                    <p className="card-text">$ 2.24</p>
                    <p className="card-text">1.32%</p>
                    <p className="card-text">0.32%</p>
                    <p className="card-text">0.01%</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
