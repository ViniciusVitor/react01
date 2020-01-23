import React from 'react'
import {Grid, GridRow, GridColumn, Segment, Header, Icon} from 'semantic-ui-react'
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

const tamanho = {
    width: 175,
    heigth: 175
}
const Categoria = props =>{
    return(
        <GridColumn>
            <Segment circular style={tamanho}>
                <Header as='h2'>
                    {props.titulo}
                <HeaderSubHeader>
                    <Icon name={props.icone} />                                        
                </HeaderSubHeader>

                </Header>
            </Segment>

        </GridColumn>
    )
}

export default Categoria