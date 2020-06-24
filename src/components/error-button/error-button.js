import React from 'react'

const ErrorButton = () => {

  const onClick = () => {
    this.foo.bar = 1;
  };

  return (
    <button type="button" 
            class="btn btn-danger mb-md-3 ml-2"
            onClick={onClick}
            >
              Throw Error
    </button>
  )
}

export default ErrorButton;