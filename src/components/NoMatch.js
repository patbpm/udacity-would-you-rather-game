import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';;


export class NoMatch extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h3">No Match 404 Error</Header>
        <p>Nothing to see here. Please use the menu to try again.</p>
        <p>
            Return to{' '}
            <Link to="/">
              <span className="green">Home Page</span>
            </Link>
         </p>
      </Container>
    );
  }
}

export default NoMatch;