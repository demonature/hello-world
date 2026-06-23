import { IonPage, IonContent } from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { addItem } = useCart();
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({});

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <IonPage>
        <IonContent fullscreen>
          <div className="flex items-center justify-center h-screen">
            <p className="text-[#999]">商品不存在</p>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    alert('已加入购物车');
  };

  const handleBuyNow = () => {
    addItem(product);
    history.push('/cart');
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="min-h-screen bg-[#F5F5F5] pb-16">
          {/* 顶部导航 */}
          <div className="sticky top-0 z-50 bg-white px-3 py-2 flex items-center justify-between border-b border-[#e5e5e5]">
            <span className="text-xl" onClick={() => history.goBack()}>
              ←
            </span>
            <span className="font-bold text-[#333]">商品详情</span>
            <span className="text-xl">...</span>
          </div>

          {/* 商品图片轮播 */}
          <div className="relative bg-white">
            <div className="flex overflow-x-auto snap-x snap-mandatory">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.title}
                  className="w-full flex-shrink-0 aspect-square bg-[#f8f8f8]"
                />
              ))}
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === 0 ? 'bg-[#FF6600]' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 价格和标题信息 */}
          <div className="bg-white px-3 py-4 mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#FF6600]">
                ¥{product.price}
              </span>
              <span className="text-sm text-[#999] line-through">
                ¥{product.originalPrice}
              </span>
              {product.originalPrice > product.price && (
                <span className="px-2 py-0.5 bg-[#FF6600] text-white text-xs rounded">
                  促销
                </span>
              )}
            </div>
            <h1 className="mt-2 text-base text-[#333] leading-relaxed">
              {product.title}
            </h1>
            <div className="mt-2 flex items-center gap-4 text-sm text-[#999]">
              <span>销量 {product.sales}</span>
              <span>库存 999+</span>
            </div>
          </div>

          {/* 商品描述 */}
          <div className="bg-white px-3 py-4 mt-2">
            <h3 className="font-bold text-[#333] mb-2">商品详情</h3>
            <p className="text-sm text-[#666] leading-relaxed">{product.description}</p>
          </div>

          {/* 规格选择 */}
          <div className="bg-white px-3 py-4 mt-2">
            <h3 className="font-bold text-[#333] mb-3">规格选择</h3>
            <div className="flex flex-wrap gap-2">
              {['官方标配'].map(spec => (
                <span
                  key={spec}
                  className={`px-4 py-2 rounded-lg border cursor-pointer text-sm ${
                    selectedSpecs['默认'] === spec || !selectedSpecs['默认']
                      ? 'border-[#FF6600] bg-[#FFF5E6] text-[#FF6600]'
                      : 'border-[#e5e5e5] text-[#666]'
                  }`}
                  onClick={() => setSelectedSpecs({ 默认: spec })}
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* 底部操作栏 */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e5e5] px-4 py-3 flex items-center gap-3 z-50">
            <div className="flex items-center gap-4">
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => history.push('/cart')}
              >
                <span className="text-xl">🛒</span>
                <span className="text-xs text-[#666]">购物车</span>
              </div>
            </div>
            <div className="flex-1 flex gap-2">
              <button
                className="flex-1 py-2.5 rounded-full border-2 border-[#FF6600] text-[#FF6600] font-bold"
                onClick={handleAddToCart}
              >
                加入购物车
              </button>
              <button
                className="flex-1 py-2.5 rounded-full bg-[#FF6600] text-white font-bold"
                onClick={handleBuyNow}
              >
                立即购买
              </button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
