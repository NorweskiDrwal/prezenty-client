import React, { Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ModalBody } from 'reactstrap';

const signForm = ({ 
  openRegForm, 
  handleOpenRegForm, 
  registerUser,
  loginUser,
  handleEmailChange,
  handlePassChange, 
  email,
  password 
}) => (
  <Fragment>
    <h4 className="text-center sign__title">Żeby utworzyć listę musisz być zalogowany</h4>

    { !openRegForm && (<ModalBody className="text-center">
      <h5>Logowanie</h5>
      <Form onSubmit={loginUser}>
        <FormGroup>
          <Label>Email</Label>
          <Input 
            value={email} 
            onChange={handleEmailChange} 
            type="email" 
            placeholder="Wpisz tutaj swój adres email" />
        </FormGroup>
        <FormGroup>
          <Label>Hasło</Label>
          <Input 
          value={password} 
          onChange={handlePassChange}
          type="password" 
          placeholder="Wpisz tutaj swoje hasło" />
        </FormGroup>
        <Button 
          block 
          color="primary" 
          type="submit">Zaloguj się</Button>
      </Form>
      <hr />
      <h5>Jeśli nie posiadasz jeszcze konta, <span onClick={handleOpenRegForm}>zarejestruj się!</span></h5>
    </ModalBody>)}

    { openRegForm && (<ModalBody className="text-center">
      <h5>Rejestracja</h5>
      <Form onSubmit={registerUser}>
        <FormGroup>
          <Label>Email</Label>
          <Input 
            value={email} 
            onChange={handleEmailChange} 
            type="email" 
            placeholder="Wpisz tutaj swój adres email" />
        </FormGroup>
        <FormGroup>
          <Label>Hasło</Label>
          <Input 
            value={password} 
            onChange={handlePassChange} 
            type="password" 
            placeholder="Wpisz tutaj swoje hasło" />
        </FormGroup>
        <Label check className="reg__check">
          <Input type="checkbox" required />
          Zgadzam się na <span>Warunki</span> korzystania z serwisu
        </Label>
        <Button 
          block 
          color="success" 
          type="submit">Zarejestruj się</Button>
      </Form>
      <hr />
      <h5>Jeśli posiadasz już konto, <span onClick={handleOpenRegForm}>zaloguj się!</span></h5>
    </ModalBody>)}

  </Fragment>
);

export default signForm;
