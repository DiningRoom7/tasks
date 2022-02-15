import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Jack Kingham&apos;s CISC275 Website
            </header>
            <h1>Starter website. Hello World!</h1>
            <Container>
                <Row>
                    <Col>
                        Column 1<div className="ColumnRects"></div>
                    </Col>
                    <Col>
                        Column 2<div className="ColumnRects"></div>
                    </Col>
                </Row>
            </Container>
            <img
                src="https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg"
                alt="Look at this cool landscape"
                className="Landscape"
            ></img>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <ul>
                <li>Cheeseburgers</li>
                <li>Hot Dogs</li>
                <li>Donuts</li>
                <li>Bar Fightin</li>
                <li>Bug Collection</li>
            </ul>
        </div>
    );
}

export default App;
