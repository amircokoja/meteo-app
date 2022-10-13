import Sidebar from "../../components/Sidebar/Sidebar";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import { ICity } from "../../models/City";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import cities from "../../data/cities.json";
import styles from "./search.module.scss";
import { Store } from "../../store/Store";
import SearchImage from "../../assets/search.svg";
import StarIcon from "../../assets/icons/star-full.png";
import StarEmptyIcon from "../../assets/icons/star-empty.png";

const Search = () => {
  const [options, setOptions] = useState<ICity[]>([]);
  const navigate = useNavigate();
  const { favouriteCities, setFavouriteCities } = useContext(Store);
  const [selected, setSelected] = useState<ICity[]>(favouriteCities);

  const handleChange = (value: string) => {
    const results = cities
      .filter((a: ICity) =>
        a.city.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
      .slice(0, 5);
    setOptions(results);
  };

  const handleSelect = (event: any, value: ICity | null) => {
    if (value) {
      navigate(`/city-overview/${value.city}`, { state: value });
    }
  };

  const handleStarClick = (event: any, option: ICity) => {
    event.preventDefault();
    event.stopPropagation();
    const index = selected.findIndex((a) => a.city === option.city);
    const copy = selected.slice();
    if (index > -1) {
      copy.splice(index, 1);
    } else {
      copy.push(option);
    }
    setFavouriteCities(copy);
    setSelected(copy);
  };

  return (
    <Sidebar>
      <div>
        <Autocomplete
          fullWidth={true}
          onChange={(event: any, value: ICity | null) =>
            handleSelect(event, value)
          }
          options={options}
          getOptionLabel={(option: ICity) => option.city || ""}
          renderOption={(props, option: ICity) => (
            <Box
              component="li"
              sx={{
                alignItems: "center",
                padding: "5px",
                height: "50px",
                margin: "0 10px",
                borderRadius: "7px",
              }}
              {...props}
            >
              <div className={styles.item}>
                <div className={styles.city}>{option.city}</div>
                <div
                  className={styles.star}
                  onClick={(e: any) => handleStarClick(e, option)}
                >
                  {selected.findIndex((a) => a.city === option.city) > -1 ? (
                    <img
                      src={StarIcon}
                      alt="Star full"
                      className={styles.icon}
                    />
                  ) : (
                    <img
                      src={StarEmptyIcon}
                      alt="Star empty"
                      className={styles.icon}
                    />
                  )}
                </div>
              </div>
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              sx={{
                borderRadius: "50px",
              }}
              {...params}
              fullWidth={true}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(event: any) => {
                handleChange(event?.target.value);
              }}
              label="Search..."
            />
          )}
        />
      </div>
      <div className={styles.search}>
        <img src={SearchImage} alt="Search image" />
        <h3>Search</h3>
        <p>Begin your search...</p>
      </div>
    </Sidebar>
  );
};

export default Search;
