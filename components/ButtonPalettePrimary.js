import Button from 'react-bootstrap/Button';

const ButtonPalettePrimary = (props) => {
  return (
    <>
      <style type="text/css">
        {`
          .btn-palette-1 {
            background-color: #419f8d;
            color: beige;
          }
        `}
      </style>

      <Button variant="palette-1">
        {props.children}
      </Button>
    </>
  );
}

export default ButtonPalettePrimary;