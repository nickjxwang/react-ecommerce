import styled from 'styled-components'

const Logo = () => {
    return (
        <Wrapper>
            COMFORT<span>ZONE</span>
        </Wrapper>
    )
}

const Wrapper = styled.h3`
    margin-bottom: 0;
    color: var(--clr-grey-1);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    font-size: 20px;
    span {
        color: var(--clr-primary-5);
    }
`

export default Logo
