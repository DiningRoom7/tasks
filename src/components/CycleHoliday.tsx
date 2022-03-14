import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Halloween");

    function nextAlphabet(holiday: string): string {
        if (holiday === "Christmas") return "Easter";
        if (holiday === "Easter") return "Flag Day";
        if (holiday === "Flag Day") return "Halloween";
        if (holiday === "Halloween") return "Kwanzaa";
        return "Christmas";
    }
    function nextCalendar(holiday: string): string {
        if (holiday === "Easter") return "Flag Day";
        if (holiday === "Flag Day") return "Halloween";
        if (holiday === "Halloween") return "Christmas";
        if (holiday === "Christmas") return "Kwanzaa";
        return "Easter";
    }
    function holidayToEmoji(holiday: string): string {
        if (holiday === "Christmas") return "🎄";
        if (holiday === "Easter") return "🐰";
        if (holiday === "Flag Day") return "🇺🇸";
        if (holiday === "Halloween") return "🎃";
        if (holiday === "Kwanzaa") return "🇿🇦";
        return "";
    }

    return (
        <div>
            <Button onClick={() => setHoliday(nextAlphabet(holiday))}>
                Advance Alphabet
            </Button>
            <Button onClick={() => setHoliday(nextCalendar(holiday))}>
                Advance Year
            </Button>
            <br></br>
            <div>Holiday: {holidayToEmoji(holiday)}</div>
        </div>
    );
}
