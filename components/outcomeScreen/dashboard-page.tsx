"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { FC } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardPage: FC = () => {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Series 1",
        data: [65, 75, 85, 80, 70, 85, 90],
        borderColor: "rgb(59, 130, 246)",
        tension: 0.4,
      },
      {
        label: "Series 2",
        data: [70, 80, 75, 85, 75, 80, 70],
        borderColor: "rgb(16, 185, 129)",
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 150, 250],
        backgroundColor: "rgb(99, 102, 241)",
      },
    ],
  };

  const stackedBarChartData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "2023",
        data: [300, 500, 700, 600],
        backgroundColor: "#4F46E5",
      },
      {
        label: "2024",
        data: [400, 600, 800, 700],
        backgroundColor: "#10B981",
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#f87171", "#60a5fa", "#34d399"],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <MetricCard title="Inventory Clusters" value="8000" icon="📦" />
        <MetricCard title="Training Completed" value="5" icon="✓" />
        <MetricCard title="No. of Suppliers" value="102" icon="🏢" />
        <MetricCard title="Accounts payable" value="500" icon="💰" />
        <MetricCard title="Reorder Level" value="10.5%" icon="📊" />
      </div>
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4">Outcomes Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Outcome 1</h4>
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image 1</span>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Outcome 2</h4>
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image 2</span>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Outcome 3</h4>
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image 3</span>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Outcome 4</h4>
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image 4</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">Inventory Trend Analysis</h3>
            <Line data={lineChartData} options={{ responsive: true }} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">Sales Performance</h3>
            <Bar data={barChartData} options={{ responsive: true }} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">Category Distribution</h3>
            <Doughnut data={doughnutChartData} options={{ responsive: true }} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">Quarterly Sales</h3>
            <Bar data={stackedBarChartData} options={{ responsive: true, plugins: { legend: { position: "top" } }, scales: { x: { stacked: true }, y: { stacked: true } } }} />
          </CardContent>
        </Card>
      </div>

      {/* New Outcomes Section */}


      <div className="overflow-x-auto bg-app-primary rounded-lg shadow-md">
        <div className="flex justify-between items-center p-4 border-b border-app-primaryBorder">
          <h3 className="font-semibold text-app-textPrimary mb-0">Known Plan Run Details</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-app-inputBg text-app-textPrimary placeholder-app-textSecondary p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-buttonActive w-48"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-app-textSecondary">🔍</span>
          </div>
        </div>
        <table className="min-w-full text-app-textPrimary">
          <thead>
            <tr className="bg-app-secondary text-left">
              <th className="border-b border-app-primaryBorder px-4 py-2">Name</th>
              <th className="border-b border-app-primaryBorder px-4 py-2">Progress</th>
              <th className="border-b border-app-primaryBorder px-4 py-2">Accuracy</th>
              <th className="border-b border-app-primaryBorder px-4 py-2">Date</th>
              <th className="border-b border-app-primaryBorder px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-app-primaryBorder px-4 py-2">Similarity Search</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">100.0%</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">1.234</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">28 Jan 2024</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">
                <span className="bg-green-500 text-app-textPrimary px-2 py-1 rounded">Completed</span>
              </td>
            </tr>
            <tr>
              <td className="border-b border-app-primaryBorder px-4 py-2">Planned Search</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">99.0%</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">1.234</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">27 Mar 2024</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">
                <span className="bg-green-500 text-app-textPrimary px-2 py-1 rounded">Completed</span>
              </td>
            </tr>
            <tr>
              <td className="border-b border-app-primaryBorder px-4 py-2">Unknown Plan</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">100.0%</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">98.7%</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">27 Jun 2024</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">
                <span className="bg-green-500 text-app-textPrimary px-2 py-1 rounded">Completed</span>
              </td>
            </tr>
            <tr>
              <td className="border-b border-app-primaryBorder px-4 py-2">Alert</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">10.0%</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">Nil</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">27 Jan 2024</td>
              <td className="border-b border-app-primaryBorder px-4 py-2">
                <span className="bg-red-500 text-app-textPrimary px-2 py-1 rounded">Inactive</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  icon: string;
}

const MetricCard: FC<MetricCardProps> = ({ title, value, icon }) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
          </div>
          <span className="text-2xl">{icon}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPage;