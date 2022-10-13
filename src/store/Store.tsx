import { createContext, useState } from "react";
import { ICity } from "../models/City";
import {
  IOption,
  PastDays,
  PrecipitationValues,
  TemperatureValues,
  Timezones,
  WindSpeedValues,
} from "../pages/Settings/SettingsValues";

type Props = {
  children: React.ReactNode;
};

type Context = {
  favouriteCities: ICity[];
  setFavouriteCities: React.Dispatch<React.SetStateAction<ICity[]>>;
  timezone: string;
  setTimezone: React.Dispatch<React.SetStateAction<string>>;
  pastDays: IOption;
  setPastDays: React.Dispatch<React.SetStateAction<IOption>>;
  temperatureUnit: IOption;
  setTemperatureUnit: React.Dispatch<React.SetStateAction<IOption>>;
  windSpeedUnit: IOption;
  setWindSpeedUnit: React.Dispatch<React.SetStateAction<IOption>>;
  precipitationUnit: IOption;
  setPrecipitationUnit: React.Dispatch<React.SetStateAction<IOption>>;
  handleReset: () => void;
  navigationHidden: boolean;
  setNavigationHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValue: Context = {
  favouriteCities: [],
  setFavouriteCities: () => {},
  timezone: Timezones[0],
  setTimezone: () => {},
  pastDays: PastDays[0],
  setPastDays: () => {},
  precipitationUnit: PrecipitationValues[0],
  setPrecipitationUnit: () => {},
  temperatureUnit: TemperatureValues[0],
  setTemperatureUnit: () => {},
  windSpeedUnit: WindSpeedValues[0],
  setWindSpeedUnit: () => {},
  handleReset: () => {},
  navigationHidden: false,
  setNavigationHidden: () => {},
};

export const Store = createContext<Context>(initialValue);

export const StoreProvider = ({ children }: Props) => {
  const [favouriteCities, setFavouriteCities] = useState<ICity[]>(
    initialValue.favouriteCities
  );
  const [timezone, setTimezone] = useState<string>(initialValue.timezone);
  const [pastDays, setPastDays] = useState<IOption>(initialValue.pastDays);
  const [precipitationUnit, setPrecipitationUnit] = useState<IOption>(
    initialValue.precipitationUnit
  );
  const [temperatureUnit, setTemperatureUnit] = useState<IOption>(
    initialValue.temperatureUnit
  );
  const [windSpeedUnit, setWindSpeedUnit] = useState<IOption>(
    initialValue.windSpeedUnit
  );

  const [navigationHidden, setNavigationHidden] = useState<boolean>(
    initialValue.navigationHidden
  );

  const handleReset = () => {
    setTimezone(initialValue.timezone);
    setPastDays(initialValue.pastDays);
    setPrecipitationUnit(initialValue.precipitationUnit);
    setTemperatureUnit(initialValue.temperatureUnit);
    setWindSpeedUnit(initialValue.windSpeedUnit);
  };

  return (
    <Store.Provider
      value={{
        favouriteCities,
        setFavouriteCities,
        timezone,
        setTimezone,
        pastDays,
        setPastDays,
        precipitationUnit,
        setPrecipitationUnit,
        temperatureUnit,
        setTemperatureUnit,
        windSpeedUnit,
        setWindSpeedUnit,
        handleReset,
        navigationHidden,
        setNavigationHidden,
      }}
    >
      {children}
    </Store.Provider>
  );
};
