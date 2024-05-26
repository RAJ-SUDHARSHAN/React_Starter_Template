import { useQuery } from "@tanstack/react-query";
import { getTestApi } from "../../api/testAPI";
import { Table } from "antd";

const TestPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["testAPI"],
    queryFn: () => {
      return getTestApi();
    },
  });

  const columns = data
    ? Object.keys(data[0]).map((key) => ({
        title: key,
        dataIndex: key,
        key: key,
      }))
    : [];

  const rows =
    data && data.length > 0 ? data.map((row) => ({ ...row, key: row.id })) : [];

  console.log(data);
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Table className="p-32" columns={columns} dataSource={rows} />
    </div>
  );
};

export default TestPage;
