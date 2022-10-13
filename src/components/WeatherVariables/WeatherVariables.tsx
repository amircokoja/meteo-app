import {
  Alert,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Snackbar,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import config from "../../config/api.config";
import { IAxis } from "../../models/Chart";
import { IMeteoResponse } from "../../models/MeteoResponse";
import { ViewType } from "../../models/ViewType";
import {
  generateQueryString,
  generateSecondQueryString,
  generateVariables,
  getChartData,
} from "../../utils/utils";
import { IVariable } from "./Variables";
import styles from "./weather.module.scss";
import Chart from "../Chart/Chart";
import EmptyIcon from "../../assets/icons/empty.png";
import { Store } from "../../store/Store";

interface Props {
  viewType: ViewType;
  lng: string;
  lat: string;
}

const WeatherVariables = (props: Props) => {
  const variables: IVariable[][] = generateVariables(props.viewType);
  const [checked, setChecked] = useState<string[]>([]);
  const [yAxis, setYAxis] = useState<IAxis[]>([]);
  const [chartData, setChartData] = useState<null | any>(null);
  const [dataKeys, setDataKeys] = useState<string[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const store = useContext(Store);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    variable: IVariable
  ) => {
    const copy = checked.slice();
    const includes = checked.includes(variable.query);
    if (event.target.checked) {
      if (!includes) {
        copy.push(variable.query);
      }
    } else {
      if (includes) {
        const index = copy.indexOf(variable.query);
        if (index > -1) {
          copy.splice(index);
        }
      }
    }
    setChecked(copy);
  };

  useEffect(() => {
    setChecked([]);
  }, [props.viewType]);

  useEffect(() => {
    if (checked.length > 0) {
      const queryString = generateQueryString(
        props.lng,
        props.lat,
        checked,
        props.viewType
      );

      const secondQuery = generateSecondQueryString(
        store.temperatureUnit,
        store.windSpeedUnit,
        store.precipitationUnit,
        store.timezone,
        store.pastDays
      );

      fetch(`${config.endpoint}${queryString}${secondQuery}`)
        .then((response) => {
          return response.json();
        })
        .then((data: IMeteoResponse) => {
          if (data.error) {
            setError(data.reason);
            setChartData(null);
            setYAxis([]);
            setDataKeys([]);
          } else {
            const chartDataResponse = getChartData(data, props.viewType);
            setChartData(chartDataResponse.data);
            setYAxis(chartDataResponse.yAxis);
            setDataKeys(chartDataResponse.keys);
          }
        });
    }
  }, [checked]);

  const handleClose = () => {
    setError(undefined);
  };

  return (
    <>
      <h3 className={styles.title}>
        {props.viewType === ViewType.Daily ? "Daily" : "Hourly"} Weather
        Variables{props.viewType === ViewType.Daily && " (*)"}
      </h3>
      <div className={styles.variables}>
        {variables.map((variableGroup: IVariable[], index: number) => (
          <Box key={index} className={styles.group}>
            <FormGroup>
              {variableGroup.map((variable: IVariable, secondIndex: number) => (
                <FormControlLabel
                  key={secondIndex}
                  control={
                    <Checkbox
                      checked={checked.includes(variable.query)}
                      sx={{ padding: "5px" }}
                      onChange={(e: any) => handleChange(e, variable)}
                    />
                  }
                  label={variable.text}
                />
              ))}
            </FormGroup>
          </Box>
        ))}
      </div>
      {dataKeys.length > 0 && checked.length > 0 ? (
        <div className={styles.chart}>
          <Chart chartData={chartData} dataKeys={dataKeys} yAxis={yAxis} />
        </div>
      ) : (
        <div className={styles.empty}>
          <img src={EmptyIcon} alt="Empty" />
          <h3>Please select any variable to display chart</h3>
        </div>
      )}

      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default WeatherVariables;
