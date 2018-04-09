import React, { Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ModalBody } from 'reactstrap';

const signForm = ({ openRegForm, handleOpenRegForm }) => (
  <Fragment>
    <ModalBody className="text-center">
      <h4>Żeby utworzyć listę musisz się zalogować:</h4>
      <Form inline>
        <Input className="mb-2 mr-sm-2 mb-sm-0" type="email" placeholder="Email" />
        <Input className="mb-2 mr-sm-2 mb-sm-0" type="password" placeholder="Hasło" />
        <Button>Zaloguj</Button>
      </Form>
    <hr />
      <h5>Jeśli nie posiadasz jeszcze konta, <span onClick={handleOpenRegForm}>zarejestruj się!</span></h5>
      { openRegForm && (<Form>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Wpisz tutaj swój adres email" />
        </FormGroup>
        <FormGroup>
          <Label>Hasło</Label>
          <Input type="password" placeholder="Wpisz tutaj swoje hasło" />
        </FormGroup>
        <Button block>Zarejestruj</Button>
      </Form>)}
      <hr />
      <p>Lub zaloguj się przy użyciu:</p>
    </ModalBody>
  </Fragment>
);

export default signForm;
