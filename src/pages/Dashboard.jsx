import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', income: 0, expense: 0 },
  { name: 'Feb', income: 20000000, expense: 10000000 },
  { name: 'Mar', income: 40000000, expense: 25000000 },
  { name: 'Apr', income: 80000000, expense: 50000000 },
  { name: 'May', income: 120000000, expense: 75000000 },
  { name: 'Jun', income: 180000000, expense: 110000000 },
  { name: 'Jul', income: 270000000, expense: 211411223 },
  { name: 'Aug', income: 339091888, expense: 170000000 },
  { name: 'Sep', income: 250000000, expense: 120000000 },
  { name: 'Oct', income: 300000000, expense: 150000000 },
  { name: 'Nov', income: 320000000, expense: 160000000 },
  { name: 'Dec', income: 350000000, expense: 180000000 },
];

const Card = ({ title, value, highlight = false }) => (
  <div
    className={`rounded-xl px-6 py-4 w-full h-[128px]  ${
      highlight ? 'bg-[#0062FF] text-white' : 'bg-white text-[#454545]'
    } shadow-sm flex flex-col justify-between border border-[#E7E7E7]`}
  >
    <div className="flex items-center justify-between text-sm font-medium">
      <span className='font-semibold'>{title}</span>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke={highlight ? '#fff' : '#333'}
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M17 7L7 17M7 7h10v10" />
      </svg>
    </div>
    <div className={`text-[32px] text-start font-semibold ${!highlight ? 'text-[#1A71F6]' : 'text-white' }`}>{value}</div>
  </div>
);

const Dashboard = () => {
  return (
    <div className=" min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 text-start">Dashboard</h1>
      <p className="text-sm text-gray-400 mb-6 text-start">Dashboard</p>

      <div className="grid grid-cols-2 gap-6 ">
        {/* Left side: Four cards (50% width, split into 2x2) */}
        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[272px]">
          {/* Card 1 */}
          <div className="col-span-1 row-span-1">
            <Card title="Total School" value="150" highlight />
          </div>

          {/* Card 2 */}
          <div className="col-span-1 row-span-1">
            <Card title="Total Student" value="5,000" />
          </div>

          {/* Card 3 */}
          <div className="col-span-1 row-span-1">
            <Card title="Total Admin" value="5,000" />
          </div>

          {/* Card 4 */}
          <div className="col-span-1 row-span-1">
            <Card title="Revenue" value="₹50,000.00" />
          </div>
        </div>

        {/* Right side: Chart (50% width) */}
        <div className="col-span-1 bg-white rounded-xl p-2 shadow-sm h-[272px] border border-[#E7E7E7]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-[16px] font-semibold text-[#454545]">Your Sales this year</h2>
              <div className="flex items-center mt-2 gap-4 text-sm">
                <div className="flex items-center gap-1 text-[#737373]">
                  <span className="w-3 h-3 bg-[#A8E043] inline-block rounded-sm "></span>
                  Income
                </div>
                <div className="flex items-center gap-1 text-[#737373]">
                  <span className="w-3 h-3 bg-[#0062FF] inline-block rounded-sm "></span>
                  Expense
                </div>
              </div>
            </div>
            <div className="flex items-center text-[12px] text-[#3D3D3D] font-medium cursor-pointer">
              Show All
              <svg
                className="w-6 h-6 ml-1"
                fill="none"
                stroke="#3D3D3D"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 7L7 17M7 7h10v10" />
              </svg>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#999" />
              <YAxis hide />
              <Tooltip
                formatter={(value) =>
                  new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0,
                  }).format(value)
                }
                labelStyle={{ color: '#333' }}
                contentStyle={{
                  borderRadius: '10px',
                  border: '1px dashed #ddd',
                  fontSize: '12px',
                }}
              />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#0062FF"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#A8E043"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;