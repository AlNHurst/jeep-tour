import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Card, CardText, CardTitle, CardActions } from "react-mdl";
import { QUERY_TOURS } from "../../utils/queries";

const TourPackages = () => {
  const [showMore, setShowMore] = useState(true);
  const { data } = useQuery(QUERY_TOURS);

  const tourList = data?.tourPackages || [];

  const renderShowMore = () => {
    if (showMore) {
      return <shortDescription></shortDescription>;
    }
    return <longDescription></longDescription>;
  };

  return (
    <>
      {tourList.map((tour) => {
        return (
          <Card
            shadow={0}
            style={{ width: "320px", height: "320px", margin: "auto" }}
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                background:
                  "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC",
              }}
            >{tour.name}</CardTitle>
            <CardText>
              {/* renderShowMore in database has descriptionSummary and descriptionComplete  */}
              {tour.description}
              {renderShowMore()}
              <Link onClick={() => setShowMore((prev) => !prev)}>
                show more...
              </Link>
              <ul>
              <li>Adult Price: ${tour.adultPrice}</li>
              <li>Child Price: ${tour.childPrice}</li>
              <li>Duration: {tour.duration} hours</li>
              <li>Departure Time: {tour.departureTime}</li>
              </ul>
            </CardText>
            <CardActions border>
              <Button colored>View Updates</Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default TourPackages;
