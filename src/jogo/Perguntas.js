import React from 'react'
import {Grid, GridRow, GridColumn, Radio, Message} from 'semantic-ui-react'

import Header from './Header'


const Perguntas = props =>{
    return(
        <div>
            <Header />
            <h2>Perguntas sobre profissões</h2>
            <p>Mostre que você conhece tudo sobre esse assunto</p>
            <h3>PERGUNTA1: Qual a profissão que...</h3>

            <Grid columns={2}>
                <GridRow>
                    <GridColumn>
                        <Message color='blue'>
                            <p>Alternativa 1</p>                                
                            <Radio toggle/>                            
                        </Message>                        

                    </GridColumn>
                    <GridColumn>
                        <Message color='pink'>
                            <p>Alternativa 2</p>                                
                            <Radio toggle/>                            
                        </Message>  
                    </GridColumn>
                </GridRow>

                <GridRow>
                    <GridColumn>
                        <Message color='orange'>
                            <p>Alternativa 3</p>                                
                            <Radio toggle/>                            
                        </Message>  
                    </GridColumn>
                    <GridColumn>
                        <Message color='green'>
                            <p>Alternativa 4</p>                                
                            <Radio toggle/>                            
                        </Message>  
                    </GridColumn>
                </GridRow>

            </Grid>
        </div>

    )
}

export default Perguntas