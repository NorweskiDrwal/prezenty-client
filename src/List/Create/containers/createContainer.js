import React, { Component } from 'react';

import AddImage from '../components/AddImage';
import AddDetails from '../components/AddDetails';
import AddItem from '../components/AddItem';
import List from '../../../common/List';

class listCreateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      items: []
    }
  }

  handleChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      items: [...this.state.items, {name: this.state.name}]
    });
    console.log(this.state.items);
  }

  render() {
    return (  
      <div className="create--list">
        <AddImage />
        <AddDetails />
        <AddItem 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <List 
          name={this.state.name}
          items={this.state.items} />
      </div>
    );
  }
}

export default listCreateContainer;
