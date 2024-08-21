import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import CallIcon from '@material-ui/icons/Call';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import "./BottomTabNavigator.scss"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function BottomTabNavigator(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bottom-navigator-wrapper">
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <a href={`tel:${props?.singleProperty?.teams?.phone_number}`}>
          <button className={"BNButton d-flex justify-content-between align-items-center"}>
            <CallIcon className={"iconSize"} />
            <span>
              Call
            </span>
          </button>
        </a>
        <a href={`mailto:${props?.singleProperty?.teams?.email}`}>
          <button className={"BNButton d-flex justify-content-between align-items-center"}>
            <MailOutlineIcon className={"iconSize"} />
            <span>
              Email
            </span>
          </button>
        </a>
        <a href={`https://wa.me/${props?.singleProperty?.teams?.instagram}`} target="_blank" rel="noopener noreferrer">
          <button className={"BNButton d-flex justify-content-between align-items-center"}>
            <WhatsAppIcon className={"iconSize"} />
            <span>
              WhatsApp
            </span>
          </button>
        </a>
      </BottomNavigation>
    </div>
  );
}

export default BottomTabNavigator;
