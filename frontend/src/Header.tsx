import React, {ReactNode} from 'react'

const Header:React.FC<ReactNode> = ({children}) => (
    <h1>{children}</h1>
)

export default Header