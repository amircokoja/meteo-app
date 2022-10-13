import { useContext, useState } from "react";
import { ICity } from "../../models/City";
import { Store } from "../../store/Store";
import styles from "./sidebar.module.scss";
import { useNavigate } from "react-router-dom";
import FavoritesIcon from "../../assets/icons/favourite.png";
import SettingsIcon from "../../assets/icons/setting.png";
import NoDataIcon from "../../assets/icons/empty-folder.png";
import MenuIcon from "../../assets/icons/play.png";
import DeleteIcon from "../../assets/icons/delete.png";
import { sortCities } from "../../utils/utils";

interface Props {
  children?: React.ReactNode;
}

const Sidebar = (props: Props) => {
  const navigate = useNavigate();
  const store = useContext(Store);
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const favouriteCities = sortCities(store.favouriteCities, sort);

  const classes = `${styles["sidebar-container"]}${
    store.navigationHidden ? ` ${styles.hide}` : ""
  }`;

  const handleHideToggle = () => {
    store.setNavigationHidden((prev) => !prev);
  };

  const handleClick = (city: ICity) => {
    navigate(`/city-overview/${city.city}`, { state: city });
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleSortChange = () => {
    setSort((prev) => {
      if (prev === "asc") {
        return "desc";
      }
      return "asc";
    });
  };

  const handleDeleteFavourite = (event: any, city: ICity) => {
    event.stopPropagation();
    const copy = favouriteCities.slice();

    const index = copy.findIndex((a) => a.city === city.city);

    if (index > -1) {
      copy.splice(index, 1);
      store.setFavouriteCities(copy);
    }
  };

  return (
    <div className={classes}>
      <div className={styles.sidebar}>
        <div>
          <div className={styles.group}>
            <div className={styles.title}>
              <h4>Favourites</h4>
              {store.navigationHidden || (
                <div className={styles.menuicon}>
                  <img
                    src={MenuIcon}
                    alt="Menu icon"
                    onClick={handleHideToggle}
                  />
                </div>
              )}
            </div>
            {favouriteCities.length > 0 && (
              <div>
                <span
                  className={styles.sort}
                  onClick={handleSortChange}
                  style={{ cursor: "pointer" }}
                >
                  {sort}
                </span>
              </div>
            )}
            {favouriteCities.map((city: ICity, index: number) => (
              <div
                className={styles.item}
                key={index}
                onClick={() => handleClick(city)}
              >
                <div className={styles.name}>
                  <img className="icon" src={FavoritesIcon} alt="" />
                  <div style={{ marginLeft: "10px" }}>{city.city}</div>
                </div>
                <img
                  onClick={(e) => handleDeleteFavourite(e, city)}
                  className={styles.delete}
                  src={DeleteIcon}
                  alt="Delete"
                />
              </div>
            ))}

            {favouriteCities.length === 0 && (
              <div className={styles["no-data"]}>
                <img src={NoDataIcon} alt="No data" />
                <h3>The favorite city has not been added</h3>
              </div>
            )}
          </div>
        </div>
        <div className={styles.settings}>
          <div className={styles.item} onClick={handleSettingsClick}>
            <div className={styles.name}>
              <img className="icon" src={SettingsIcon} alt="Settings icon" />
              <div style={{ marginLeft: "10px" }}>Settings</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["sidebar-content"]}>
        <div className={styles.header}>
          <div>
            <img src={MenuIcon} alt="Menu icon" onClick={handleHideToggle} />
          </div>
          <h2>Meteo app</h2>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Sidebar;
