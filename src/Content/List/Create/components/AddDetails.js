import React from 'react';

import { Card, Label, CardSubtitle, Input, Form, FormGroup } from 'reactstrap';
import { Row, Col } from 'reactstrap';

const addItem = () => (
  <Card>
    <CardSubtitle>Szczegółowe informacje</CardSubtitle>
    <Form>
      <FormGroup>
        <Label>Nazwa listy</Label>
        <Input size="lg" placeholder="Wpisz tutaj nazwę listy" required />
      </FormGroup>
      <hr />
      <FormGroup>
        <Row>
          <Col md="6">
              <Label>Opiekun listy</Label>
              <Input size="lg" placeholder="Wpisz tutaj imię i nazwisko opiekuna listy"/>
          </Col>
          <Col md="6">  
            <Label>Numer kontaktowy</Label>
            <Input size="lg" placeholder="Wpisz tutaj numer kontaktowy opiekuna listy"/>
          </Col>
        </Row>
        <FormGroup>
          <Label>Adres email</Label>
          <Input type="email" size="lg" placeholder="Wpisz tutaj adres email opiekuna listy" required /> 
        </FormGroup>
      </FormGroup>
      <hr />
      <FormGroup>
        <Row>
          <Col md="6">
            <Label>Data wydarzenia</Label>
            <div className="fake__input"><Input id="data" type="date" /></div>
          </Col>
          <Col md="6">  
            <Label>Lokalizacja</Label>
            <Input size="lg" placeholder="Wpisz tutaj miejscowość wydarzenia"/>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  </Card>
)

export default addItem;
