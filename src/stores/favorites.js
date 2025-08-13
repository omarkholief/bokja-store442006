import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [],
  }),
  actions: {
    addFavorite(product) {
      // نتأكد إنه مش مكرر
      if (!this.favorites.find((item) => item.id === product.id)) {
        this.favorites.push(product)
      }
    },
    removeFavorite(productId) {
      this.favorites = this.favorites.filter((item) => item.id !== productId)
    },
  },
})
