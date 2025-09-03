import { Label } from "./Label";
import styles from "./styles.module.css";

type InputProps = {
  id: string;
  labelText?: string;
  placeholder?: string;
} & React.ComponentProps<"input">;

export function Input({
  labelText,
  type,
  id,
  ...rest
}: InputProps) {
  return (
    <>
      {labelText && <Label htmlFor={id}>{labelText}</Label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
