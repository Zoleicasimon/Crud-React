import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const CrearProducto = () => {

//para capturar el valor de los input se crea un state por cada input
const [Producto,setProducto]=useState('');
const [Descripcion,setDescripcion]=useState('');
const [Categoria,setCategoria]=useState('');

//similar a funcion guardar registro de JS
  const handlesubmit=(e)=>{
  e.preventDefault();
  console.log('desde submit')
  const NvoProducto= {
    producto: Producto,
    descripcion: Descripcion,
    categoria: Categoria,
  }
 console.log('Nuevo producto', NvoProducto)
;}
  //definir las propiedades que van a tener
  //el form group es como un div, y lleva el controlID para que remarque el cuadro del input al seleccionar el label
  return (
    <div className="container py-3 my-3">
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el producto"
            minLength={4}
            max={20}
            value={producto}
            onchange={(e)=>{
              setProducto(e.currentTarget.value)
;          
            }
            }

/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la descripcion"
            as="textarea"
            row="3"
            minLength={5}
            maxLength={100}
            value={Descripcion}
            onchange={(e)=>{
              setDescripcion(e.currentTarget.value)
;          }
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPacategory">
          <Form.Label>Categoria</Form.Label>
          <Form.Select aria-label="category" value={Categoria}
            onchange={(e)=>{
              setCategoria(e.currentTarget.value)
;          }
            }>
            <option value=''>Seleccione una categoria</option>
            <option value="1">Bebidas</option>
            <option value="2">Alimentos</option>
            <option value="3">Limpieza</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CrearProducto;
