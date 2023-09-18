import React from "react";
import { ChakraBaseProvider, Tabs, TabList, TabPanels, useTab, Button, } from '@chakra-ui/react'

import { GlobalStyle } from './styles'


export default function CodeTabs(props) {

    const CustomTab = React.forwardRef((props, ref) => {

        // 1. Reuse the `useTab` hook
        const tabProps = useTab({ ...props, ref })
        const isSelected = !!tabProps['aria-selected']

        return (
            <Button
                className={'codeTabListTab ' + (isSelected ? 'selected' : 'notSelected')}
                {...tabProps}
            >
                {tabProps.children}
            </Button>
        )
    })

    return (

        <>
            <GlobalStyle/>

            <ChakraBaseProvider>

                <Tabs variant={props.variant || 'unstyled'} defaultIndex={props.defaultIndex || 0}>

                    <TabList>

                        {props.tabs ? 

                            props.tabs.map((tab, i) => <CustomTab key={i}><p>{tab}</p></CustomTab>) 

                            : 
                            
                            ['Html', 'Css', 'Js'].map((tab, i) => <CustomTab key={i}><p>{tab}</p></CustomTab>)
                        }

                    </TabList>

                    <TabPanels style={{ 
                        backgroundColor: props.bgColor  || '#1E1E1E',
                        borderRadius: props.radius || '0 5px 5px 5px'
                    }}>

                        {props.children}

                    </TabPanels>

                </Tabs>
                
            </ChakraBaseProvider>
        </>

    )
}