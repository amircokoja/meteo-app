import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import randomColor from "randomcolor";
import { IAxis } from "../../models/Chart";
import styles from "./chart.module.scss";

interface Props {
  chartData: null | any;
  yAxis: IAxis[];
  dataKeys: string[];
}

const Chart = (props: Props) => {
  return (
    <>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          className={styles.chart}
          data={props.chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          {props.yAxis.map((value, index) => (
            <YAxis
              key={index}
              yAxisId={value.id}
              label={
                <Label
                  value={value.label}
                  style={{
                    fontSize: "10px",
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                />
              }
              style={{ fontSize: "10px" }}
            />
          ))}

          <Tooltip />
          <Legend />
          {props.dataKeys.map((value: string, index: number) => (
            <Line
              dataKey={value}
              key={index}
              yAxisId={props.yAxis.find((a) => a.dataTypes.includes(value))?.id}
              type="monotone"
              stroke={randomColor()}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
