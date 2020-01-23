import React from 'react'
import {List, Label, ListItem, ListContent, Container, Image} from 'semantic-ui-react'

const Usuario = ({foto, nome, pontos}) => {
    
    return(
        <ListItem>
                        <ListContent floated='left'>
                            <Label>
                                <Image avatar src={foto} />
                            </Label>
                            {nome}                   
                        </ListContent> 
                        <ListContent floated='right'>{pontos} Pontos</ListContent>                                   
                    </ListItem>

    )
}

export default Usuario