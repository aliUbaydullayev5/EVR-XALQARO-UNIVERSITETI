import React from 'react'
import Container, { BtnCon, NavbarSection, Questions, TextSmall, WidthWiet } from './style.js'
import Button from "../../generic/Button/index.jsx"


export const TestQuestionsFirstCom = () => {

 

  const data = [
    {
      id: 1,
      question: '1. A friend of mine likes _____ on picnic at weekends.',
      answer: null,
      variants: [
        {
          id: 11,
          title: 'Variant 1'
        },
        {
          id: 12,
          title: 'Variant 2'
        },
        {
          id: 13,
          title: 'Variant 3'
        },
        {
          id: 14,
          title: 'Variant 4'
        },
      ]
    },
    {
      id: 2,
      question: '1. A friend of mine likes _____ on picnic at weekends.',
      answer: null,
      variants: [
        {
          id: 21,
          title: 'Variant 1 Variant 1'
        },
        {
          id: 22,
          title: 'Variant 2 Variant 1'
        },
        {
          id: 23,
          title: 'Variant 3'
        },
        {
          id: 24,
          title: 'Variant 4'
        },
      ]
    },
    {
      id: 3,
      question: '1. A friend of mine likes _____ on picnic at weekends.',
      answer: null,
      variants: [
        {
          id: 31,
          title: 'Variant 1'
        },
        {
          id: 32,
          title: 'Variant 2'
        },
        {
          id: 33,
          title: 'Variant 3'
        },
        {
          id: 34,
          title: 'Variant 4'
        },
      ]
    },
    {
      id: 4,
      question: '1. A friend of mine likes _____ on picnic at weekends.',
      answer: null,
      variants: [
        {
          id: 41,
          title: 'Variant 1'
        },
        {
          id: 42,
          title: 'Variant 2'
        },
        {
          id: 43,
          title: 'Variant 3'
        },
        {
          id: 44,
          title: 'Variant 4'
        },
      ]
    },
    {
      id: 5,
      question: '1. A friend of mine likes _____ on picnic at weekends.',
      answer: null,
      variants: [
        {
          id: 51,
          title: 'Variant 1'
        },
        {
          id: 52,
          title: 'Variant 2'
        },
        {
          id: 53,
          title: 'Variant 3'
        },
        {
          id: 54,
          title: 'Variant 4'
        },
      ]
    },
    {
      id: 6,
      question: '1. A friend of mine likes _____ on picnic at weekends.',
      answer: null,
      variants: [
        {
          id: 61,
          title: 'Variant 1'
        },
        {
          id: 62,
          title: 'Variant 2'
        },
        {
          id: 63,
          title: 'Variant 3'
        },
        {
          id: 64,
          title: 'Variant 4'
        },
      ]
    },
  ]


  return (
    <Container>

      <Container.Text>
        <h1>Test</h1>
      </Container.Text>
   
      <Container.Box>
        <NavbarSection>
          <div>
            <Questions>
              <label htmlFor="Ingliz">1.Ingliz tili (3.1 ball)
                <input type="radio" id="Ingliz" name='radio' />
              </label>
            </Questions>
            <Questions>
              <label htmlFor="Matematika">2.Matematika (3.1 ball)
                <input type="radio" id="Matematika" name='radio' />
              </label>
            </Questions>
          </div>

          <div>
            <Questions>
              <label htmlFor="radio">1.Matematika (1.1 ball)
                <input type="radio" id="radio" name='radio' />
              </label>
            </Questions>

            <Questions>
              <label htmlFor="Ona">2. Ona tili (1,1 ball)
                <input type="radio" id="Ona" name='radio' />
              </label>
            </Questions>

            <Questions>
              <label htmlFor="Tarix">3. Tarix (1,1 ball)
                <input type="radio" id="Tarix" name='radio' />
              </label>
            </Questions>
          </div>

          <div>
            <Questions>
              00:00
            </Questions>
          </div>
        </NavbarSection>

      </Container.Box>

      <WidthWiet></WidthWiet>
      <Container.BottomDesc>
        <Container.BottomDescInset>
          {data.map((value) => (
          <Questions.Box>
              <h3> {value.question }</h3>
                <Questions.Radio>
                  {value.variants.map((insetValue) => (
                    <div>
                      <div>
                        <input type="radio" id={insetValue.id} name={value.id} />
                        <label htmlFor={insetValue.id}>
                          <TextSmall>  {insetValue.title}</TextSmall>
                        </label>
                      </div>
                    </div>
                ))}
                  </Questions.Radio>
          </Questions.Box>
          ))}
        </Container.BottomDescInset>
      </Container.BottomDesc>

      <BtnCon>
        <Button width={'158px'} height={'32px'} size={'18px;'} margin={'15px 0px 10px 0px'}>
          Oldinga →
        </Button>
      </BtnCon>
    </Container>
  )
}
export default TestQuestionsFirstCom