import React from 'react';

import { Card, CardImg, CardImgOverlay, CardTitle  } from 'reactstrap';

const addImage = () => (
  <Card className="addImg">
    <CardImg top width="100%" height="300px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    <CardImgOverlay>
      <CardTitle>Lista oczywista</CardTitle>
    </CardImgOverlay>
  </Card>
)

export default addImage;
