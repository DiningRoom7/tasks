import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateIsEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit Mode"
                checked={isEdit}
                onChange={updateIsEdit}
            />
            {!isEdit && (
                <div>
                    {studentName} is {!isStudent && "not"} a student
                </div>
            )}
            {isEdit && (
                <div>
                    <Form.Group controlId="formGiveName">
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control
                            value={studentName}
                            placeholder="Enter your name"
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setStudentName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is Student?"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                    />
                </div>
            )}
        </div>
    );
}
