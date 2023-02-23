import { useTheme } from '@mui/material/styles';
import gtLogo from '../../assets/logo/gt.png';

const Logo = () => {
    const theme = useTheme();

    return <img src={gtLogo} alt="Mantis" width="100" />;
};

export default Logo;
