import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div className="show">
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>Warning!</strong> There was an error
        </Alert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
