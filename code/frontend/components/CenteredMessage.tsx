import styles from "./CenteredMessage.module.css";

type Props = {
  text: string;
};

export default function CenteredMessage({ text }: Props) {
  return (
    <main aria-label="Hello Word message" className={styles.root}>
      <h1 className={styles.message}>{text}</h1>
    </main>
  );
}
