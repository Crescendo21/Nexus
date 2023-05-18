import React, { useState } from "react";
import Logo from "../static/icon/UBook";
import { Switch, Card, CardBody, Typography } from "@material-tailwind/react";
import Slider from "@mui/material/Slider";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const valuetext = (value) => `${value}°C`;

const Frame17 = (props) => {
  const [switchState, setSwitchState] = useState(Array(6).fill(false));

  const handleSwitchChange = (index) => {
    let newSwitchState = [...switchState];
    newSwitchState[index] = !newSwitchState[index];
    setSwitchState(newSwitchState);
  };

  return (
    <div className="grid grid-cols-2 gap-4 pr-6">

        <Card className="mt-3">
          <CardBody>
            <div className="mb-2">
              <Typography variant="h5" color="blue-gray" style={{ fontFamily: "Poppins", fontSize: "medium" }}>
                Slider - Select difficulty
              </Typography>
              <Typography style={{ fontFamily: "Poppins", fontSize: "small" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
            <div className="mb-2 mt-4">
              <Typography variant="h5" color="blue-gray" style={{ fontFamily: "Poppins", fontSize: "medium" }}>
                Liberty - Select the liberty of the player
              </Typography>
              <Typography style={{ fontFamily: "Poppins", fontSize: "small" }}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </div>
            <Slider
              aria-label="Liberty"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </CardBody>
        </Card>
      <Card className="mt-3">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2" style={{ fontFamily: "Poppins" }}>
            Select settings
          </Typography>
          <Typography style={{ fontFamily: "Poppins", fontSize: "small" }}>
            Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.
          </Typography>
          <div className="mt-4 flex flex-col space-y-2">
            {Array(6).fill().map((_, index) => (
              <Switch
                key={index}
                id={`switch-${index}`}
                checked={switchState[index]}
                onChange={() => handleSwitchChange(index)}
                label={<Typography color="blue-gray" className="font-medium" style={{ fontFamily: "Poppins" }}>Switcher Text</Typography>}
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Frame17;
