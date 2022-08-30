import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export default function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <button disabled={loading} className={styles.button} {...rest}>
      {loading ? (
        <FaSpinner color="#FFF" size={16} />
      ) : (
        <a className={styles.buttonText}>{children}</a>
      )}
    </button>
  );
}
