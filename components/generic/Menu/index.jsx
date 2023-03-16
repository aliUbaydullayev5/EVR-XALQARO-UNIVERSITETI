import { SettingOutlined, AppstoreOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Container from './style'

const MenuComponent = () => {

    function getItem(label, key, icon, children, type) {return {key, icon, children, label, type,}}

    const items = [
        getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Submenu', 'sub3')
        ]),

        getItem('Navigation Three', 'sub4', <SettingOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
        ]),

        getItem(
            'Group',
            'grp',
            null,
            [
                getItem('Option 13', '13'),
                getItem('Option 14', '14')
            ],
            'group'
        )
    ]

    const onClick = (e) => {
        console.log('click ', e)
    }

    return(
        <Container className={'nocopy'}>
            <Menu
                theme={'dark'}
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </Container>
    )
}

export default MenuComponent