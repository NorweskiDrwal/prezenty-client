import React from 'react';
import { Card, Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom'

const mainForm = () => (
  <Card>
    <h1>Lista prezentów</h1>
    <h3>
      Wpisz poniżej nazwę listy by zobaczyć jej zawartość:
    </h3>
    <Form>
      <FormGroup>
        <Input size="lg" />
        <Button size="lg" type="submit">Przejdź</Button>
      </FormGroup>
    </Form>
    <h3>
      Lub <Link to="/utworz-nowa-liste"><strong>stwórz nową listę prezentową!</strong></Link>
    </h3>
  </Card>
);

export default mainForm;
