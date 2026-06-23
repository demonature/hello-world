import { IonPage, IonContent } from '@ionic/react';
import { useCart } from '../context/CartContext';
import { useHistory } from 'react-router-dom';

export function CartPage() {
  const { state, removeItem, updateQuantity, toggleSelect, selectAll, getSelectedTotal, getSelectedCount, clearCart } = useCart();
  const history = useHistory();

  const allSelected = state.items.length > 0 && state.items.every(item => item.selected);
  const selectedTotal = getSelectedTotal();
  const selectedCount = getSelectedCount();

  const handleCheckout = () => {
    if (selectedCount === 0) return;
    alert(`订单提交成功！\n共${selectedCount}件商品\n合计：¥${selectedTotal.toFixed(2)}`);
    clearCart();
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
          {/* 顶部标题 */}
          <div className="sticky top-0 z-50 bg-white px-3 py-3 border-b border-[#e5e5e5]">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[#333]">购物车</span>
              {state.items.length > 0 && (
                <span className="text-sm text-[#FF6600]" onClick={() => clearCart()}>
                  清空
                </span>
              )}
            </div>
          </div>

          {state.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-[#999] mb-4">购物车是空的</p>
              <button
                className="px-6 py-2 bg-[#FF6600] text-white rounded-full"
                onClick={() => history.push('/')}
              >
                去逛逛
              </button>
            </div>
          ) : (
            <>
              {/* 购物车列表 */}
              <div className="flex-1 overflow-y-auto pb-20">
                {state.items.map(item => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 p-3 bg-white mb-2 items-center"
                  >
                    {/* 选择框 */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                        item.selected ? 'bg-[#FF6600] border-[#FF6600]' : 'border-[#ccc]'
                      }`}
                      onClick={() => toggleSelect(item.product.id)}
                    >
                      {item.selected && <span className="text-white text-xs">✓</span>}
                    </div>

                    {/* 商品图片 */}
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-20 h-20 rounded object-cover bg-[#f8f8f8]"
                      onClick={() => history.push(`/product/${item.product.id}`)}
                    />

                    {/* 商品信息 */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-sm text-[#333] line-clamp-2"
                        onClick={() => history.push(`/product/${item.product.id}`)}
                      >
                        {item.product.title}
                      </h3>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-[#FF6600] font-bold">
                          ¥{item.product.price}
                        </span>
                      </div>

                      {/* 数量控制 */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="w-6 h-6 rounded border border-[#e5e5e5] flex items-center justify-center text-[#666]"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          className="w-6 h-6 rounded border border-[#e5e5e5] flex items-center justify-center text-[#666]"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* 删除按钮 */}
                    <button
                      className="text-[#999] p-2"
                      onClick={() => removeItem(item.product.id)}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>

              {/* 底部结算栏 */}
              <div className="fixed bottom-14 left-0 right-0 bg-white border-t border-[#e5e5e5] px-3 py-3 flex items-center justify-between z-50">
                <div
                  className="flex items-center gap-2"
                  onClick={() => selectAll(!allSelected)}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                      allSelected ? 'bg-[#FF6600] border-[#FF6600]' : 'border-[#ccc]'
                    }`}
                  >
                    {allSelected && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className="text-sm text-[#333]">全选</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm text-[#999]">合计</div>
                    <div className="text-lg font-bold text-[#FF6600]">
                      ¥{selectedTotal.toFixed(2)}
                    </div>
                  </div>
                  <button
                    className={`px-5 py-2 rounded-full text-white font-bold ${
                      selectedCount > 0 ? 'bg-[#FF6600]' : 'bg-[#ccc]'
                    }`}
                    onClick={handleCheckout}
                  >
                    结算({selectedCount})
                  </button>
                </div>
              </div>
            </>
          )}

          {/* 底部标签栏高度占位 */}
          <div className="h-14"></div>
        </div>
      </IonContent>
    </IonPage>
  );
}
