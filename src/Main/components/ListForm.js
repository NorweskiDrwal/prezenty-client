import React from 'react';

const listForm = () => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <h1 className="title is-large">
        Wyświetl listę
      </h1>
      <form className="field">
        <div className="control">
          <input className="input is-large" type="text" placeholder="Wpisz nazwę listy" />
        </div>
      </form>
    </div>
  </div>
);

export default listForm;
