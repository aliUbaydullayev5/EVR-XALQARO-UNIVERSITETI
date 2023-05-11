import React, {useEffect} from 'react'
import Container from "./style"
import NavigationSection from "./NavigationSection"
import smile from '../../assets/icon/smile.png'

// const ws = new WebSocket("ws://185.217.131.147:8088/api/v1/private-chat/update-directs")

const ChatComponent = () => {

    const directData = [
        {
            id: 1,
            title: 'Nimadur - 1',
            description: "🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫",
            icon: smile
        },
        {
            id: 2,
            title: 'Nimadur - 2',
            description: "🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫",
            icon: smile
        },
        {
            id: 3,
            title: 'Nimadur - 3',
            description: "🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫",
            icon: smile
        },
        {
            id: 4,
            title: 'Nimadur - 4',
            description: "🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫",
            icon: smile
        },
        {
            id: 5,
            title: 'Nimadur - 5',
            description: "🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫",
            icon: smile
        },
        {
            id: 6,
            title: 'Nimadur - 6',
            description: "🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫",
            icon: smile
        },
        {
            id: 7,
            title: 'Nimadur - 7',
            description: "🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫",
            icon: smile
        },
        {
            id: 8,
            title: 'Nimadur - 8',
            description: "🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫",
            icon: smile
        }
    ]

    return(
        <Container>
            <Container.Top>
                Shaxsiy xabarlar
            </Container.Top>
            <Container.Bottom>
                <NavigationSection data={directData} />
                <div>

                </div>
            </Container.Bottom>
        </Container>
    )
}

export default ChatComponent