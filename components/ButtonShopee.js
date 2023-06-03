import Button from 'react-bootstrap/Button';

const ButtonShopee = (props) => {
  const handleClick = () => {
    window.open(props.url, '_blank');
  };
  
  return (
    <>
      <style type="text/css">
        {`
          .btn-shopee {
            background-color: #EE4D2D;
            color: beige;
          }
        `}
      </style>

      <Button onClick={handleClick} variant="shopee">
        {props.children}
      </Button>
    </>
  );
}

export default ButtonShopee;