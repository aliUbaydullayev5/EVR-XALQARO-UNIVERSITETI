import { useRouter } from 'next/router.js'
import React from 'react'
import Button from '../../../../generic/Button/index.jsx'
import Container from './style.js'

export const FinanceMenu = () => {
  const quary = useRouter()
  return (
    <Container>
      <Container.Block>
        <div>
          <Button mwidth={'290px'} msize={'13px'} mheight={'45px'} width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/finance/information')}>
          Barcha ma'lumotlar</Button>
        </div>
        <div>
          <Button mwidth={'290px'} msize={'13px'} mheight={'45px'} width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/finance/salaries')}>Berilgan oyliklar</Button>
        </div>
        <div>
          <Button width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/library/booklanguage')}>Xarajatlar</Button>
        </div>
        <div>
          <Button width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/library/book')}>Kirim</Button>
        </div>

        <div>
          <Button width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/library/book')}>Maosh narxlari</Button>
        </div>
        <div>
          <Button width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/library/book')}> Premium</Button>
        </div>

      </Container.Block>
    </Container>
  )
}
export default FinanceMenu