import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postTalimYunalishTurlariFetch } from '../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultet/index.js'
import { getStudyTypesFetch } from '../../../../../redux/slices/getStudyTypes'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import DataAriza from '../../../../Mock/adminAriza/data.js'
import Container, { AntSelect, ConTable } from './style.js'

export const TalimYunalishTypeAddCom = () => {
 
  const dispatch = useDispatch()

  const [data, setData] = useState(DataAriza)
  const [checked, setChecked] = useState(true)

  useEffect(() => { dispatch(getStudyTypesFetch({ type: 'BACHELOR' })) }, [])

  const { faculties, } = useSelector((store) => store.getStudyTypes.data)
  
  const findPostID = (deleteId) => dispatch(postTalimYunalishTurlariFetch({ id: deleteId }))

  return (
    <Container>
      <AntSelect
        style={{width:'500px',marginBottom:'20px'}}
        placeholder='Facultet Turilar'
        optionFilterProp="children"
        options={faculties?.map((value) => ({
          value: value.id,
          label: value.name
        })) || []}
        onclick={() => findPostID(value.id)}
      />

      <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '500px', overflowX: "scroll", maxWidth: '990px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
            <Container.Nav>
              <div className='row'>
              <div >№</div>
              <div className='colum'>Kantirakt Narxi</div>
              <div className='colum'>Student soni</div>
              <div className='colum'>O`qish tili</div>
              <div className='colum'>Ta`lim turi</div>
              <div className='colum'>Action</div>
              <div className='colum'>Status</div>

              </div>
            </Container.Nav>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
            {data.map((value) => {
              return (
                <ConTable key={value.id}>
                    <div className='row'>
                    <div >{value.id}</div>
                    <div className='colum'>{value.id}</div>
                    <div className='colum'>{value.id}</div>
                    <div className='colum'>{value.id}</div>
                    <div className='colum'>{value.id}</div>
                    <div className='colum'>
                    <div className="action">
                        <Button width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}> Edit</Button>
                      </div>
                    </div>
                    <div className='colum'>
                      <Input type="checkbox" defaultChecked={true}
                        onChange={() => setChecked(!checked)} />
                    </div>
                  </div>
                </ConTable>
              )
            })}
          </div>
        </Container.Scrool>
    </Container>
  )
}
export default TalimYunalishTypeAddCom