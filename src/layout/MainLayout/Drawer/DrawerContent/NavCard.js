// material-ui
import { CardMedia, Link, Stack } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/users/avatar-group.png';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
    <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
        <Stack alignItems="center" spacing={2.5}>
            <p>Logo GT nutrition</p>
            <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
        </Stack>
    </MainCard>
);

export default NavCard;
