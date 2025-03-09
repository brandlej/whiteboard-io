import { Flex, Container, Heading } from "@radix-ui/themes";
import "./styles.css";

function App() {
  return (
    <Flex className="p-5 flex-col h-screen">
      <header>
        <Heading size="4">Whiteboard IO</Heading>
        <p>An online whiteboard powered by websockets</p>
      </header>
      <main className="flex-1 h-full content-center">
        <Container size="1">Content within container will go here</Container>
      </main>
      <footer>
        <p>Footer content</p>
      </footer>
    </Flex>
  );
}

export default App;
