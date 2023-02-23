// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Usuarios',
    type: 'group',
    children: [
        {
            id: 'register1',
            title: 'Registrar usuarios',
            type: 'item',
            url: '/register',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'register1',
            title: 'Gestionar usuarios',
            type: 'item',
            url: '/register',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export default pages;
