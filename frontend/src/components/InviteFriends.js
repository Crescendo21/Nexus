import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const Frame14 = (props) => {
  return (
    <Card className="mt-6 mr-6">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2" style={{ fontFamily: "Ubuntu" }}>
          Invite your friends
        </Typography>
        <Typography style={{ fontFamily: "Ubuntu", fontSize: "large" }}>
          Code : sdi3ou2u8u8scjdwu38ndwjkdnsa8
        </Typography>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {Array(8).fill().map((_, index) => (
            <div className="flex-grow-0 flex-shrink-0 w-full h-24 rounded-lg bg-gray-300 mx-auto" key={index} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Frame14;
