import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        <ul>
          <li>
            <Link to="..">Back to Home Page</Link>
          </li>
          <li>
            {" "}
            <Link to=".." relative="path">
              Back One Page
            </Link>
          </li>
        </ul>
      </p>
    </>
  );
}

export default ProductDetailPage;
