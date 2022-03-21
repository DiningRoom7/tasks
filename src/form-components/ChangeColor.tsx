import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const [selectedColor, setSelectedColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Row>
                {colors.map((color: string) => (
                    <Col key={color}>
                        <Form.Check
                            className="color-radio-buttons"
                            type="radio"
                            name="colors"
                            onChange={updateColor}
                            id={"color-check-" + { color }}
                            label={
                                <span style={{ backgroundColor: color }}>
                                    {color}
                                </span>
                            }
                            value={color}
                            checked={selectedColor === color}
                        />
                    </Col>
                ))}
            </Row>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
