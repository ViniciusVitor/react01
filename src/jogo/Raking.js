import React, {Component} from 'react'
import {List, Label, ListItem, ListContent, Container, Image} from 'semantic-ui-react'

import Usuario from './Usuario'
import Header from './Header'

class Raking extends Component{
    render(){
        return(
            <div>
                <Header />
                <h2>RAKING</h2>
                <p>Quem é o mestre?</p>
                <Container>
                    <List divided verticalAlign='left'>
                    <Usuario foto='' nome='Vinícius Vitor' pontos='100'/>
                    <Usuario foto='' nome='João' pontos='100'/>
        
                </List>
                    
                </Container>             

            </div>

        )
    }
}

export default Raking