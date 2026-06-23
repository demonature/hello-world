import { IonPage, IonContent } from '@ionic/react';
import { categories, products } from '../data/products';
import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { useHistory } from 'react-router-dom';

export function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const history = useHistory();

  const filteredProducts = products.filter(p => p.category === selectedCategory);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
          {/* 顶部搜索栏 */}
          <div className="sticky top-0 z-50 bg-white px-3 py-2 border-b border-[#e5e5e5]">
            <div
              className="flex items-center bg-[#f5f5f5] rounded-lg px-3 py-2 cursor-pointer"
              onClick={() => history.push('/search')}
            >
              <span className="text-[#999] text-sm">搜索商品、品牌</span>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* 左侧分类列表 */}
            <div className="w-24 bg-[#f8f8f8] overflow-y-auto flex-shrink-0">
              {categories.map(cat => (
                <div
                  key={cat.id}
                  className={`p-3 text-center text-sm cursor-pointer transition-colors ${
                    selectedCategory === cat.name
                      ? 'bg-white text-[#FF6600] font-bold border-l-2 border-[#FF6600]'
                      : 'text-[#666]'
                  }`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  {cat.icon} {cat.name}
                </div>
              ))}
            </div>

            {/* 右侧商品列表 */}
            <div className="flex-1 bg-white p-2 overflow-y-auto">
              <div className="mb-2 text-sm text-[#666]">{selectedCategory} 商品</div>
              <div className="grid grid-cols-2 gap-2">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-8 text-[#999]">该分类暂无商品</div>
              )}
            </div>
          </div>

          {/* 底部标签栏高度占位 */}
          <div className="h-14"></div>
        </div>
      </IonContent>
    </IonPage>
  );
}
