import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./dropdown.css";

const Dropdown = () => {
    return (
        <React.Fragment>
        <button class="dropdown dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Marked Ques..
      </button>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">23</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">5</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">6</a>
      </div>
        </React.Fragment>
    );
};

export default Dropdown;
