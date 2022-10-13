import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../../store/Store";
import styles from "./settings.module.scss";
import {
  Timezones,
  PastDays,
  TemperatureValues,
  WindSpeedValues,
  PrecipitationValues,
} from "./SettingsValues";

const Settings = () => {
  const store = useContext(Store);
  const navigate = useNavigate();

  const handleChangeTimezone = (event: any) => {
    store.setTimezone(event.target.value);
  };

  const handleChangePastDays = (event: any) => {
    const index = PastDays.findIndex((a) => a.value === event.target.value);
    if (index > -1) {
      store.setPastDays(PastDays[index]);
    }
  };

  const handleChangeTemeratureUnit = (event: any) => {
    const index = TemperatureValues.findIndex(
      (a) => a.value === event.target.value
    );
    if (index > -1) {
      store.setTemperatureUnit(TemperatureValues[index]);
    }
  };

  const handleChangeWindSpeedUnit = (event: any) => {
    const index = WindSpeedValues.findIndex(
      (a) => a.value === event.target.value
    );
    if (index > -1) {
      store.setWindSpeedUnit(WindSpeedValues[index]);
    }
  };

  const handleChangePrecipitationUnit = (event: any) => {
    const index = PrecipitationValues.findIndex(
      (a) => a.value === event.target.value
    );
    if (index > -1) {
      store.setPrecipitationUnit(PrecipitationValues[index]);
    }
  };

  const handleReset = () => {
    store.handleReset();
  };

  const handleResetFavourites = () => {
    store.setFavouriteCities([]);
  };

  const handleBack = () => {
    navigate("/search");
  };

  return (
    <div className={styles.settings}>
      <h3>Application settings</h3>
      <div className={styles["input-group"]}>
        <FormControl>
          <FormLabel id="temperature-unit" className={styles.title}>
            Temperature Unit
          </FormLabel>
          <RadioGroup
            aria-labelledby="temperature-unit"
            value={store.temperatureUnit.value}
            name="radio-buttons-group"
            onChange={handleChangeTemeratureUnit}
          >
            <div className={styles.group}>
              {TemperatureValues.map((temp) => (
                <FormControlLabel
                  key={temp.value}
                  value={temp.value}
                  control={<Radio />}
                  label={temp.label}
                />
              ))}
            </div>
          </RadioGroup>
        </FormControl>
      </div>
      <div className={styles["input-group"]}>
        <FormControl>
          <FormLabel id="wind-speed-unit" className={styles.title}>
            Wind Speed Unit
          </FormLabel>
          <RadioGroup
            onChange={handleChangeWindSpeedUnit}
            aria-labelledby="wind-speed-unit"
            value={store.windSpeedUnit.value}
            name="radio-buttons-group"
          >
            <div className={styles.group}>
              {WindSpeedValues.map((wind) => (
                <FormControlLabel
                  key={wind.value}
                  value={wind.value}
                  control={<Radio />}
                  label={wind.label}
                />
              ))}
            </div>
          </RadioGroup>
        </FormControl>
      </div>
      <div className={styles["input-group"]}>
        <FormControl>
          <FormLabel id="precipitation-unit" className={styles.title}>
            Precipitation Unit
          </FormLabel>
          <RadioGroup
            onChange={handleChangePrecipitationUnit}
            aria-labelledby="precipitation-unit"
            value={store.precipitationUnit.value}
            name="radio-buttons-group"
          >
            <div className={styles.group}>
              {PrecipitationValues.map((prec) => (
                <FormControlLabel
                  key={prec.value}
                  value={prec.value}
                  control={<Radio />}
                  label={prec.label}
                />
              ))}
            </div>
          </RadioGroup>
        </FormControl>
      </div>
      <div className={styles["input-group"]}>
        <FormControl fullWidth>
          <InputLabel id="timezone">Timezone</InputLabel>
          <Select
            labelId="timezone"
            id="demo-simple-select"
            value={store.timezone}
            label="Timezone"
            onChange={(event) => handleChangeTimezone(event)}
          >
            {Timezones.map((timezone) => (
              <MenuItem value={timezone} key={timezone}>
                {timezone}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={styles["input-group"]}>
        <FormControl fullWidth>
          <InputLabel id="pastdays">Past days</InputLabel>
          <Select
            labelId="pastdays"
            id="pastdays"
            value={store.pastDays.value}
            label="Past days"
            onChange={(event) => handleChangePastDays(event)}
          >
            {PastDays.map((pastday) => (
              <MenuItem value={pastday.value} key={pastday.value}>
                {pastday.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div style={{ marginBottom: "20px" }} className={styles.buttons}>
        <Button onClick={handleReset} variant="outlined" color="error">
          Reset to default
        </Button>
        <Button
          onClick={handleResetFavourites}
          variant="outlined"
          color="error"
        >
          Delete favourites
        </Button>
      </div>
      <div>
        <Button onClick={handleBack} variant="contained">
          Go back to search
        </Button>
      </div>
    </div>
  );
};

export default Settings;
