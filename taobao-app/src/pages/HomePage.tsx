import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { categories, products, banners } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Swiper } from '../components/Swiper';

export function HomePage() {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="min-h-screen bg-[#F5F5F5]">
          {/* 顶部搜索栏 */}
          <div className="sticky top-0 z-50 bg-[#FF6600] px-3 py-2">
            <div
              className="flex items-center bg-white rounded-lg px-3 py-2 cursor-pointer"
              onClick={() => history.push('/search')}
            >
              <span className="text-[#999] text-sm">搜索商品、品牌</span>
            </div>
          </div>

          {/* 轮播图 */}
          <Swiper banners={banners} />

          {/* 分类导航 */}
          <div className="grid grid-cols-9 gap-2 p-3 bg-white mt-2">
            {categories.map(cat => (
              <div
                key={cat.id}
                className="flex flex-col items-center gap-1 cursor-pointer"
                onClick={() => history.push('/category')}
              >
                <div className="w-10 h-10 rounded-full bg-[#FFF5E6] flex items-center justify-center text-xl">
                  {cat.icon}
                </div>
                <span className="text-xs text-[#333]">{cat.name}</span>
              </div>
            ))}
          </div>

          {/* 猜你喜欢 */}
          <div className="mt-2 px-2">
            <div className="flex items-center gap-2 py-3 px-1">
              <span className="text-[#FF6600] text-lg">❤️</span>
              <span className="font-bold text-[#333]">猜你喜欢</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {products.slice(0, 8).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* 底部标签栏高度占位 */}
          <div className="h-14"></div>
        </div>
      </IonContent>
    </IonPage>
  );
}
