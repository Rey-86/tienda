import { Card, Button } from 'react-bootstrap'

function Producto (props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.value.imagen} />
      <Card.Body>
        <Card.Title>{props.value.nombre}</Card.Title>
        <Card.Text>
          {props.value.descripcion}
        </Card.Text>
        <Card.Text>
          {props.value.precio}€
          </Card.Text>
        <Button variant='primary'>Añadir al carrito</Button>
      </Card.Body>
    </Card>
  )
}
export default Producto;