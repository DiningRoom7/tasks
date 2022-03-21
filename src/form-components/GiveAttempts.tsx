import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);

    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    return (
        <div>
            <div>Remaining Attempts: {numAttempts}</div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Requested Number Of Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    placeholder="Enter requested number of additional attempts"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(event.target.valueAsNumber)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setNumAttempts(numAttempts - 1)}
                    disabled={numAttempts < 1}
                >
                    Use
                </Button>
                <Button
                    onClick={() =>
                        setNumAttempts(requestedAttempts + numAttempts)
                    }
                >
                    Gain
                </Button>
            </div>
        </div>
    );
}
