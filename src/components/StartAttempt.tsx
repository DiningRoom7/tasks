import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [numAttempts, setNumAttempts] = useState<number>(4);

    function startQuiz(): void {
        setInProgress(true);
        setNumAttempts(numAttempts - 1);
    }

    return (
        <div>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>

            <Button
                onClick={startQuiz}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setNumAttempts(numAttempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <div>{numAttempts}</div>
        </div>
    );
}
