import React, { useMemo, useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { Container, Content, Filters } from "./styles";

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);

  const { type } = match.params;

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas'
  },[type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#f7931b' : '#e44c4e'
  },[type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  },[type]);

  const months = [
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
  ];

  const years = [
    { value: 2018, label: 2018 },
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
  ];

  useEffect(() => {

    const response = listData.map(item => {
      return {
        id: String(Math.random () * data.length),
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dataFormatted: item.date,
        tagColor: item.frequency === 'recorrente'? '#4e41f0' : '#e44c4e'
      }
    })

    setData(response)    
  },[]);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button className="tag-filter tag-filter-recurrent" type="button">
          Recorrentes
        </button>

        <button className="tag-filter tag-filter-eventual" type="button">
          Eventuais
        </button>
      </Filters>

      <Content>
        {
          data.map(item => (
            <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dataFormatted}
            amount={item.amountFormatted}
          />
          ))
        }
      </Content>
    </Container>
  );
};

export default List;
