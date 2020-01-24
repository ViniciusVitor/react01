import React, {Component} from 'react'
import {Grid, GridRow, GridColumn, Radio, Message, Button, CardContent, Container, Icon, Progress} from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'

import Header from './Header'


class Perguntas extends Component{
    constructor(props){
        super(props)
        this.state = {
            perguntas: {},
            estaCarregando: false,
            perguntaAtual: 0,
            totalPerguntas: 0
        }  
        
        this.proximaPergunta = this.proximaPergunta.bind(this)

    }
    componentDidMount(){
        this.carregandoPerguntas(this.props.match.params.nome)
    }

    carregandoPerguntas(cat){
        console.log('Categoria da pergunta: ', cat)
        this.setState({
            estaCarregando: true,
            perguntas: {}
        })

        const url = `https://projeto-react-653ae.firebaseio.com/categorias.json?orderBy="nome"&equalTo="${cat}"`
        axios
            .get(url)
            .then(dados => {
                const chave = Object.keys(dados.data)[0]
                const listaPerguntas = dados.data[chave]
                console.log('Chaveeee', chave)
                console.log('Lsita de perguntas', listaPerguntas)
                console.log('Quantidade de perguntas: ', _.size(listaPerguntas) - 1)
                this.setState({
                    estaCarregando: false,
                    perguntas: listaPerguntas,
                    totalPerguntas: (_.size(listaPerguntas)-1)
                })
            })
            .catch(err => {
                console.log('Algum problema ocorreu')
            })
    }

    proximaPergunta(){
        const {perguntaAtual, totalPerguntas} = this.state
        console.log(perguntaAtual, totalPerguntas)
        if(perguntaAtual < totalPerguntas -1){
            this.setState({perguntaAtual: this.state.perguntaAtual +1})

        }else{
            console.log('Terminou as perguntas, mostre as respostas')
        }

    }

    renderPergunta(pergunta){
        return (
            <span >
                <h3>PERGUNTA:{pergunta.titulo}</h3>
                {console.log('aquiiii', pergunta)}
                <Grid columns={2}>
                <GridRow>              

                    <GridColumn>
                        <Message color='blue'>
                            
                            <p>{pergunta.alternativas[1].resposta}</p>                                
                            <Radio toggle/>                            
                        </Message>                        

                    </GridColumn>
                    <GridColumn>
                        <Message color='pink'>
                            <p>{pergunta.alternativas[2].resposta}</p>                                
                            <Radio toggle/>                            
                        </Message>  
                    </GridColumn>
                </GridRow>

                <GridRow>
                    <GridColumn>
                        <Message color='orange'>
                            <p>{pergunta.alternativas[3].resposta}</p>                                
                            <Radio toggle/>                            
                        </Message>  
                    </GridColumn>
                    <GridColumn>
                        <Message color='green'>
                            <p>{pergunta.alternativas[4].resposta}</p>                                
                            <Radio toggle/>                            
                        </Message>  
                    </GridColumn>                        
                </GridRow>
            </Grid>
        </span>
        )
    }
    
    
    render(){

        let item = []
        if(this.state.estaCarregando){
            return <p>Carregando...</p>
        }

        return(
            <div>
                <Header /> 
                              
                <h2><Icon name={this.state.perguntas.icone}/> {this.props.match.params.nome}</h2>
                <p>Mostre que você conhece tudo sobre esse assunto</p>
                
                {

                    this.state.perguntas.perguntas && Object.keys(this.state.perguntas.perguntas)
                    .map(key =>{
                        item.push(key)
                    })
                }
                {
                    this.state.perguntas.perguntas && this.renderPergunta(this.state.perguntas.perguntas[item[this.state.perguntaAtual]])

                    
                }
                
                <Progress value={this.state.perguntaAtual + 1} total= {item.length} progress='ratio'/>
                <Container>
                    <CardContent>
                        <Button basic color='blue' onClick={this.proximaPergunta}>Próximo</Button>
                    </CardContent>
                </Container>   
             
            </div>    
        )
    }
    }

export default Perguntas