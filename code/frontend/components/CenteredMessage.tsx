type Props = {
  text: string;
};

export default function CenteredMessage({ text }: Props) {
  return (
    <main aria-label="Hello Word message">
      <h1>{text}</h1>
    </main>
  );
}
