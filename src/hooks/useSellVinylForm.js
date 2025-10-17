import { useReducer } from "react";

const initialState = {
  values: {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    recordCount: "",
    isDamaged: "No",
    damageDescription: "",
    collectionDescription: "",
    preferredContact: "",
    bestTimes: "",
  },
  errors: {},
  touched: {},
  submissionMessage: null,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: { ...state.values, [action.payload.field]: action.payload.value },
      };
    case "SET_SUBMISSION_MESSAGE":
      return {
        ...state,
        submissionMessage: action.payload,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

export const useSellVinylForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD_VALUE", payload: { field: name, value } });
    if (state.submissionMessage) {
      dispatch({ type: "SET_SUBMISSION_MESSAGE", payload: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["email", "firstName", "lastName", "phone", "recordCount", "isDamaged", "collectionDescription", "preferredContact"];
    const isMissingFields = requiredFields.some(field => !state.values[field]) || (state.values.isDamaged === "Yes" && !state.values.damageDescription);

    if (isMissingFields) {
      dispatch({ type: "SET_SUBMISSION_MESSAGE", payload: { text: "Error: All required fields must be filled out.", isError: true } });
      return;
    }

    console.log("Sell Vinyl Form Submitted:", state.values);
    dispatch({ type: "SET_SUBMISSION_MESSAGE", payload: { text: "You have successfully sent your inquiry.", isError: false } });
    dispatch({ type: "RESET_FORM" });
  };

  return { state, handleChange, handleSubmit };
};
