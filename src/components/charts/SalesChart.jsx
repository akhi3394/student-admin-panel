import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', income: 0, expense: 0 },
  { month: 'Feb', income: 30000000, expense: 20000000 },
  { month: 'Mar', income: 60000000, expense: 45000000 },
  { month: 'Apr', income: 90000000, expense: 80000000 },
  { month: 'May', income: 150000000, expense: 120000000 },
  { month: 'Jun', income: 200000000, expense: 180000000 },
  { month: 'Jul', income: 339091888, expense: 211411223 },
];

const SalesChart = () => (
  <div className="bg-white p-4 rounded-md shadow-sm w-full">
    <h3 className="text-sm mb-2">Your Sales this year</h3>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="expense" stroke="#1A71F6" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="income" stroke="#7ED957" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SalesChart;
