import React, {useState} React from 'react'

interface Props {
    children: (count: number, setCount: React.Dispatch<React.Dispatch<React.SetStateAction<number>>) => JSX.Element | null | any
}


export const Counter: React.FC<Props> = ({children}) => {
    const [count, setCount] = useState(0)
    return (<div>
        {children(count, setCount)}</div>
    </div>
 )
}
