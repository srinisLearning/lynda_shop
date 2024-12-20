 
import { products } from "@/utils/data/productData";

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = products.find(p => p.id === Number(params.productId));

  if (!product) {
    return <h3>Product not found</h3>
  }

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
        <img
          src={'/' + product.image}
          alt="Product image"
          className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-gray-600 mb-6">${product.price}</p>
        <h3 className="text-2xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}