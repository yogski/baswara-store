import Button from 'react-bootstrap/Button';

const ButtonWhatsapp = (props) => {
  const handleClick = () => {
    window.open(props.url, '_blank');
  };
  
  return (
    <>
      <style type="text/css">
        {`
          .btn-whatsapp {
            background-color: #128C7E;
            color: beige;
          }
        `}
      </style>

      <Button onClick={handleClick} variant="whatsapp">
        {props.children}
      </Button>
    </>
  );
}

export default ButtonWhatsapp;