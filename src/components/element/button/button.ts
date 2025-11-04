export const Button = (text: string, handleClick: () => void) => {
  const button = document.createElement("button");

  button.textContent = text;

  button.addEventListener("click", handleClick);

  return button;
};
