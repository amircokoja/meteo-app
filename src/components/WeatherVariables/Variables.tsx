import { ViewType, ViewTypeGroup } from "../../models/ViewType";

export interface IVariable {
  text: string;
  query: string;
  type: ViewType;
  group: ViewTypeGroup;
}

const variables = [
  {
    text: "Temperature (2 m)",
    query: "temperature_2m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Relative Humidity (2 m)",
    query: "relativehumidity_2m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Dewpoint (2 m)",
    query: "dewpoint_2m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Apparent Temperature",
    query: "apparent_temperature",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Precipitation (rain + showers + snow)",
    query: "precipitation",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Rain",
    query: "rain",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Showers",
    query: "showers",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Snowfall",
    query: "snowfall",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Snow Depth",
    query: "snow_depth",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Freezinglevel Height",
    query: "freezinglevel_height",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Weathercode",
    query: "weathercode",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Sealevel Pressure",
    query: "pressure_msl",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Surface Pressure",
    query: "surface_pressure",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Cloudcover Total",
    query: "cloudcover",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Cloudcover Low",
    query: "cloudcover_low",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Cloudcover Mid",
    query: "cloudcover_mid",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Cloudcover High",
    query: "cloudcover_high",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Evapotranspiration",
    query: "evapotranspiration",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Reference Evapotranspiration (ET???)",
    query: "et0_fao_evapotranspiration",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Vapor Pressure Deficit",
    query: "vapor_pressure_deficit",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Wind Speed (10 m)",
    query: "windspeed_10m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Wind Speed (80 m)",
    query: "windspeed_80m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Wind Speed (120 m)",
    query: "windspeed_120m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Wind Speed (180 m)",
    query: "windspeed_180m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Wind Direction (10 m)",
    query: "winddirection_10m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Wind Direction (80 m)",
    query: "winddirection_80m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Wind Direction (120 m)",
    query: "winddirection_120m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Wind Direction (180 m)",
    query: "winddirection_180m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Wind Gusts (10 m)",
    query: "windgusts_10m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Temperature (80 m)",
    query: "temperature_80m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Temperature (120 m)",
    query: "temperature_120m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Temperature (180 m)",
    query: "temperature_180m",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group3,
  },
  {
    text: "Soil Temperature (0 cm)",
    query: "soil_temperature_0cm",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group4,
  },
  {
    text: "Soil Temperature (6 cm)",
    query: "soil_temperature_6cm",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group4,
  },
  {
    text: "Soil Temperature (18 cm)",
    query: "soil_temperature_18cm",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group4,
  },
  {
    text: "Soil Temperature (54 cm)",
    query: "soil_temperature_54cm",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group4,
  },
  {
    text: "Soil Moisture (0-1 cm)",
    query: "soil_moisture_0_1cm",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group4,
  },
  {
    text: "Soil Moisture (1-3 cm)",
    query: "soil_moisture_1_3cm",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group4,
  },
  {
    text: "Soil Moisture (3-9 cm)",
    query: "soil_moisture_3_9cm",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group4,
  },
  {
    text: "Soil Moisture (9-27 cm)",
    query: "soil_moisture_9_27cm",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group4,
  },
  {
    text: "Soil Moisture (27-81 cm)",
    query: "soil_moisture_27_81cm",
    type: ViewType.Hourly,
    group: ViewTypeGroup.Group4,
  },
  {
    text: "Weathercode",
    query: "weathercode",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Maximum Temperature (2 m)",
    query: "temperature_2m_max",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Minimum Temperature (2 m)",
    query: "temperature_2m_min",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Maximum Apparent Temperature (2 m)",
    query: "apparent_temperature_max",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Minimum Apparent Temperature (2 m)",
    query: "apparent_temperature_min",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Sunrise",
    query: "sunrise",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Sunset",
    query: "sunset",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group1,
  },
  {
    text: "Precipitation Sum",
    query: "precipitation_sum",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Rain Sum",
    query: "rain_sum",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Showers Sum",
    query: "showers_sum",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Snowfall Sum",
    query: "snowfall_sum",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Precipitation Hours",
    query: "precipitation_hours",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Maximum Wind Speed (10 m)",
    query: "windspeed_10m_max",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Maximum Wind Gusts (10 m)",
    query: "windgusts_10m_max",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Dominant Wind Direction (10 m)",
    query: "winddirection_10m_dominant",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Shortwave Radiation Sum",
    query: "shortwave_radiation_sum",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group2,
  },
  {
    text: "Reference Evapotranspiration (ET???)",
    query: "et0_fao_evapotranspiration",
    type: ViewType.Daily,
    group: ViewTypeGroup.Group2,
  },
];

export default variables;
