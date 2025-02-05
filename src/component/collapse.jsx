import React, { useState } from "react";
import { Button, Collapse } from "reactstrap";

function MyCollapse() {
  const [isOpen, setIsOpen] = useState(false); // State for collapse

  const toggle = () => setIsOpen(!isOpen); // Toggle function

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Toggle Content
      </Button>
      <Collapse isOpen={isOpen}>
        <div className="p-3 border mt-2">
          <h4>Collapsible Content</h4>
          <p>This content is shown when expanded.</p>
        </div>
      </Collapse>
    </div>
  );
}

export default MyCollapse;
