export const Logo = (
  src: string,
  alt: string,
  link: string,
  className?: string
) => {
  const a = document.createElement("a");
  a.href = link;
  a.target = "_blank";

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.className = className || "logo";

  a.appendChild(img);
  return a;
};
