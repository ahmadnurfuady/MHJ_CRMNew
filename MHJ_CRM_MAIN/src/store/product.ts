import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import { additionalTabs, addProductTabs, products } from '@/core/data/product'
import { Product, ProductState, UiState } from '@/types/product'
import Swal from 'sweetalert2'
import { toast } from 'vue3-toastify'

export const useProduct = defineStore('products', () => {
  const productState = reactive<ProductState>({
    product: products,
    cartItems: [],
    cart: [],
    tagItems: [],
    searchTerm: '',
    tabs: addProductTabs,
    additionalTabs: additionalTabs,
    activeTab: 'product',
    additionalActiveTab: 'inventory',
    activeTabId: 1,
    additionalTabId: 1,
  })

  const uiState = reactive<UiState>({
    col2: false,
    col3: false,
    col4: true,
    col6: false,
    listViewEnable: false,
    list: false,
  })

  function handleTab(value: string, index: number) {
    productState.activeTab = value
    productState.activeTabId = index
  }

  function handleAdditionalTab(value: string, index: number) {
    productState.additionalActiveTab = value
    productState.additionalTabId = index
  }

  function handlePage(page: number) {
    if (page) {
      productState.activeTabId = page

      const tab = productState.tabs.find((tab) => tab.id == productState.activeTabId)
      if (tab) {
        productState.activeTab = tab.value
      }
    }
  }

  function handleAdditionalPage(page: number) {
    if (page) {
      productState.additionalTabId = page

      const tab = productState.additionalTabs.find((tab) => tab.id == productState.additionalTabId)
      if (tab) {
        productState.additionalActiveTab = tab.value
      }
    }
  }

  function changeTab(value: number, tabId: number) {
    if (tabId) {
      let updatedId
      if (value == -1) {
        updatedId = tabId && tabId - 1
      } else if (value == 1) {
        updatedId = tabId && tabId + 1
      }
      return updatedId
    }
  }

  const activeFilters = ref({
    category: [] as string[],
    brand: [] as string[],
    color: [] as string[],
    price: [20, 80] as number[],
  })

  const setFilter = <K extends keyof typeof activeFilters.value>(
    type: K,
    value: (typeof activeFilters.value)[K]
  ) => {
    activeFilters.value[type] = value
  }

  const filteredProducts = computed(() => {
    const [minPrice, maxPrice] = activeFilters.value.price
    return productState.product.filter((product) => {
      const matchesCategory =
        !activeFilters.value.category.length ||
        activeFilters.value.category.some((cat) => product.category.includes(cat))
      const matchesBrand =
        !activeFilters.value.brand.length || activeFilters.value.brand.includes(product.brand)
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice
      const matchesSearch =
        !productState.searchTerm ||
        product.name.toLowerCase().includes(productState.searchTerm.toLowerCase())
      return matchesCategory && matchesBrand && matchesPrice && matchesSearch
    })
  })

  const getColors = computed(() => {
    const uniqueColors: string[] = []
    const itemColor = []
    productState.product.forEach((product: Product) => {
      if (product.colors) {
        product.colors.map((color) => {
          const index = uniqueColors.indexOf(color)
          if (index === -1) uniqueColors.push(color) // Add unique colors to the array
        })
      }
    })
    for (let i = 0; i < uniqueColors.length; i++) {
      itemColor.push({ color: uniqueColors[i] })
    }
    return itemColor
  })

  const getBrands = computed(() => {
    // Extract all brands, remove duplicates using Set, and return as an array
    const brands = [...new Set(productState.product.map((product: Product) => product.brand))]
    return brands
  })

  const getTotalAmount = computed(() => {
    return productState.cart.reduce((prev: number, curr: Product) => {
      // It calculates the sum of (price * quantity) for each item.
      return prev + curr.price * (curr.quantity ?? 1) // Ensure quantity is valid
    }, 0)
  })

  const getCategory = computed(() => {
    const uniqueCategory: string[] = []
    const itemCat = []
    productState.product.map((product: Product) => {
      if (product.category) {
        product.category.map((category: string) => {
          const index = uniqueCategory.indexOf(category)
          if (index === -1) uniqueCategory.push(category)
        })
      }
    })
    for (let i = 0; i < uniqueCategory.length; i++) {
      itemCat.push({ category: uniqueCategory[i] })
    }
    return itemCat
  })

  function productData(value: Product[]) {
    productState.product = value
  }

  function grid2(item: boolean) {
    uiState.col2 = item
    uiState.col3 = false
    uiState.col4 = false
    uiState.col6 = false
    uiState.listViewEnable = false
  }

  function grid3() {
    uiState.col2 = false
    uiState.col3 = true
    uiState.col4 = false
    uiState.col6 = false
    uiState.listViewEnable = false
  }
  function grid4() {
    uiState.col2 = false
    uiState.col3 = false
    uiState.col4 = true
    uiState.col6 = false
    uiState.listViewEnable = false
  }
  function grid6() {
    uiState.col2 = false
    uiState.col3 = false
    uiState.col4 = false
    uiState.col6 = true
    uiState.listViewEnable = false
  }
  function listView() {
    uiState.listViewEnable = true
    uiState.list = true
    uiState.col2 = false
    uiState.col3 = false
    uiState.col4 = false
    uiState.col6 = false
  }
  function gridView() {
    uiState.listViewEnable = false
    uiState.col4 = true
  }

  function addToCart(product: Product) {
    const hasItems = productState.cart.find((items: Product) => {
      if (items.id === product.id) {
        items.quantity = items.quantity ? items.quantity : 1
        return true
      }
      return false
    })
    if (!hasItems) {
      productState.cart.push(product)
    }
    localStorage.setItem('cartItem', JSON.stringify(productState.cart))
  }

  function updateCartQuantity({ product, qty }: { product: Product; qty: number }) {
    const index = productState.cart.findIndex((p) => p.id === product.id)
    if (index !== -1) {
      const currentQty = productState.cart[index].quantity
      const stock = productState.cart[index].stock
      const newQty = currentQty + qty
      if (newQty > stock) {
        toast.error('Product out of stock')
        return
      }
      if (newQty <= 0) {
        toast.error('Removed from cart')
        productState.cart.splice(index, 1)
      } else {
        productState.cart[index].quantity = newQty
      }

      productState.cart = [...productState.cart]
      localStorage.setItem('cartItem', JSON.stringify(productState.cart))
    }
  }

  function setTags(item: Product[]) {
    productState.tagItems = item
  }

  function upload(items: Product[]) {
    productState.cart = items
  }

  function removeProduct(item: Product) {
    const index = productState.cart.findIndex((cartItem) => cartItem.id === item.id)
    if (index !== -1) {
      productState.cart.splice(index, 1)
      localStorage.setItem('cartItem', JSON.stringify(productState.cart))
    }
  }

  function clearCart() {
    productState.cart = []
    localStorage.removeItem('cartItem')
  }

  function sortProducts(item: string) {
    if (item === 'Featured') {
      productState.product.sort(function (a: Product, b: Product) {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      })
    } else if (item === 'z-a') {
      productState.product.sort(function (a: Product, b: Product) {
        if (a.name > b.name) {
          return -1
        } else if (a.name < b.name) {
          return 1
        }
        return 0
      })
    } else if (item === 'Lowest') {
      productState.product.sort(function (a: Product, b: Product) {
        if (a.price < b.price) {
          return -1
        } else if (a.price > b.price) {
          return 1
        }
        return 0
      })
    } else if (item === 'Highest') {
      productState.product.sort(function (a: Product, b: Product) {
        if (a.price > b.price) {
          return -1
        } else if (a.price < b.price) {
          return 1
        }
        return 0
      })
    }
  }

  const savedCart = localStorage.getItem('cartItem')

  if (savedCart) {
    try {
      const parsedCart = JSON.parse(savedCart) as Product[]
      if (Array.isArray(parsedCart) && parsedCart.length > 0) {
        productState.cart = parsedCart
      } else {
        const defaultCart = productState.product.slice(0, 3)
        productState.cart = defaultCart
        localStorage.setItem('cartItem', JSON.stringify(defaultCart))
      }
    } catch (err) {
      console.error('Failed to parse cart from localStorage', err)
      const defaultCart = productState.product.slice(0, 3)
      productState.cart = defaultCart
      localStorage.setItem('cartItem', JSON.stringify(defaultCart))
    }
  } else {
    const defaultCart = productState.product.slice(0, 3)
    productState.cart = defaultCart
    localStorage.setItem('cartItem', JSON.stringify(defaultCart))
  }

  function confirmClearAll() {
    Swal.fire({
      title: 'Clear all items?',
      text: 'Your cart will be emptied.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear it',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Cleared!', 'Your cart is now empty.', 'success')
      }
    })
  }

  return {
    uiState,
    productState,
    activeFilters,
    filteredProducts,
    getBrands,
    getCategory,
    getTotalAmount,
    getColors,
    setFilter,
    setTags,
    addToCart,
    updateCartQuantity,
    removeProduct,
    sortProducts,
    upload,
    grid2,
    grid3,
    grid4,
    grid6,
    listView,
    gridView,
    productData,
    handleTab,
    handleAdditionalTab,
    handlePage,
    changeTab,
    handleAdditionalPage,
    clearCart,
    confirmClearAll,
  }
})
