import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Antelope } from "../../types/antelope";
import { getRandomColor, prepareScatterData } from "../../utils/utils";

interface ScatterChartViewProps {
  antelopes: Antelope[];
}

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export default function ScatterChartView({ antelopes }: ScatterChartViewProps) {
  //TODO useMemo here
  //(warning: useMemo won't work if the ScatterChart has a conditional rendering which is currently the case here in App with view === 'chart1)
  const preparedData = prepareScatterData(antelopes);

  const datasets = Object.keys(preparedData).map((k) => ({
    label: k,
    data: preparedData[k],
    backgroundColor: getRandomColor(),
  }));

  const data = {
    datasets,
  };
  return (
    <Scatter
      data={data}
      options={{
        scales: {
          x: {
            title: {
              display: true,
              text: "Weight",
            },
          },
          y: {
            title: {
              display: true,
              text: "Height",
            },
          },
        },
      }}
    />
  );
}
