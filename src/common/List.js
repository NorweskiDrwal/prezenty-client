import React, { Fragment } from 'react';

import ListItem from './ListItem';

const list = ({ items, name }) => (
  <Fragment>
    {items.map(item => (
      <ListItem 
      {...item} 
      items={items} 
      key={item.name + 1} />
    ))}
  </Fragment>
)

export default list;
