export const Timezones = [
  "Select timezone",
  "America/Anchorage",
  "America/Los_Angeles",
  "America/Denver",
  "America/Chicago",
  "America/New_York",
  "America/Sao_Paulo",
  "GMT0",
  "Europe/London",
  "Europe/Berlin",
  "Europe/Moscow",
  "Africa/Cairo",
  "Asia/Bangkok",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Pacific/Auckland",
];

export const PastDays: IOption[] = [
  { value: 0, label: "0" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 5, label: "5" },
  { value: 7, label: "1 week" },
  { value: 14, label: "2 weeks" },
  { value: 31, label: "1 month" },
  { value: 61, label: "2 months" },
  { value: 92, label: "3 months" },
];

export const TemperatureValues: IOption[] = [
  { value: "celsius", label: "Celsius °C" },
  { value: "fahrenheit", label: "Fahrenheit °F" },
];

export const WindSpeedValues: IOption[] = [
  { value: "kmh", label: "Km/h" },
  { value: "ms", label: "m/s" },
  { value: "mph", label: "Mph" },
  { value: "kn", label: "Knots" },
];

export const PrecipitationValues: IOption[] = [
  { value: "mm", label: "Millimeter" },
  { value: "inch", label: "Inch" },
];

export interface IOption {
  value: number | string;
  label: string;
}
