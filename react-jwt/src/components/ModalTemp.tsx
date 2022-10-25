import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { WeatherForecast } from "../POJO/WeatherForecast";

function ModalTemp(
        data : WeatherForecast | undefined,
        show : boolean,
        handleClose: () => void
    ) {
    return (
      <>
        <Modal 
          show={show} 
          onHide={handleClose} 
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>Weather Forecast Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
                <li>{data?.Date}</li>
                <li>{data?.TemperatureC}</li>
                <li>{data?.Summary}</li>              
                <li>{data?.TemperatureF}</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalTemp;