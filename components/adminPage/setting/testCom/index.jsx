import { useRouter } from 'next/router.js';
import React, { useState } from 'react'
import { Button } from '../../../generic/index.jsx';
import data from '../../../Mock/rahbariyat/data.js'
import  AntSelect, {Container } from './style.js';


export const TestCom = () => {
    const [datas, setData] = useState(data)
     const  quarey = useRouter()
    return (
        <Container>
            <Container.Box>
                <AntSelect
                    showSearch
                    style={{
                        width: '411px',
                        height: '50px',
                    }}
                    placeholder='Fanlar'
                    optionFilterProp="children"

                    options={datas?.map((value) => (
                        {
                            // value,
                            // label: value
                        }
                    )) || []}
                    onChange={(e) => changeAllDataFunc({ type: 'edicetionType', value: e })}
                />
                <div>
                    <input type="checkbox" />
                </div>
            </Container.Box>
            <div className='testizoh'>
                Bu pageda siz abuturentlar uchun test qo`sha olishingiz mumkin agar siz majburiy fanlarga qushmoqchi bulsangiz fan tanlab checbox tipchaka bosib qo`ying !!!
            </div>
            <Container.Btn>
                <Button width={'190px'} height={'55px'} size={'23px'} radius={'0px'} onclick={() => quarey.push('/admin/setting/facultets')}>Qoldirish</Button>
             </Container.Btn>
    </Container>
  )
}
export default TestCom