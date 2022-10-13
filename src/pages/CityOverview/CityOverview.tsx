import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import WeatherVariables from "../../components/WeatherVariables/WeatherVariables";
import { ViewType } from "../../models/ViewType";
import styles from "./city.module.scss";

const CityOverview = () => {
  const params = useParams();
  const location = useLocation();
  const { id } = params;
  const lat = location.state?.lat;
  const lng = location.state?.lng;
  const [viewType, setViewType] = useState<ViewType | "default">("default");
  const navigate = useNavigate();

  useEffect(() => {
    if (!lat || !lng) {
      navigate("/search");
    }
  }, [lat, lng]);

  return (
    <Sidebar>
      <div className={styles.city}>
        <h1>Meteorologic data for {id}</h1>
        <FormControl fullWidth className={styles.select}>
          <InputLabel id="view-type-select">Select view type</InputLabel>
          <Select
            labelId="view-type-select"
            id="view-type-select"
            value={viewType}
            label="Select view type"
            onChange={(event: any) => setViewType(event.target.value)}
          >
            <MenuItem value="default" disabled selected>
              Select
            </MenuItem>
            <MenuItem value={ViewType.Hourly}>Hourly View</MenuItem>
            <MenuItem value={ViewType.Daily}>Daily View</MenuItem>
          </Select>
        </FormControl>
        {viewType !== "default" && (
          <WeatherVariables viewType={viewType} lng={lng} lat={lat} />
        )}
      </div>
    </Sidebar>
  );
};

export default CityOverview;
