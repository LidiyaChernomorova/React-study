import React, { useState } from "react";
import { Link } from "react-router-dom";
import modalsData from "./db";
import Modal from "./Modal";

function Modals(props) {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const modalsBunch = modalsData.map((modalUnit) => (
    <div key={modalUnit.id}>
      <div className="sampleColor" style={{ background: modalUnit.color }}>
        <a
          onClick={() => {
            setOpen(!open);
            setSelectedColor(modalUnit.color);
          }}
        >
          <Link to={modalUnit.name}>{modalUnit.name}</Link>
        </a>
      </div>

      <p>{modalUnit.description}</p>
      <hr />
    </div>
  ));

  return (
    <>
      <h1>Modals variety:</h1>
      {modalsBunch}

      <Modal
        selectedColor={selectedColor}
        open={open}
        onClose={() => {
          setOpen(false);
          props.history.push("/modals");
        }}
      >
        <div className="sampleColor" style={{ background: selectedColor }}>
          Test Modal
        </div>
      </Modal>
    </>
  );
}

export default Modals;
