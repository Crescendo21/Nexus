// ResumePartyBot.js
import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

const ArcCard = ({ title, content }) => (
  <Card className="h-full mb-2">
    <CardBody className="p-3">
      <Typography variant="h6" className="mb-2">
        {title}
      </Typography>
      <Typography color="gray">{content}</Typography>
    </CardBody>
  </Card>
);

const ResumePartyBot = () => {
  const arcContent =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.  ";
    const questContent =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.";


  return (
    <div className="flex flex-row h-full mb-4">
      <Card className="h-full w-1/4 mb-4 mr-4">
        <CardBody>
          <Typography variant="h4" className="mb-2">
            Quest
          </Typography>
          <Typography>{questContent}</Typography>
        </CardBody>
      </Card>
      <div className="flex flex-col w-3/4">
        <div className="flex-grow grid grid-cols-2 gap-2">
          {Array(6)
            .fill()
            .map((_, index) => (
              <ArcCard title={`Arc ${index + 1}`} content={arcContent} key={index} />
            ))}
        </div>
        <Button color="green" ripple="light" className="w-full mt-2">
          Button
        </Button>
      </div>
    </div>
  );
};

export default ResumePartyBot;
