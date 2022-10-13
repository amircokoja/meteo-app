export interface IMeteoResponse {
  elevation: number;
  generationtime_ms: number;
  hourly?: any;
  hourly_units?: any;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
  daily?: any;
  daily_units?: any;
  error?: boolean;
  reason?: string;
}
