import React from 'react';
import { Card, Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';

const mainForm = () => (
  <Card>
    <h1>Lista prezentów</h1>
    <h3>Wpisz poniżej nazwę listy lub swój adres email:</h3>
    <Form>
      <FormGroup>
        <Input size="lg" />
        <Button className="pr-110" size="lg" type="submit">Przejdź</Button>
      </FormGroup>
    </Form>
  </Card>
);

export default mainForm;
