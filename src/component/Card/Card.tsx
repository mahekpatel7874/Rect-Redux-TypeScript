import React from "react";
import { Typography } from '@material-ui/core'
import './CardStyle.css'

interface ICard  {
    children: React.ReactNode,
    title?: string,
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    align?: 'center' | 'left' | 'right',
}

const Card = ({ children, title, variant = 'h5', align = 'center' }: ICard) => {
    return <div className={"cardContainer"}>
        <Typography variant={variant} align={align}>
            {title}
        </Typography>
        {children}
    </div>
}

export default Card;
