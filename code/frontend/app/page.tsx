import CenteredMessage from "../components/CenteredMessage";
import { getHelloWordMessage } from "../lib/mock/hello-word-landing-page";

export default async function Home() {
  const message = await getHelloWordMessage();

  return <CenteredMessage text={message.text} />;
}
