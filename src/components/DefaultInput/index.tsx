import { Label } from "./Label";
import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string;
  placeholder?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  labelText,
  type,
  id,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && <Label htmlFor={id}>{labelText}</Label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
