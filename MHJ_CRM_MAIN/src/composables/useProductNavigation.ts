import { useRouter } from 'vue-router'
import { routes } from '@/router/routes'

/**
 * Common navigation logic for dashboard products.
 * Centralizes the navigation to Product Details to avoid duplication.
 */
export function useProductDetailsNavigation() {
  const router = useRouter()

  function navigateToProduct(id: string = '1') {
    router.push(routes.Ecommerce.Products.ProductDetails.replace(':id', id))
  }

  return {
    navigateToProduct
  }
}
