import StatCard from "../components/cards/StatCard";
import SalesChart from "../components/charts/SalesChart";
import TopSchoolsTable from "../components/tables/TopSchoolsTable";


const Dashboard = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Total School" value="150" highlight />
        <StatCard title="Total Student" value="5.000" />
        <StatCard title="Total Admin" value="5.000" />
        <StatCard title="Revenue" value="₹50,000.00" />
      </div>
      <SalesChart />
      <TopSchoolsTable />
    </div>
  );
};

export default Dashboard;
