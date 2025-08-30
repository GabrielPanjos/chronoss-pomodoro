import { Label } from "./Label";
import styles from "./styles.module.css";

type InputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function Input({ labelText, type, id, ...rest }: InputProps) {
  return (
    <>
      {labelText && (
        <Label {...rest} htmlFor="">
          {labelText}
        </Label>
      )}
      <input id={id} type={type} className={styles.input} />
    </>
  );
}
