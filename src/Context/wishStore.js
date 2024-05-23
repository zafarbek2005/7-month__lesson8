import { create } from 'zustand';

const useWishlistStore = create((set) => ({
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  toggleWishlistItem: (item) => {
    set((state) => {
      const index = state.wishlist.findIndex((i) => i.id === item.id);

      let updatedWishlist;
      if (index !== -1) {
        // If the item exists, remove it
        updatedWishlist = state.wishlist.filter((i) => i.id !== item.id);
      } else {
        // If the item does not exist, add it
        updatedWishlist = [...state.wishlist, item];
      }

      // Update localStorage
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

      return { wishlist: updatedWishlist };
    });
  }
}));

export default useWishlistStore;
