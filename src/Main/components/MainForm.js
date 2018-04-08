import React from 'react';
import { Card, Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom'

const mainForm = () => (
  <Card>
    <h1>Lista prezentów</h1>
    <h3>
      Wpisz poniżej nazwę listy lub swój adres email:
    </h3>
    <Form>
      <FormGroup>
        <Input size="lg" />
        <Button className="pr-110" size="lg" type="submit">Przejdź</Button>
      </FormGroup>
    </Form>
    <h3>
      Lub <Link to="/utworz-nowa-liste"><strong>stwórz nową listę prezentów!</strong></Link>
    </h3>
  </Card>
);

export default mainForm;
