import React, { useEffect, useState } from "react";

interface ValidationProps {
  taskDirty: boolean;
  taskError: string;
  city: string;
  setCity: any;
  formValid: boolean;
  blurHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cityHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Validation = (): ValidationProps => {
  const [city, setCity] = useState("");
  const [taskDirty, setTaskDirty] = useState(false);
  const [taskError, setTaskError] = useState("This field cannot be empty");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    taskError ? setFormValid(false) : setFormValid(true);
  }, [taskError]);

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "city":
        setTaskDirty(true);
        break;
      default:
    }
  };

  const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    if (e.target.value.length < 4) {
      setTaskError("This field length must be more four");
      if (!e.target.value) {
        setTaskError("This field cannot be empty");
      }
    } else {
      setTaskError("");
    }
  };

  return {
    taskDirty,
    formValid,
    taskError,
    blurHandler,
    cityHandler,
    city,
    setCity,
  };
};
export default Validation;
