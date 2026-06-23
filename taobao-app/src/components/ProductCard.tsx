import type { Product } from '../data/products';
import { useHistory } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const history = useHistory();

  return (
    <div
      className="bg-white rounded-lg overflow-hidden cursor-pointer shadow-sm"
      onClick={() => history.push(`/product/${product.id}`)}
    >
      <div className="aspect-square bg-[#f8f8f8]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-2">
        <h3 className="text-sm text-[#333] line-clamp-2 h-10 overflow-hidden">{product.title}</h3>
        <div className="mt-1 flex items-baseline gap-1">
          <span className="text-[#FF6600] font-bold">¥{product.price}</span>
          <span className="text-xs text-[#999] line-through">¥{product.originalPrice}</span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-xs text-[#999]">销量 {product.sales}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-white bg-[#FF6600] px-1 rounded">促销</span>
          )}
        </div>
      </div>
    </div>
  );
}
