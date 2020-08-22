import React from 'react';
import ReactDOM from 'react-dom';

const LoginModal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal__overlay"/>
    <div className="modal__wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal__container">
        <div className="modal__header">
          <button type="button" className="modal__closeButton" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default LoginModal;
