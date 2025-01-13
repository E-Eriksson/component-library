import Alert from "./Alert.jsx";
import "./App.css";
import Button from "./button.jsx";
import Badge from "./Badge.jsx";
import Card from "./card.jsx";

function App() {
  return (
    <>
      <Button size="large" color="dark" />
      <Alert color="light" icon="warning" />
      <Badge color="dark" icon="clock" content="14:00" size="small" />
      <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/0/0e/Tree_example_VIS.jpg"
        imgAlt="A nice picture"
      >
        <h1>A tree</h1>
        <h2>A nice picture of a tree</h2>
      </Card>
    </>
  );
}

export default App;
