import { Card } from 'react-bootstrap';

const CardProductDetail = (props) => {
  return (
    <>
      <style type="text/css">
        {`
          .card-product-detail {
            border-color: #419f8d;
            max-width: 720px;
          }
        `}
      </style>

      <div className="d-flex justify-content-center align-items-center">
        <Card className="card-product-detail  text-center">
          {props.children}
        </Card>
      </div>
    </>
  );
}

export default CardProductDetail;