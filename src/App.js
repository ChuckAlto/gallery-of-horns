import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import SelectedBeast from './SelectedBeast'
import data from './data.json'


import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      animal: { title: 'some beast' },
      data: data,
      filteredBeasts: data
    }
  }

  handleShow = (animal) => {
    this.setState({
      show: true,
      animal
    })
  }
  handleClose = () => {
    this.setState({
      show: false
    })
  }
  hornedFilter = (event) => {
    event.preventDefault()
    let newHorned = parseInt(event.target.value)
    let newVar = this.state.data.filter(beast => beast.horns === newHorned)
    this.setState({
      filteredBeasts: newVar,
    })
    console.log(newVar);
  }


  render() {
    return (
      <>
        <Header />
          <Container>
            <Form onChange={this.hornedFilter}>
              <Form.Group controlId="selected">
                <Form.Select  >
                  <option value={"1", "2", "3", "100"}>Select How Many Horns You Want to See?</option>
                  <option value="1">1 Horn</option>
                  <option value="2">2 Horns</option>
                  <option value="3">3 Horns</option>
                  <option value="100">100 Horns</option>
                </Form.Select>

              </Form.Group>
            </Form>
          </Container>
          <SelectedBeast
            show={this.state.show}
            handleClose={this.handleClose}
            animal={this.state.animal}
          />


          <Main data={this.state.filteredBeasts} handleShow={this.handleShow} />
          <Footer />
      </>
        )
  }
}

        export default App;
