const StatCard = ({ title, value, highlight }) => (
  <div className={`p-4 rounded-md shadow-sm bg-white w-full ${highlight ? 'bg-primary text-white' : ''}`}>
    <p className="text-sm mb-1">{title}</p>
    <p className="text-xl font-semibold">{value}</p>
  </div>
);

export default StatCard;
