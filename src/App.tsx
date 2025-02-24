import "./App.css";
import Alert from "./components/UI/alert/Alert";
import { BellRing, X, Ban } from "lucide-react";

function App() {
  return (
    <div className="container">
      <Alert
        type="alert-default"
        icon={<BellRing />}
        closeIcon={<X />}
        description="          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quod
          dicta libero sit, saepe alias eligendi amet perspiciatis voluptates
          recusandae!

      "
      />
      <Alert
        type="alert-info"
        icon={<BellRing />}
        closeIcon={<X />}
        description="          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quod
          dicta libero sit, saepe alias eligendi amet perspiciatis voluptates
          recusandae!

      "
      />
      <Alert
        type="alert-warning"
        icon={<Ban />}
        closeIcon={<X />}
        description="          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quod
          dicta libero sit, saepe alias eligendi amet perspiciatis voluptates
          recusandae!

      "
      />
      <Alert
        type="alert-error"
        icon={<Ban />}
        closeIcon={<X />}
        description="          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quod
          dicta libero sit, saepe alias eligendi amet perspiciatis voluptates
          recusandae!

      "
      />
      <Alert
        type="alert-success"
        icon={<Ban />}
        closeIcon={<X />}
        description="          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quod
          dicta libero sit, saepe alias eligendi amet perspiciatis voluptates
          recusandae!

      "
      />
    </div>
  );
}

export default App;
