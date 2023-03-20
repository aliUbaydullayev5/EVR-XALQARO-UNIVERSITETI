import React, { useEffect, useState } from 'react'
import Container, {QuationUz, Wrapper ,AntSelect} from './style.js'
import { Button, Input } from '../../../../generic/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllexamsubjectFetch } from "../.../../../../../../redux/sliceAdmin/exam/getAllexamsubject"
import { quationCreatePost } from '../../../../../redux/sliceAdmin/quation/quationadd/index.js';
import { startMessage } from '../../../../../redux/slices/message/index.js';
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js';



export const QuationCom = () => {

  const [dataList, setDataList] = useState([])
  const [name, setName] = useState({
    examSubjectId: '',
    textUz: '',
    textRu: '',
    answers1NameUz: '',
    answers1NameRu: '',
    answers2NameUz: '',
    answers2NameRu: '',
    answers3NameUz: '',
    answers3NameRu: '',
    answers4NameUz: '',
    answers4NameRu: '',
  })
  const [Intput, setInput] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  })
  const dispatch = useDispatch()

  const getAllexamsubject = useSelector((store) => store.getAllexamsubject)
  const quationCreate = useSelector((store) => store.quationCreate)
  useEffect(() => {
    if (quationCreate.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Qo`shildi', type: 'success' }), setName({ ...name, examSubjectId: '',textUz: '', textRu: '', answers1NameUz: '', answers1NameRu: '', answers2NameUz: '', answers2NameRu: '', answers3NameUz: '', answers3NameRu: '', answers4NameUz: '', answers4NameRu: '', }))
    else if (quationCreate.status === 'notFound') dispatch(startMessage({ time: 4, message: quationCreate.message.split('_').join(' '), type: 'warning' }), setName({ ...name, examSubjectId: '',textUz: '', textRu: '', answers1NameUz: '', answers1NameRu: '', answers2NameUz: '', answers2NameRu: '', answers3NameUz: '', answers3NameRu: '', answers4NameUz: '', answers4NameRu: '', }))
    setTimeout(() => { dispatch(reset()) }, 500);
  }, [quationCreate]) 


  useEffect(() => {
    dispatch(getAllexamsubjectFetch({ type: 'BACHELOR' }))
  }, [getAllexamsubjectFetch])

  useEffect(() => {
    if ((getAllexamsubject.status === 'success'))
      setDataList(getAllexamsubject.data)
  }, [getAllexamsubject])


  const addFunc = () => {

    dispatch(quationCreatePost({
      id: 0,
      textUz: name.textUz,
      textRu: name.textRu,
      examSubjectId: name.examSubjectId,
      answers1NameUz: name.answers1NameUz,
      answers1NameRu: name.answers1NameRu,

      answers2NameUz: name.answers2NameUz,
      answers2NameRu: name.answers2NameRu,

      answers3NameUz: name.answers3NameUz,
      answers3NameRu: name.answers3NameRu,
      answers4NameUz: name.answers4NameUz,
      answers4NameRu: name.answers4NameRu,

      check1: Intput.check1,
      check2: Intput.check2,
      check3: Intput.check3,
      check: Intput.check4,
    }))
  }


  const checkAnswerFunc = ({ type }) => {
    setInput({
      ...Intput,
      check1: type === 'check1' ? true : false,
      check2: type === 'check2' ? true : false,
      check3: type === 'check3' ? true : false,
      check4: type === 'check4' ? true : false,
    })
  }

  return (


  <Wrapper>
    <>

    <h1>
      Test Fan Tanlang Va Tanlagan Fanigiz uchun Test savollari kiriting
    </h1>
    <Container>

      <Container.Select>
        <AntSelect
          style={{ width: '420px', borderRadius: '15px' }}
          placeholder='Fanga Tanlang Test Qo`shish'
          optionFilterProp="children"
          options={dataList?.map((value) => ({
            label: value.name,
            value: value.id,
          })) || []}
          onChange={(e) => setName({ ...name, examSubjectId: e })}
        />
      </Container.Select>
      <QuationUz>
        <div>
          <Input onchange={(e) => setName({ ...name, textUz: e.target.value })} width={'400px'} height={'40px'} radius={'10px'} placeholder={'Uzbek tilida kiriting savol'} size={'17px'} padding={'0px 10px'} />
          <form action="radiochec">
            <div>
              <input onChange={(e) => checkAnswerFunc({ type: 'check1' })} type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">
                <Input onchange={(e) => setName({ ...name, answers1NameUz: e.target.value })} type="text" width={'300px'} height={'40px'} padding={'0px 10px'} size={'17px'} radius={'10px'} placeholder={'A'} />
              </label>
            </div>
            <div>
              <input onChange={(e) => checkAnswerFunc({ type: 'check2' })} type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">
                <Input onchange={(e) => setName({ ...name, answers2NameUz: e.target.value })} type="text" width={'300px'} height={'40px'} padding={'0px 10px'} size={'17px'} radius={'10px'} placeholder={'B'} />
              </label>
            </div>
            <div>
              <input onChange={(e) => checkAnswerFunc({ type: 'check3' })} type="radio" id="html" name="fav_language" />
              <label for="html">
                <Input onchange={(e) => setName({ ...name, answers3NameUz: e.target.value })} type="text" width={'300px'} height={'40px'} padding={'0px 10px'} size={'17px'} radius={'10px'} placeholder={'C'} />
              </label>
            </div>

            <div>
              <input onChange={(e) => checkAnswerFunc({ type: 'check4' })} type="radio" id="html" name="fav_language" />
              <label for="html">
                <Input onchange={(e) => setName({ ...name, answers4NameUz: e.target.value })} type="text" width={'300px'} height={'40px'} padding={'0px 10px'} size={'17px'} radius={'10px'} placeholder={'D'} />
              </label>
            </div>
          </form>
        </div>

        <div>
          <Input onchange={(e) => setName({ ...name, textRu: e.target.value })} width={'400px'} height={'40px'} radius={'10px'} placeholder={'Rus tilida kiriting savol'} size={'17px'} padding={'0px 10px'} />
          <form action="radiochec">
            <div>
              <label for="html">
                <Input onchange={(e) => setName({ ...name, answers1NameRu: e.target.value })} type="text" width={'300px'} height={'40px'} padding={'0px 10px'} size={'17px'} radius={'10px'} placeholder={'A'} />
              </label>
            </div>
            <div>
              <label for="html">
                <Input onchange={(e) => setName({ ...name, answers2NameRu: e.target.value })} type="text" width={'300px'} height={'40px'} padding={'0px 10px'} size={'17px'} radius={'10px'} placeholder={'B'} />

              </label>
            </div>
            <div>
              <label for="html">
                <Input onchange={(e) => setName({ ...name, answers3NameRu: e.target.value })} type="text" width={'300px'} height={'40px'} padding={'0px 10px'} size={'17px'} radius={'10px'} placeholder={'C'} />
              </label>
            </div>

            <div>
              <label for="html">
                <Input onchange={(e) => setName({ ...name, answers4NameRu: e.target.value })} type="text" width={'300px'} height={'40px'} padding={'0px 10px'} size={'17px'} radius={'10px'} placeholder={'D'} />
              </label>
            </div>
          </form>
        </div>
      </QuationUz>
      <div></div>
      <div className='btneEnd'>
        <Button width={'120px'} height={'40px'} radius={'15px'} size={'15px'} onclick={() => addFunc()}>Qoldirish</Button>
      </div>
    </Container>
    </>
  </Wrapper>
  )
}

export default QuationCom