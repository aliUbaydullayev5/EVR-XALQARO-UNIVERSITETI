import React from 'react'
import Container, { NavbarSection, Questions, WidthWiet } from './style.js'

export const TestQuestionsFirstCom = () => {


  const data = [
    {
      id: 1,
      question: 'Savol',
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
      question: 'Savol',
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
      id: 3,
      question: 'Savol',
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
      id: 4,
      question: 'Savol',
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
              Time
            </Questions>
          </div>
        </NavbarSection>

      </Container.Box>

      <WidthWiet></WidthWiet>
      <Container.BottomDesc>
        <Container.BottomDescInset>

          <>
   
          </>
          <Questions.Box>
            <h3>1. A friend of mine likes _____ on picnic at weekends.</h3>
            {data.map((val) => (

                <Questions.Con key={val.id}>
                  <Questions.Radio>
                    <label htmlFor="go">
                      <input type="radio" id="go" name='radio' />
                      <span className='Text'> &nbsp; go</span>
                    </label>
                  </Questions.Radio>

                  <Questions.Radio>
                    <label htmlFor="going">
                      <input type="radio" id="going" name='radio' />
                      <span className='Text'> &nbsp; going</span>
                    </label>
                  </Questions.Radio>

                  <Questions.Radio>
                    <label htmlFor="togo">
                      <input type="radio" id="togo" name='radio' />
                      <span className='Text'> &nbsp; to go</span>
                    </label>
                  </Questions.Radio>

                  <Questions.Radio>
                    <label htmlFor="togos">
                      <input type="radio" id="togos" name='radio' />
                      <span className='Text'> &nbsp; to gos</span>
                    </label>
                  </Questions.Radio>
                </Questions.Con>

            ))}
           
          </Questions.Box>

        </Container.BottomDescInset>
      </Container.BottomDesc>
    </Container>
  )
}
export default TestQuestionsFirstCom