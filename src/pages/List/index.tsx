import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { Container, Content } from "./styles";

const List: React.FC = () => {
  const options = [
    { value: "Lucas", label: "Lucas" },
    { value: "Renato", label: "Renato" },
    { value: "Rosana", label: "Rosana" },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
      </Content>
    </Container>
  );
};

export default List;
