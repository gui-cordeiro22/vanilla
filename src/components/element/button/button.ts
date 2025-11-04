export const Button = (
  text: string,
  handleClick: () => void,
  className?: string
) => {
  const button = document.createElement("button");

  button.textContent = text;

  button.addEventListener("click", handleClick);

  if (!className) {
    return button;
  } else {
    button.classList.add(className);
  }

  return button;
};
