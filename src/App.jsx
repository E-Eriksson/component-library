import Alert from "./Alert.jsx";
import "./App.css";
import Button from "./button.jsx";
import Badge from "./Badge.jsx";
import Card from "./card.jsx";
import Modal from "./Modal.jsx";
import React from "react";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="container">
        <Button
          size="large"
          color="dark"
          event={handleOpen}
          title="Open Modal"
        />
        <Alert color="light" icon="warning" />
        <Badge color="dark" icon="clock" content="14:00" size="small" />
        <Modal isOpen={open} onClose={handleClose}>
          <Modal.Header>
            <h1>Test title</h1>
          </Modal.Header>
          <Modal.Body>
            <span>Some text!</span>
          </Modal.Body>
          <Modal.Footer>
            <Button
              size="small"
              color="light"
              event={handleClose}
              title="Close Modal"
            />
          </Modal.Footer>
        </Modal>
        <Card
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/0/0e/Tree_example_VIS.jpg"
          imgAlt="A nice tree"
        >
          <h1>A tree</h1>
          <h2>A nice picture of a tree</h2>
        </Card>
      </div>
    </>
  );
}

export default App;
