import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Logo from "../static/icon/UBook";

const ResumePartyTop = () => {
  const content =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium kjsndjs doloremque laudantium, totam rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium kjsndjs doloremque laudantium, totam rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium kjsndjs doloremque laudantium, totam rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium kjsndjs doloremque laudantium, totam rem aperiam, eaque ipsa quae";

  return (
    <Card className="flex-grow my-4">
      <CardBody>
        <Typography variant="h4" className="mb-2">
          History
        </Typography>
        <Typography>{content}</Typography>
      </CardBody>
    </Card>
  );
};

export default ResumePartyTop;
