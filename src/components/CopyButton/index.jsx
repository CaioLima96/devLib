import React, { useState } from "react";
import { Button } from './styles'

export default function CopyButton(props) {

    const [isCopied, setIsCopied] = useState(false);

    return (

        <Button className="defaultBtn" {...props}

            onClick={() => {  
                                        
                setIsCopied(true)
                setTimeout(() => {
                    setIsCopied(false);
                }, 1000);
                navigator.clipboard.writeText(props.copyRef.current.innerText)
            }}

        >

            {isCopied ? 'Copied!' : 'Copy'}
        
        </Button>
    )
}