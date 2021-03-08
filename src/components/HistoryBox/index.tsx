import React from 'react';

import { 
    ResponsiveContainer, 
    LineChart, 
    Line, 
    XAxis, 
    CartesianGrid, 
    Tooltip } from 'recharts';

import { Container, CharContainer } from './styles';

interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({ 
    data, lineColorAmountEntry, lineColorAmountOutput
 }) => (
    <Container>
        <h2>Histórico de saldo</h2>

        <CharContainer>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }} >
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="month" stroke="#cecece" />
                    <Tooltip />

                    <Line 
                        type="monotone"
                        dataKey="amountEntry"
                        name="Entradas"
                        stroke={lineColorAmountEntry}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />

                    <Line 
                        type="monotone"
                        dataKey="amountOutput"
                        name="Saídas"
                        stroke={lineColorAmountOutput}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />

                </LineChart>
            </ResponsiveContainer>   
        </CharContainer>
    </Container>
)

export default HistoryBox;