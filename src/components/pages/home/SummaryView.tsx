// ! ----------------------------- imports start ---------------------------------- //
import React from 'react';
import { Transaction } from 'types';
import ReactECharts from 'echarts-for-react';
// ! ----------------------------- imports end ---------------------------------- //

interface SummaryViewProps {
  transactions: Transaction[];
}

const SummaryView: React.FC<SummaryViewProps> = ({ transactions }) => {
// ! ----------------------------- funcs start ---------------------------------- //
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenseByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc: Record<string, number>, curr) => {
      if (acc[curr.category]) {
        acc[curr.category] += curr.amount;
      } else {
        acc[curr.category] = curr.amount;
      }
      return acc;
    }, {});

  // Bar chart opts for income vs expenses
  const barChartOptions = {
    title: {
      text: 'Income vs Expenses',
    },
    xAxis: {
      type: 'category',
      data: ['Income', 'Expenses'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [income, expenses],
        type: 'bar',
        color: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  // Pie chart opts for expenses by category
  const pieChartOptions = {
    title: {
      text: 'Expenses by Category',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Expenses',
        type: 'pie',
        radius: '50%',
        data: Object.keys(expenseByCategory).map(category => ({
          value: expenseByCategory[category],
          name: category,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
// ! ----------------------------- funcs end ---------------------------------- //

  return (
    <div>
      <h1 className='py-10 text-center font-semibold text-4xl text-blue-500 capitalize mb-10'>transaction Summary</h1>
        {transactions.length ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='col-span-1'>
                <ReactECharts option={barChartOptions} style={{ height: '400px', width: '100%' }} />
            </div>
            <div className='col-span-1'>
                <ReactECharts option={pieChartOptions} style={{ height: '400px', width: '100%' }} />
            </div>
          </div>
        ):<p className='text-gray-400 text-center font-semibold'>No didn't do any transactions yet</p>}
    </div>
  );
};

export default SummaryView;
