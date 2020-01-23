import React from 'react'
import {Grid, GridRow, GridColumn, Segment, Header, Icon} from 'semantic-ui-react'
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import {Link} from 'react-router-dom'

const tamanho = {
    width: 175,
    heigth: 175
}
const Categoria = props =>{
    return(
        <GridColumn>
            <Link to={`/perguntas/${props.titulo}`}>
                <Segment circular style={tamanho}>
                    <Header as='h2'>
                        {props.titulo}
                    <HeaderSubHeader>
                        <Icon name={props.icone} />                                        
                    </HeaderSubHeader>
                    </Header>
                </Segment>
            </Link>

        </GridColumn>
    )
}

export default Categoria