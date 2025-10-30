import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  }),
  actions: {
    addToCart(product) {
      const existing = this.cart.find((item) => item.name === product.name)
      if (existing) {
        existing.quantity++
      } else {
        // نحفظ كل بيانات المنتج زي ما هي
        this.cart.push({ ...product, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeItem(index) {
      this.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    increaseQuantity(index) {
      this.cart[index].quantity++
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    },
    clearCart() {
      this.cart = []
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
  },
  getters: {
    totalPrice: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },
})
