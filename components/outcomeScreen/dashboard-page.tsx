// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js"
// import { Line, Bar, Doughnut } from "react-chartjs-2"

// // Register ChartJS components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

// export default function DashboardPage() {
//   // Line chart data
//   const lineChartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//     datasets: [
//       {
//         label: "Series 1",
//         data: [65, 75, 85, 80, 70, 85, 90],
//         borderColor: "rgb(59, 130, 246)",
//         tension: 0.4,
//       },
//       {
//         label: "Series 2",
//         data: [70, 80, 75, 85, 75, 80, 70],
//         borderColor: "rgb(16, 185, 129)",
//         tension: 0.4,
//       },
//     ],
//   }

//   // Bar chart data
//   const barChartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
//     datasets: [
//       {
//         label: "2023",
//         data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 45],
//         backgroundColor: "rgb(59, 130, 246)",
//       },
//       {
//         label: "2024",
//         data: [45, 70, 60, 75, 50, 65, 55, 40, 55, 35],
//         backgroundColor: "rgb(147, 197, 253)",
//       },
//     ],
//   }

//   // Doughnut chart data
//   const doughnutChartData = {
//     labels: ["Group A", "Group B", "Group C", "Group D"],
//     datasets: [
//       {
//         data: [40, 30, 20, 10],
//         backgroundColor: ["rgb(59, 130, 246)", "rgb(16, 185, 129)", "rgb(251, 146, 60)", "rgb(147, 197, 253)"],
//       },
//     ],
//   }

//   return (
//     <div className="container mx-auto p-4 space-y-4">
//       {/* Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         <MetricCard title="Inventory Clusters" value="8000" icon="📦" />
//         <MetricCard title="Training Completed" value="5" icon="✓" />
//         <MetricCard title="No. of Suppliers" value="102" icon="🏢" />
//         <MetricCard title="Accounts payable" value="500" icon="💰" />
//         <MetricCard title="Reorder Level" value="10.5%" icon="📊" />
//       </div>

//       {/* Charts Row 1 */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Card>
//           <CardContent className="p-4">
//             <h3 className="font-semibold mb-4">Inventory Trend Analysis</h3>
//             <Line
//               data={lineChartData}
//               options={{
//                 responsive: true,
//                 plugins: {
//                   legend: {
//                     position: "bottom" as const,
//                   },
//                 },
//                 scales: {
//                   y: {
//                     beginAtZero: true,
//                   },
//                 },
//               }}
//             />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-4">
//             <h3 className="font-semibold mb-4">Inventory Value by Purchase</h3>
//             <Bar
//               data={barChartData}
//               options={{
//                 responsive: true,
//                 plugins: {
//                   legend: {
//                     position: "bottom" as const,
//                   },
//                 },
//                 scales: {
//                   y: {
//                     beginAtZero: true,
//                   },
//                 },
//               }}
//             />
//           </CardContent>
//         </Card>
//       </div>

//       {/* Charts Row 2 */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card className="md:col-span-1">
//           <CardContent className="p-4">
//             <h3 className="font-semibold mb-4">Known Plan Run Details</h3>
//             <div className="space-y-2">
//               {planRunData.map((plan, index) => (
//                 <PlanRunRow key={index} {...plan} />
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-4">
//             <h3 className="font-semibold mb-4">Similar Clusters</h3>
//             <div className="w-full max-w-[300px] mx-auto">
//               <Doughnut
//                 data={doughnutChartData}
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: {
//                       position: "bottom" as const,
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-4">
//             <h3 className="font-semibold mb-4">Product Stock Details</h3>
//             <Bar
//               data={{
//                 labels: ["P1", "P2", "P3", "P4", "P5", "P6"],
//                 datasets: [
//                   {
//                     label: "Stock Level",
//                     data: [65, 59, 80, 81, 56, 55],
//                     backgroundColor: "rgb(59, 130, 246)",
//                   },
//                 ],
//               }}
//               options={{
//                 responsive: true,
//                 plugins: {
//                   legend: {
//                     display: false,
//                   },
//                 },
//                 scales: {
//                   y: {
//                     beginAtZero: true,
//                   },
//                 },
//               }}
//             />
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

// // Metric Card Component
// function MetricCard({ title, value, icon }: { title: string; value: string; icon: string }) {
//   return (
//     <Card>
//       <CardContent className="p-4">
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm text-muted-foreground">{title}</p>
//             <h3 className="text-2xl font-bold">{value}</h3>
//           </div>
//           <span className="text-2xl">{icon}</span>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// // Plan Run Row Component
// function PlanRunRow({
//   name,
//   progress,
//   accuracy,
//   date,
//   status,
// }: {
//   name: string
//   progress: string
//   accuracy: string
//   date: string
//   status: "completed" | "failed"
// }) {
//   return (
//     <div className="flex items-center justify-between text-sm p-2 hover:bg-muted rounded-lg">
//       <div className="flex-1">
//         <p className="font-medium">{name}</p>
//         <p className="text-muted-foreground">{progress}</p>
//       </div>
//       <div className="flex items-center gap-4">
//         <span>{accuracy}</span>
//         <span>{date}</span>
//         <span
//           className={`px-2 py-1 rounded-full text-xs ${
//             status === "completed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//           }`}
//         >
//           {status}
//         </span>
//       </div>
//     </div>
//   )
// }

// // Sample plan run data
// const planRunData = [
//   {
//     name: "Inventory Search",
//     progress: "100.0%",
//     accuracy: "1,234",
//     date: "28 Jan 2024",
//     status: "completed" as const,
//   },
//   {
//     name: "Product Search",
//     progress: "99.6%",
//     accuracy: "1,234",
//     date: "27 Mar 2024",
//     status: "completed" as const,
//   },
//   {
//     name: "Warehouse Plan",
//     progress: "100.0%",
//     accuracy: "98.7%",
//     date: "27 Jan 2024",
//     status: "completed" as const,
//   },
//   {
//     name: "Logistics Plan",
//     progress: "76.0%",
//     accuracy: "N/A",
//     date: "27 Jan 2024",
//     status: "failed" as const,
//   },
// ]

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

      <div className="overflow-x-auto">
        <h3 className="font-semibold mb-4">Inventory Table</h3>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Item</th>
              <th className="border px-4 py-2">Stock</th>
              <th className="border px-4 py-2">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Product A</td>
              <td className="border px-4 py-2">500</td>
              <td className="border px-4 py-2">Electronics</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Product B</td>
              <td className="border px-4 py-2">300</td>
              <td className="border px-4 py-2">Furniture</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Product C</td>
              <td className="border px-4 py-2">800</td>
              <td className="border px-4 py-2">Clothing</td>
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
