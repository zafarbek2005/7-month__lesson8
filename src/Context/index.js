import create from 'zustand'

const retryFetch = async (url, options, retries = 1) => {
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    if (retries > 0) {
      return await retryFetch(url, options, retries - 1)
    } else {
      throw error
    }
  }
}


const useApiStore = create((set) => ({
  productData: null,
  loading: false,
  error: null,
  fetchProductData: async () => {
    set({ loading: true, error: null })
    const token = localStorage.getItem('token')
    const headers = token ? { 'Authentication': `${token}` } : {}

    try {
      const data = await retryFetch('https://dummyjson.com/products', { 
        method: 'GET',
        headers,
      }, 1) 
      set({ productData: data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
}))

export default useApiStore
