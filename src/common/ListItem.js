import React from 'react';

import { Card, CardTitle, Button } from 'reactstrap';

const listItem = ({name}) => (
  <Card className="list__item">
    <CardTitle>{name}</CardTitle>
    <Button>Zadeklaruj się</Button>
  </Card>
)

export default listItem;
