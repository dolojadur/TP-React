import {useState} from "react";
import ModalColorPick from "../ModalColorPick/ModalColorPick";
import {Button} from 'react-bootstrap';

const ButtonColorPick = () => {
    
    //color inicial del boton
    const [buttonColor, setButtonColor] = useState("#3d7c40");

    //manejo del modal 
    const [showModal, setShowModal] = useState(false);

    //cambiar el color del boton
    const handleColorChange = (color: string) => {
        setButtonColor(color);

    };
    
    //si hago click en el boton se muestre el modal
    const handleShowModal = () => {
        setShowModal(true);
    };

    return(
        <div className="m-3">
            <h2>Ejemplo 3</h2>
            {/*Componente padre */}
            <Button variant="primary" style= {{backgroundColor: buttonColor}} onClick={handleShowModal}> Cambiar color </Button>

            {/*Componente hijo */}
            {showModal && <ModalColorPick 
            show={showModal} 
            onHide={() => setShowModal(false)}
            handleColorChange = {handleColorChange}/> }
        </div>
    )
}

export default ButtonColorPick;