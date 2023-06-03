import Button from 'react-bootstrap/Button';

const ButtonTokopedia = (props) => {
  const handleClick = () => {
    window.open(props.url, '_blank');
  };
  
  return (
    <>
      <style type="text/css">
        {`
          .btn-tokopedia {
            background-color: #41b549;
            color: beige;
          }
        `}
      </style>

      <Button onClick={handleClick} variant="tokopedia">
        {props.children}
      </Button>
    </>
  );
}

export default ButtonTokopedia;