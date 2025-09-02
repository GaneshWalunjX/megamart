function ProductCard({ name, price, image }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-blue-600 font-bold">₹{price}</p>
    </div>
  );
}
export default ProductCard;
