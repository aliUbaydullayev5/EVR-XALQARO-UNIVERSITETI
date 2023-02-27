import React from 'react'
import Container, { Box } from './style.js'
import { Button, Input } from '../../../../generic/index.jsx';
import { useState } from 'react';
import { AntSelect } from '../Facultets/style.js';
import data from '../../../../Mock/rahbariyat/data.js';
export const QuationCom = () => {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);

  };

  const handleClick = () => {
    setUpdated(message)
    // setMessage(event.target.value)  && [];
  };
  return (
      <Container>
      <div>
        <Container.Text>
          Tanlangan Fan
        </Container.Text>
        <Container.Language>
          <Container.Uzb>
            <label htmlFor={'uzb'}>
              <p className='textP'>Uzbek</p>
            </label>
            <input className='input' type="radio" id={'uzb'} name={'uzb'} />
          </Container.Uzb>
          <Container.Rus>
            <label htmlFor={'rus'}>
              <p className='textP'>Ruscha</p>
            </label>
            <input className='input' type="radio" id={'rus'} name={'uzb'} />
          </Container.Rus>
        </Container.Language>

        <Container.Quation>
          <p>Savol Berish</p>
          <div>
            <textarea onChange={handleChange} value={message} type="text" id="message" name="message" />
            <Button onclick={handleClick} width={'190px'} height={'45px'} radius={"5px"} size={'18px'}>Savol Qoldirish</Button>
          </div>
          <pre>{updated && 'width' === '100%' ? <br /> : updated}</pre>
        </Container.Quation>

        <Container.Variant>
          <div>
            <div><p>A</p></div>  <Input width={'200px'} height={'35px'} radius={'5px'} padding={'0px 10px'} size={'15px'} />
          </div>

          <div>
            <div><p>B</p></div>  <Input width={'200px'} height={'35px'} radius={'5px'} padding={'0px 10px'} size={'15px'} />
          </div>

          <div>
            <div><p>C</p></div>  <Input width={'200px'} height={'35px'} radius={'5px'} padding={'0px 10px'} size={'15px'} />
          </div>

          <div>
            <div><p>D</p></div>  <Input width={'200px'} height={'35px'} radius={'5px'} padding={'0px 10px'} size={'15px'} /> <Button width={'190px'} height={'35px'} radius={'5px'} size={'23px'}>Qoldirish</Button>
          </div>

        </Container.Variant>
        <br />
  
        <AntSelect
          showSearch
          style={{
            width: '411px',
            height: '50px',
          }}
          placeholder='To’g’ri Javob'
          optionFilterProp="children"

          options={data?.map((value) => (
            {
              // value,
              // label: value
            }
          )) || []}
          onChange={(e) => changeAllDataFunc({ type: 'edicetionType', value: e })}
        />
      </div>
      <Box>

        <Button width={'190px'} height={'35px'} radius={'5px'} size={'23px'}>Qoldirish</Button>
      </Box>
     </Container>
  )
}

export default QuationCom