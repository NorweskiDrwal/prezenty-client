import React from 'react';

import { Card, CardText, Input, Label, Button, Form, FormGroup  } from 'reactstrap';

const addItem = ({name, handleChange, handleSubmit}) => (
  <Card>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Nazwa prezentu</Label>
        <Input 
          className="pr-110" 
          size="lg" 
          placeholder="Wpisz tutaj nazwę prezentu"
          value={name}
          onChange={handleChange} />
        <Button 
          size="lg" 
          type="submit" disabled={name === '' ? true : false} >
          Dodaj</Button>
      </FormGroup>
    </Form>
    <CardText>Dodaj szczegóły</CardText>
  </Card>
)

export default addItem;
