import { Label } from "./Label";
import styles from "./styles.module.css";

type InputProps = { id: string } & React.ComponentProps<"input">;

export function Input({ type, id }: InputProps) {
  return (
    <>
      <Label htmlFor="">task</Label>
      <input id={id} type={type} className={styles.input} />
    </>
  );
}
