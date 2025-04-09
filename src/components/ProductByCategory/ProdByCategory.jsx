import React from 'react'
import { useEffect } from 'react'
import { getProdBySubId } from '../../services/api'
import { useState } from 'react'
import Card from '../Card'
import { Pagination } from 'antd'

function ProdByCategory() {
  const [data, setData] = useState()
  const [limit, setLimit] = useState(12)
  const [page, setPage] = useState(1)


  useEffect(() => {
    getProdBySubId(1, limit, page).then(meh => setData(meh))
  }, [limit, page])

  if (!data) return "Yuklenirrr..."

  if (data.totalProducts == 0) "axtaris uzre mehsul yoxdur"

  return (
    <main className='min-h-screen pl-[400px]'>
      <button onClick={() => setLimit(12)} className='p-2 border border-black cursor-pointer'>12</button>
      <button onClick={() => setLimit(25)} className='p-2 border border-black cursor-pointer'>25</button>
      <button onClick={() => setLimit(50)} className='p-2 border border-black cursor-pointer'>50</button>
      <div className=' flex flex-wrap gap-4'>
        {
          data.products.map(item => {
            console.log(item);

            return (
              <Card key={item.id} item={item} />
            )
          })
        }
      </div>
      {data.totalProducts / limit > 1 &&
        <Pagination
          onChange={(curPage, paginationSize) => {
            setPage(curPage)
            console.log(curPage);

          }}
          defaultCurrent={1}
          defaultPageSize={limit}
          total={data.totalProducts}
        />
      }
    </main>
  )
}

export default ProdByCategory