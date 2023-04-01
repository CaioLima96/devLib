import styled from 'styled-components'


export const Button = styled.button`

    align-self: ${ props => (props.alignSelf ? props.alignSelf : 'end') };
    margin: 0.75rem 0.438rem 0 0;
    background-color: #A4A709;
    line-height: 1;
    font-size: 0.875rem;
`