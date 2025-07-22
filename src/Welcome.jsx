import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';

function Welcome() {
  return (
    <Container fluid className='bg-warning-subtle py-2'>
    <Alert variant="light" className='text-center border-1 border-warning w-50 mx-auto my-0'>
      <Alert.Heading>CatZilla Library</Alert.Heading>
      <p>
     La tua e-library preferita!
      </p>
    </Alert>
    </Container>
  );
}

export default Welcome;