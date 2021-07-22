import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardText, CardTitle, CardActions } from 'react-mdl';

const TourPackages = () => {
  const [showMore, setShowMore] = useState(true);
  
  const renderShowMore = () => {
    if (showMore) {
      return <shortDescription>
      </shortDescription>
    }
    return <longDescription>
    </longDescription>
  };

    return (
      <>
        <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
          <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
          <CardText>
            {/* renderShowMore in database has descriptionSummary and descriptionComplete  */}
            {renderShowMore()}
             <Link onClick={() => setShowMore((prev) => !prev)}>show more...</Link>
          </CardText>
          <CardActions border>
            <Button colored>View Updates</Button>
          </CardActions>
        </Card>
      </>
    )
  }

  export default TourPackages;