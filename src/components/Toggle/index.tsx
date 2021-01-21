import React from "react";
import { Container, ToggleLable, ToggleSelector } from "./styles";

const Toggle: React.FC = () => (
  <Container>
    <ToggleLable>Light</ToggleLable>
    <ToggleSelector
      checked
      onChange={() => console.log("mudou")}
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <ToggleLable>Dark</ToggleLable>
  </Container>
);

export default Toggle;
