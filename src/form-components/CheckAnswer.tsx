import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [input, setInput] = useState<string>("");

    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Check Answer:</Form.Label>
                <Form.Control
                    value={input}
                    onChange={updateInput}
                    placeholder="Enter Answer"
                />
            </Form.Group>
            <div>{input === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
