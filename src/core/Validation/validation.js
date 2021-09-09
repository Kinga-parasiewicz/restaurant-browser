export const emailValidation = {
  required: { value: true, message: "Please fill out this field" },
  pattern: {
    value: /^[a-zA-z\w\d-.]+@([\w\d-]+\.)+[\w-]{2,30}$/,
    message: " Your email is invalid. @ and . is required",
  },
};

export const itemValidation = {
  required: { value: true, message: "Please fill out this field" },
  pattern: {
    value: /^\D[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/,
    message: "Description is invalid",
  },
  minLength: { value: 3, message: "Min length of description is 3" },
  maxLength: { value: 40, message: "Max length of name is 40" },
};

export const numberValidation = {
  required: { value: true, message: "Your number is required" },
  pattern: {
    value: /^-?\d+\.?\d*$/,
    message:
      "Number is invalid. Must be 9 numebers without special characters.",
  },
  minLength: { value: 9, message: "Min length of description is 9" },
  maxLength: { value: 9, message: "Max length of name is 9" },
};
