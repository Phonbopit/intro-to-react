import { Link, useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()

  return (
    <div>
      <h2>Product ID: {id}</h2>

      <Link to="/products">Back to Products</Link>
    </div>
  )
}
