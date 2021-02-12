import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
  const options = [
    { value: "Lucas", label: "Lucas" },
    { value: "Renato", label: "Renato" },
    { value: "Rosana", label: "Rosana" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
