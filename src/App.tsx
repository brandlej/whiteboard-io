import { Flex, Heading } from "@radix-ui/themes";
import { FabricCanvas } from "./components/FabricCanvas";

function App() {
  return (
    <Flex className="p-5 flex-col h-screen w-screen">
      <header>
        <Heading size="4">Whiteboard IO</Heading>
        <p>An online whiteboard powered by websockets</p>
      </header>
      <main className="flex-1 h-full w-full content-center justify-center">
        <FabricCanvas />
      </main>
      <footer>
        <p>Footer content</p>
      </footer>
    </Flex>
  );
}

export default App;
