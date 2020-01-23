import React, {Component} from 'react'
import {Grid, Container} from 'semantic-ui-react'
import Categoria from './Categoria'
import Header from './Header'
import config from '../Config'



class Categorias extends Component {
    constructor(props){
        super(props)
        this.state = {
            categorias: {}
        }

        config.syncState('categorias', {
            context: this,
            state: 'categorias',
            asArray: false        
        })

    }


    render(){
        return(
            <div>
               <Header />
               
                <h2>Lista de categorias</h2>
                <p>Selecione a categoria que você quer responder perguntas</p>
                
                <Container>
                <Grid columns={5} divided>

                    {
                        Object.keys(this.state.categorias).map(key => {
                            return <Categoria key = {key} titulo={this.state.categorias[key].nome} icone={this.state.categorias[key].icone} />
                        })                        
                    }                                        

                   
                </Grid>
                </Container>
            </div>


        )
    }
}

export default Categorias