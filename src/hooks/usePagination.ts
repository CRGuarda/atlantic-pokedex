import { useSearchParams } from 'react-router-dom'

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handlePagination = (action: 'prev' | 'next') => {
    const currentParams = Object.fromEntries(searchParams)
    const currentPage = currentParams.page ?? '1'
    const targetPage = action === 'prev' ? Number(currentPage) - 1 : Number(currentPage) + 1
    setSearchParams({
      ...currentParams,
      page: targetPage.toString() || '1',
    })
  }
  return { handlePagination }
}
