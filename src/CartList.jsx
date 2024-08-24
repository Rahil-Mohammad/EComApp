import React, { useEffect, useState, useMemo } from "react";
import CartRow from "./CartRow";
import Button from "./Button";
import { withCart } from "./withProvider";

function CartList({ cart, updateCart }) {
  const [quantityMap, setQuantityMap] = useState({});
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const cartToQuantityMap = useMemo(() =>
    cart.reduce(
      (map, cartItem) => ({ ...map, [cartItem.product.id]: cartItem.quantity }),
      {}
    ), [cart]);

  useEffect(() => {
    setQuantityMap(cartToQuantityMap);
  }, [cart, cartToQuantityMap]);

  const handleUpdateCart = () => {
    updateCart(quantityMap);
  };

  const handleCartQuantityChange = (productId, newValue) => {
    setQuantityMap((prevMap) => ({ ...prevMap, [productId]: newValue }));
  };

  const handleRemove = (productId) => {
    setQuantityMap((prevMap) => {
      const newQuantityMap = { ...prevMap };
      delete newQuantityMap[productId];
      updateCart(newQuantityMap);
      return newQuantityMap;
    });
  };

  const handleApplyCoupon = () => {
    // Example coupon logic: 10% discount on valid coupon "DISCOUNT10"
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const handleProceedToCheckout = () => {
    // Proceed to checkout logic
    alert("Proceeding to checkout");
  };

  const totalAmount = cart.reduce(
    (total, cartItem) =>
      total + cartItem.product.price * (quantityMap[cartItem.product.id] || cartItem.quantity),
    0
  );

  const discountedTotal = totalAmount - totalAmount * discount;

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3">
        <div className="flex font-semibold space-x-4 px-4 py-4 border border-gray-200 bg-gray-100">
          <span className="grow ml-16">Product</span>
          <span className="w-20">Price</span>
          <span className="w-32">Quantity</span>
          <span className="w-20">Subtotal</span>
        </div>
        {cart.map((cartItem) => (
          <CartRow
            key={cartItem.product.id}
            product={cartItem.product}
            quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
            onQuantityChange={handleCartQuantityChange}
            onRemove={handleRemove}
          />
        ))}
        <div className="px-8 py-4 border border-gray-200">
          <div className="flex items-center mb-4">
            <input
              type="text"
              className="border p-2 flex-grow"
              placeholder="Coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button onClick={handleApplyCoupon} className="bg-red-500 text-white ml-4">
              Apply Coupon
            </Button>
          </div>
          <Button onClick={handleUpdateCart} className="bg-red-500 text-white w-full">
            Update Cart
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/3 bg-gray-100 border border-gray-200 p-4">
        <h2 className="font-semibold text-lg mb-4">Cart totals</h2>
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Subtotal:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Discounted Total:</span>
            <span>${discountedTotal.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span>${discount > 0 ? discountedTotal.toFixed(2) : totalAmount.toFixed(2)}</span>
        </div>
        <Button onClick={handleProceedToCheckout} className="bg-red-500 text-white w-full">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}

export default withCart(CartList);
