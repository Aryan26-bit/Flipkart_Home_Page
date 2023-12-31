
import { Typography, Box, styled } from '@mui/material'; 

import { navData } from '../dummydata/data';

const Component = styled(Box)`
    display: flex;
    margin:55px 130px 0 130px;
    justify-Content:space-between;
    `

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const Navbar = () => {
    return (
        <Component>
            {
                navData.map(data => (
                    <Container>
                        <img src={data.url} style={{  width: 64 }} />
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
}

export default Navbar;