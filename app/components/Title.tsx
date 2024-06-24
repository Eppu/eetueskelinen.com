import { playfairDisplay } from "../utils/fonts";

export default function Title({ children }) {
  return (
    <h1 className={`${playfairDisplay.className} mb-12 md:text-5xl md:leading-tight text-5xl leading-tight`}>
      {children}
    </h1>
  );
}
