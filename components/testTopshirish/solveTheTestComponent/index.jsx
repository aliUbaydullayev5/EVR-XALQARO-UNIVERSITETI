import Container from './style'
import {useTimer} from 'react-timer-hook'
import {solveTestFetch} from "../../../redux/slices/solveTheTest";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTestQuestionFetch} from "../../../redux/slices/getTestQuestion";

const SolveTheTestComponent = () => {

    const dispatch = useDispatch()
    const solveTest = useSelector((store)=> store.solveTest)
    const getTestQuestion = useSelector((store)=> store.getTestQuestion)

    const time = new Date()

    time.setSeconds(time.getSeconds() + 3600000/1000)


    const {seconds, minutes, hours} = useTimer({ expiryTimestamp: time, onExpire: ()=> console.log('Finish')})

    useEffect(()=> {
        dispatch(solveTestFetch())
        dispatch(getTestQuestionFetch({subjectId: '9', score: '2.1'}))
    }, [])
    console.log(solveTest.status,'solveTest');
    return(
        <Container>
            <Container.Top className={'nocopy'}>
                Test &nbsp;&nbsp;&nbsp;
                {
                    solveTest.status === 'success' &&
                        <p>Otish Balli {solveTest?.data?.examInfo?.entranceBall}</p>
                        
                }

            </Container.Top>
            <Container.Bottom>
                <Container.BottomMenu className={'nocopy'}>

                    <div>
                        <Container.BottomMenuNavigate active={true}>
                            {solveTest.data?.firstExamSubject?.name} | {solveTest.data?.examInfo?.firstExamSubjectBall}
                            <div className="active"></div>
                        </Container.BottomMenuNavigate>
                        <Container.BottomMenuNavigate>
                            {solveTest.data?.secondExamSubject?.name} | {solveTest.data?.examInfo?.secondExamSubjectBall}
                            <div className="active"></div>
                        </Container.BottomMenuNavigate>
                    </div>

                    <div>
                        {
                            solveTest.data?.importantExamSubject?.map(({id, name})=> (
                                <Container.BottomMenuNavigate key={id}>
                                    {name} | {solveTest.data?.examInfo?.importantExamSubjectBall}
                                    <div className="active"></div>
                                </Container.BottomMenuNavigate>
                            ))
                        }
                    </div>

                    <div>
                        <Container.BottomMenuTimerSection className={'nocopy'}><p>{hours} : {minutes} : {seconds}</p></Container.BottomMenuTimerSection>
                    </div>
                </Container.BottomMenu>
                <Container.BottomTestArea>
                    <div>
                        {
                            getTestQuestion?.data?.map(({id, examQuestion, leftExamTime, examAnswers}, index)=> (
                                <Container.TestSection key={id} className={'nocopy'}>
                                    <Container.TestSectionQuestion>
                                        {index+1}. {examQuestion}
                                    </Container.TestSectionQuestion>
                                    <Container.TestSectionAnswer>
                                        {
                                            examAnswers.map((value)=> (
                                                <Container.TestSectionAnswerTitle key={value.id} className={'nocopy'}>
                                                    <input type="radio" id={value.id} name={id} />
                                                    <label for={value.id} >{value.name}</label>
                                                </Container.TestSectionAnswerTitle>
                                            ))
                                        }
                                    </Container.TestSectionAnswer>
                                </Container.TestSection>
                            ))
                        }
                    </div>
                </Container.BottomTestArea>
            </Container.Bottom>
        </Container>
    )
}


export default SolveTheTestComponent