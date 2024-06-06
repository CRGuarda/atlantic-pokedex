import { Button } from './ui/Button'
import { usePagination } from '../hooks/usePagination'

export const Pagination = ({
  prevPageExists,
  nextPageExists,
}: {
  prevPageExists: boolean
  nextPageExists: boolean
}) => {
  const { handlePagination } = usePagination()
  return (
    <div className='flex gap-4'>
      <Button disabled={prevPageExists} onClick={() => handlePagination('prev')} title='Previous page'>
        Prev
      </Button>
      <Button disabled={nextPageExists} onClick={() => handlePagination('next')} title='Next page'>
        Next
      </Button>
    </div>
  )
}
