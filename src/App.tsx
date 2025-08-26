import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <div>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti saepe
        sunt labore cum. Repellat voluptas, nihil iste repudiandae ab porro
        magni alias reiciendis, suscipit corrupti veniam est iusto similique
        sint.
      </p>
    </div>
  );
}
