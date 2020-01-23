import React from 'react'
import {List, Label, ListItem, ListContent } from 'semantic-ui-react'


const Resposta = props =>{
    const {id, titulo, alternativa} = props.resposta
    return(
       
            <ListItem>
                <ListContent floated='left'>
                <Label>{id}</Label>
                    {titulo}                    
                </ListContent> 
                <ListContent floated='right'>{alternativa}</ListContent>                                   
            </ListItem>
        

    )
}

export default Resposta 