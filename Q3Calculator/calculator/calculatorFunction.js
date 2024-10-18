import { useState } from "react";

const [displayValue, setDisplayValue] = useState(0);
const [operator, setOperator] = useState(null);
const [firstValue, setFirstValue] = useState("");

const handleNumberInput = (num) => {
    if (displayValue === "0") {
        setDisplayValue(num.toString());
    }else {
        setDisplayValue(displayValue + num);
    }
};

const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue("0");
};

const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === "+"){
        setDisplayValue((num1 + num2).toString());
    }else if (operator === "-") {
        setDisplayValue((num1 - num2).toString());
    }else if (operator === "*") {
        setDisplayValue((num1 * num2).toString());
    }else if (operator === "/") {
        setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue("");
};

const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue("");
};