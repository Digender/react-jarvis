// src/Parent4.tsx
import React from 'react';
import { useSelector } from 'react-redux';

function Parent4() {
  const counter = useSelector((state: any) => state.counter.value);

  return (
    <div>
      <h4>Parent 4</h4>
      <p>Counter Value from Parent: {counter}</p>
      <button className="contrast" data-target="modal-example">
        Launch demo modal
      </button>

      <dialog id="modal-example">
        <article>
          <a
            href="#close"
            aria-label="Close"
            className="close"
            data-target="modal-example"
          ></a>
          <h3>Confirm your action!</h3>
          <p>
            Cras sit amet maximus risus. Pellentesque sodales odio sit amet
            augue finibus pellentesque. Nullam finibus risus non semper euismod.
          </p>
          <footer>
            <a
              href="#cancel"
              role="button"
              className="secondary"
              data-target="modal-example"
            >
              Cancel
            </a>
            <a href="#confirm" role="button" data-target="modal-example">
              Confirm
            </a>
          </footer>
        </article>
      </dialog>
    </div>
  );
}

export default Parent4;
