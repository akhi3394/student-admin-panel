import { FiEye, FiEdit } from 'react-icons/fi';

const TopSchoolsTable = () => {
  const rows = Array(4).fill({
    code: 'GVPS-998',
    name: 'Vidhya Vikas Matriculation',
    board: 'CBSE',
    location: 'Thanjavur, Tamil Nadu',
    admin: 'Devon Lane',
    students: 1250,
    status: 'Active',
  });

  return (
    <div className="bg-white p-4 rounded-md shadow-sm w-full overflow-x-auto">
      <h3 className="text-sm mb-2">Top Schools</h3>
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2"><input type="checkbox" /></th>
            <th className="p-2">School Name & Code</th>
            <th className="p-2">Board</th>
            <th className="p-2">Location</th>
            <th className="p-2">Assigned Admin</th>
            <th className="p-2">Total Students</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="p-2"><input type="checkbox" /></td>
              <td className="p-2 text-blue-600">{item.code} <br /> {item.name}</td>
              <td className="p-2">{item.board}</td>
              <td className="p-2">{item.location}</td>
              <td className="p-2">{item.admin}</td>
              <td className="p-2">{item.students}</td>
              <td className="p-2 text-green-600 font-medium">{item.status}</td>
              <td className="p-2 flex gap-2">
                <FiEye className="cursor-pointer" />
                <FiEdit className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSchoolsTable;
