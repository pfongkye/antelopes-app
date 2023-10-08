import { Antelope } from "../../types/antelope";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getRandomColor, prepareDoughnutData } from "../../utils/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutViewProps {
  antelopes: Antelope[];
}

export default function DoughnutView({ antelopes }: DoughnutViewProps) {
  const preparedData = prepareDoughnutData(antelopes);
  const labels = Object.keys(preparedData);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# Of This Type Horn",
        data: labels.map((l) => preparedData[l]),
        backgroundColor: labels.map(() => getRandomColor(0.2)),
        borderColor: labels.map(() => getRandomColor()),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        height: "80vh",
        width: "80vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Doughnut data={data} />
    </div>
  );
}
