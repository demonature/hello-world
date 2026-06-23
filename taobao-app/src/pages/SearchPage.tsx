import { IonPage, IonContent } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import type { Product } from '../data/products';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function SearchPage() {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!keyword.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }
    const filtered = products.filter(p =>
      p.title.toLowerCase().includes(keyword.toLowerCase()) ||
      p.category.toLowerCase().includes(keyword.toLowerCase())
    );
    setResults(filtered);
    setSearched(true);
  };

  const suggestions = ['手机', '电脑', '衣服', '食品', '美妆'];

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="min-h-screen bg-[#F5F5F5]">
          {/* 搜索栏 */}
          <div className="sticky top-0 z-50 bg-white px-3 py-2 flex items-center gap-2 border-b border-[#e5e5e5]">
            <span className="text-xl" onClick={() => history.goBack()}>
              ←
            </span>
            <div className="flex-1 flex items-center bg-[#f5f5f5] rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="搜索商品、品牌"
                className="flex-1 bg-transparent outline-none text-sm"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
              />
              <span className="text-[#999]" onClick={() => setKeyword('')}>
                ✕
              </span>
            </div>
            <button
              className="text-[#FF6600] font-bold text-sm"
              onClick={handleSearch}
            >
              搜索
            </button>
          </div>

          {!searched ? (
            <>
              {/* 搜索历史 */}
              <div className="bg-white px-3 py-4 mt-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-[#333]">搜索历史</span>
                  <span className="text-[#999] text-sm">清空</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['iPhone', '华为', '耐克'].map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-[#f5f5f5] rounded-full text-sm text-[#666]"
                      onClick={() => {
                        setKeyword(item);
                        setTimeout(handleSearch, 0);
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 热门搜索 */}
              <div className="bg-white px-3 py-4 mt-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-[#333]">热门搜索</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((item, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        index === 0
                          ? 'bg-[#FF6600] text-white'
                          : 'bg-[#FFF5E6] text-[#FF6600]'
                      }`}
                      onClick={() => {
                        setKeyword(item);
                        setTimeout(handleSearch, 0);
                      }}
                    >
                      🔥 {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 推荐商品 */}
              <div className="px-2 mt-4">
                <div className="flex items-center gap-2 mb-3 px-1">
                  <span className="text-[#FF6600]">❤️</span>
                  <span className="font-bold text-[#333]">猜你想找</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {products.slice(0, 6).map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="px-2 mt-2">
              {results.length > 0 ? (
                <>
                  <div className="px-2 py-2 text-sm text-[#999]">
                    找到 {results.length} 件商品
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {results.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center py-12">
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-[#999] mb-4">未找到相关商品</p>
                  <button
                    className="px-6 py-2 bg-[#FF6600] text-white rounded-full"
                    onClick={() => {
                      setKeyword('');
                      setSearched(false);
                    }}
                  >
                    重新搜索
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 底部标签栏高度占位 */}
          <div className="h-14"></div>
        </div>
      </IonContent>
    </IonPage>
  );
}
