import React, {Component} from 'react'
import {List, Label, ListItem, ListContent, Container} from 'semantic-ui-react'

import Resposta from './Resposta'
import Header from './Header'

const resposta = {
    id: 1,
    titulo: 'Primeira pergunta',
    alternativa: 3
}

class Resultado extends Component{
    render(){
        return(
            <div>
                <Header />
                <h2>Resultados</h2>
                <p>Confira seu desempenho nessa categoria</p>
                
               <Container>
                   <List divided verticalAlign='left'>
                       <Resposta resposta={resposta} />
                   </List>
               </Container>
                

            </div>
        )
    }
}

export default Resultado