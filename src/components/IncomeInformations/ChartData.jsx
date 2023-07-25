import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const ChartData = () => {
  const data = [
    { name: '20', Employee: 25, Employer: 25, 'Total Interest': 25 }, // Total: 25 + 25 + 25 = 75
    { name: '', Employee: 28, Employer: 28, 'Total Interest': 29 }, // Total: 28 + 28 + 29 = 85
    { name: '25', Employee: 33, Employer: 33, 'Total Interest': 34 }, // Total: 33 + 33 + 34 = 100
    { name: '', Employee: 34, Employer: 34, 'Total Interest': 42 }, // Total: 34 + 34 + 42 = 110
    { name: '30', Employee: 38, Employer: 38, 'Total Interest': 54 }, // Total: 38 + 38 + 54 = 130
    { name: '', Employee: 50, Employer: 50, 'Total Interest': 50 }, // Total: 50 + 50 + 50 = 150
    { name: '35', Employee: 60, Employer: 60, 'Total Interest': 55 }, // Total: 60 + 60 + 55 = 175
    { name: '', Employee: 55, Employer: 60, 'Total Interest': 70 }, // Total: 55 + 55 + 60 = 170
    { name: '40', Employee: 65, Employer: 65, 'Total Interest': 80 }, // Total: 65 + 65 + 80 = 210
    { name: '', Employee: 70, Employer: 70, 'Total Interest': 90 }, // Total: 70 + 70 + 90 = 230
    { name: '60', Employee: 80, Employer: 80, 'Total Interest': 95 }, // Total: 80 + 80 + 95 = 255
    { name: '', Employee: 85, Employer: 85, 'Total Interest': 110 }, // Total: 85 + 85 + 110 = 280
    { name: '65', Employee: 99, Employer: 99, 'Total Interest': 114 } // Total: 93 + 93 + 114 = 310
  ]
  const formatYAxisTick = tick => `$${tick}`

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
        barCategoryGap={0}
        barGap={0}
        barSize={15}
      >
        <CartesianGrid strokeDasharray='3 3' vertical={false} />
        <XAxis
          dataKey='name'
          tickLine={false}
          margin={{ left: 0, right: 0 }}
          padding={{ left: 0, right: 0 }}
        />
        <YAxis
          tickFormatter={formatYAxisTick}
          tickLine={false}
          ticks={[0, 100, 200, 300, 400]}
        />

        <Tooltip />
        <Legend align='center' verticalAlign='top' />
        <Bar dataKey='Employer' stackId='a' fill='#0800a3' />
        <Bar dataKey='Employee' stackId='a' fill='#4935ff' />
        <Bar dataKey='Total Interest' stackId='a' fill='#85afff' />
      </BarChart>
    </div>
  )
}

export default ChartData
