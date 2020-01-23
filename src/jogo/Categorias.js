import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import Categoria from './Categoria'
import Header from './Header'



class Categorias extends Component {
    render(){
        return(
            <div>
               <Header />
                <h2>Lista de categorias</h2>
                <p>Selecione a categoria que você quer responder perguntas</p>
                <Grid columns={5} divided>
                    <Categoria titulo='Esportes' icone='trophy'/>
                    <Categoria titulo='Música' icone='music'/>
                    <Categoria titulo='Mundo' icone='globe'/>  
                    <Categoria titulo='Mundo' icone='globe'/>  
                    <Categoria titulo='Mundo' icone='globe'/>  
                    <Categoria titulo='Mundo' icone='globe'/>                              

                   
                </Grid>
            </div>


        )
    }
}

export default Categorias