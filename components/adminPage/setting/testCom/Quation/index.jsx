import React, { useEffect, useState } from 'react'
import Container, { QuationUz } from './style.js'
import { Button, Input } from '../../../../generic/index.jsx';
import { AntSelect } from '../Facultets/style.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllexamsubjectFetch } from "../.../../../../../../redux/sliceAdmin/exam/getAllexamsubject"
import { quationCreatePost } from '../../../../../redux/sliceAdmin/quation/quationadd/index.js';



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
    answers3NameRu: '',

  })
  const [Intput, setInput] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  })
  const dispatch = useDispatch()

  const getAllexamsubject = useSelector((store) => store.getAllexamsubject)

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
      answers3NameRu: name.answers3NameRu,

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
  console.log(name.textUz, 'name.textUz');
  console.log(name.textRu, 'name.textRu');
  console.log(name.answers1NameUz, 'name.answers1NameUz');
  console.log(name.examSubjectId, 'name.examSubjectId');
  console.log(name.answers1NameRu, 'name.answers1NameRu');

  console.log(name.answers2NameUz, 'name.answers2NameUz')
  console.log(name.answers2NameRu, 'name.answers2NameRu');

  console.log(name.answers3NameUz, 'name.answers3NameUz');
  console.log(name.answers3NameRu, 'name.answers3NameRu');
  console.log(name.answers4NameUz, 'name.answers4NameUz');
  console.log(name.answers4NameUz, 'name.answer4NameRu');

  
  console.log(Intput.check1, 'Input.check1');
  console.log(Intput.check2, 'Input.check2');
  console.log(Intput.check3, 'Input.check3');
  console.log(Intput.check4, 'Input.check4');
  return (
    <Container>
      <QuationUz>
        <div>

          <AntSelect
            style={{ width: '420px' }}
            placeholder='Fanga Tanlang Test Qo`shish'
            optionFilterProp="children"
            options={dataList?.map((value) => ({
              label: value.name,
              value: value.id,
            })) || []}
            onChange={(e) => setName({ ...name, examSubjectId: e })}
          />

          <Input onchange={(e) => setName({ ...name, textUz: e.target.value })} width={'400px'} height={'40px'} radius={'10px'} placeholder={'Uzbek tilida kiriting savol'} size={'17px'} padding={'0px 10px'} />
          <form action="radiochec">
            <div>
              <input onChange={(e) => checkAnswerFunc({ type: 'check1' })} type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">
                <Input onChange={(e) => setName({ ...name, answers1NameUz: e.target.value })} type="text" width={'300px'} height={'40px'} padding={'0px 10px'} size={'17px'} radius={'10px'} placeholder={'A'} />
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
          <Input onchange={(e) => setName({ ...name, textRu: e.target.value })} width={'400px'} height={'40px'} radius={'10px'} placeholder={'Uzbek tilida kiriting savol'} size={'17px'} padding={'0px 10px'} />
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
                <Input onchange={(e) => setName({ ...name, answers4NameUz: e.target.value })} type="text" width={'300px'} height={'40px'} padding={'0px 10px'} size={'17px'} radius={'10px'} placeholder={'D'} />
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
  )
}

export default QuationCom