import React from 'react'
import Button from 'react-bootstrap/Button';

export interface IError {
  text: string;
  onRetryButtonClick?: () => void;
}

export const Error: React.FC<IError> = (props) => {
  return (
    <div className='error'>
      <span className='error__text'>{props.text}</span>
      <Button onClick={props.onRetryButtonClick} variant='secondary'>
        Повторить запрос
      </Button>
    </div>
  )
}
