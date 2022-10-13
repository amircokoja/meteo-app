import variables, { IVariable } from "../components/WeatherVariables/Variables";
import { IAxis } from "../models/Chart";
import { ICity } from "../models/City";
import { IMeteoResponse } from "../models/MeteoResponse";
import { ViewType, ViewTypeGroup } from "../models/ViewType";
import {
  IOption,
  PastDays,
  PrecipitationValues,
  TemperatureValues,
  Timezones,
  WindSpeedValues,
} from "../pages/Settings/SettingsValues";

export const generateVariables = (viewType: ViewType): IVariable[][] => {
  const group1 = variables.filter(
    (a) => a.type === viewType && a.group === ViewTypeGroup.Group1
  );
  const group2 = variables.filter(
    (a) => a.type === viewType && a.group === ViewTypeGroup.Group2
  );
  var groups: IVariable[][] = [group1, group2];
  if (viewType === ViewType.Hourly) {
    const group3 = variables.filter(
      (a) => a.type === viewType && a.group === ViewTypeGroup.Group3
    );
    const group4 = variables.filter(
      (a) => a.type === viewType && a.group === ViewTypeGroup.Group4
    );
    groups = [...groups, group3, group4];
  }

  return groups;
};

export const generateQueryString = (
  lng: string,
  lat: string,
  variables: string[],
  type: ViewType
): string => {
  let query = `?latitude=${lat}&longitude=${lng}`;

  if (variables.length > 0) {
    let variableQuery = "";
    variables.forEach((variable) => {
      variableQuery += `${variable},`;
    });
    variableQuery = variableQuery.substring(0, variableQuery.length - 1);

    if (type === ViewType.Hourly) {
      query += `&hourly=${variableQuery}`;
    } else {
      query += `&daily=${variableQuery}`;
    }
  }
  return query;
};

export const getChartData = (data: IMeteoResponse, viewType: ViewType) => {
  var yAxis: IAxis[] = [];
  var responseData: any = null;

  let typeObject: any = undefined;
  let typeObjectUnits: any = undefined;
  let keys: string[] = [];

  if (viewType === ViewType.Hourly) {
    typeObject = data.hourly;
    typeObjectUnits = data.hourly_units;
  } else {
    typeObject = data.daily;
    typeObjectUnits = data.daily_units;
  }

  if (typeObject) {
    keys = Object.keys(typeObject!);

    var index = keys.findIndex((a) => a === "time");

    if (index > -1) {
      keys.splice(index, 1);
    }

    for (var i = 0; i < keys.length; i++) {
      var value = typeObjectUnits![keys[i]!];
      const index = yAxis.findIndex((a) => a.label === value);
      if (index === -1) {
        yAxis.push({
          id: (i + 1).toString(),
          label: typeObjectUnits![keys[i]!],
          dataTypes: [keys[i]],
        });
      } else {
        yAxis[index].dataTypes = [...yAxis[index].dataTypes, keys[i]];
      }
    }

    responseData = [];
    for (var i = 0; i < typeObject!.time.length; i++) {
      const obj: any = {};
      for (var j = 0; j < keys.length; j++) {
        var newKey = keys[j];
        if (newKey === "time") {
          continue;
        }
        obj[newKey] = typeObject[keys[j]][i];
      }
      responseData.push(obj);
    }
  }

  return { yAxis, data: responseData, keys };
};

export const generateSecondQueryString = (
  temperature: IOption,
  windSpeed: IOption,
  precipitation: IOption,
  timezone: string,
  pastDays: IOption
) => {
  var query = "";
  if (temperature.value !== TemperatureValues[0].value) {
    query += `&temperature_unit=${temperature.value}`;
  }

  if (windSpeed.value !== WindSpeedValues[0].value) {
    query += `&windspeed_unit=${windSpeed.value}`;
  }

  if (precipitation.value !== PrecipitationValues[0].value) {
    query += `&precipitation_unit=${precipitation.value}`;
  }

  if (timezone !== Timezones[0]) {
    query += `&timezone=${timezone}`;
  }

  if (pastDays.value !== PastDays[0].value) {
    query += `&past_days=${pastDays.value}`;
  }

  return query;
};

export const sortCities = (array: ICity[], sortType: "desc" | "asc") => {
  if (sortType === "asc") {
    return array.sort(function (a: ICity, b: ICity) {
      if (a.city > b.city) {
        return 1;
      }
      if (b.city > a.city) {
        return -1;
      }
      return 0;
    });
  } else {
    return array.sort(function (a: ICity, b: ICity) {
      if (a.city > b.city) {
        return -1;
      }
      if (b.city > a.city) {
        return 1;
      }
      return 0;
    });
  }
};
