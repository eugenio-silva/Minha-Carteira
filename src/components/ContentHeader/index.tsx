import React from "react";
import {
  Container,
  TitleContainer,
  Controllers,
} from "../ContentHeader/styles";
import SelectInput from "../SelectInput";

const ContentHeader: React.FC = () => {
  const options = [
    { value: "Lucas", label: "Lucas" },
    { value: "Renato", label: "Renato" },
    { value: "Rosana", label: "Rosana" },
  ];

  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>
      <Controllers>
        <SelectInput options={options} />
        <SelectInput options={options} />
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
