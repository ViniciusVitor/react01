import React, {Component} from 'react'
import {Grid, GridRow, GridColumn, Radio, Message, Button, CardContent, Container} from 'semantic-ui-react'
import axios from 'axios'

import Header from './Header'


class Perguntas extends Component{
    constructor(props){
        super(props)
        this.state = {
            perguntas: {},
            estaCarregando: false
        }     

    }
    componentDidMount(){
        this.carregandoPerguntas(this.props.match.params.nome)
    }

    carregandoPerguntas(cat){
        console.log('Categoria da pergunta ', cat)
        this.setState({
            estaCarregando: true,
            perguntas: {}
        })

        const url = `https://projeto-react-653ae.firebaseio.com/categorias.json?orderBy="nome"&equalTo=${cat}`
        axios
            .get(url)
            .then(dados => {
                console.log('Lsita de perguntas', dados.data)
            })
            .catch(err => {
                console.log('Algum problema ocorreu')
            })
    }
    
    
    render(){
        return(
            <div>
                <Header />                
                <h2>{this.props.match.params.nome}</h2>
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

                    <Container>
                        <CardContent>
                            <Button basic color='blue' >Finalizar</Button>
                        </CardContent>
                    </Container>
    
                </Grid>
            </div>    
        )
    }
    }

export default Perguntas