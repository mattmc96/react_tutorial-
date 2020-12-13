import React from "react";
import { TextField } from "./TextField";

export const App: React.FC = () => {
  return (
    <div>
      <TextField text="hello" person={{ firstName: "Matt", lastName: "McC" }} />
    </div>
  );
};
