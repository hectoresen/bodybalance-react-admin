// material-ui
import { CardMedia, Link, Stack } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import gtLogo from 'assets/logo/gt.png';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
    <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
        <Stack alignItems="center" spacing={2.5}>
            <CardMedia component="img" image={gtLogo} sx={{ width: 112 }} />
        </Stack>
    </MainCard>
);

export default NavCard;
