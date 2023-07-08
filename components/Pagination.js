import Link from 'next/link';

export function Pagination({ currentPage, totalPages }) {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <Link
          href={{
            pathname: '/users',
            query: { page: currentPage - 1 },
          }}
          className={`border px-4 rounded-md ${currentPage <= 1 ? 'bg-gray-100 pointer-events-none' : 'bg-gray-300'}`}
          disabled={currentPage <= 1}
        >Prev</Link>
        <Link
          href={{
            pathname: '/users',
            query: { page: currentPage + 1 },
          }}
          className={`border px-4 rounded-md ${currentPage >= totalPages ? 'bg-gray-100 pointer-events-none' : 'bg-gray-300'}`}
          disabled={currentPage >= totalPages}
        >Next</Link>
      </div>
    </>
  )
};

export default Pagination;