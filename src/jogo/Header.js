import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Menu, Image, Dropdown, DropdownItem } from 'semantic-ui-react';
import { render } from '@testing-library/react';
import firebase from 'firebase'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            usuario:''
        }
    }
    componentDidMount(){
        const usuarioLogado = {
            nome : localStorage.getItem('nome'),
            foto: localStorage.getItem('foto')

        }
        this.setState({
            usuario: usuarioLogado
        })
    }

    deslogarUsuario(){
        firebase
        .auth()
        .signOut()
        .then(()=>{
            localStorage.removeItem('nome')
            localStorage.removeItem('foto')
            this.setState({
                usuario:''
            })
        }) 
        .catch(() =>{
            console.log('Erro ao delogar usuário')
        })
            
        
    }
    

    render(){
        const {foto, nome} = this.state.usuario
    return(
        <div>
            <header className="App-header">
                
                <h1>Jogo de perguntas e respostas</h1>   
          
            
                <Menu>
                    <Menu.Item as = {Link} to='/'>Home</Menu.Item>
                    <Menu.Item as =  {Link} to='/Categorias'>Categorias</Menu.Item>
                    <Menu.Item as =  {Link} to='/Perguntas'>Perguntas</Menu.Item>
                    <Menu.Item as =  {Link} to='/Resultado'>Resutados</Menu.Item>
                    <Menu.Item as =  {Link} to='/Ranking'>Raking</Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item><Image avatar src={foto} /></Menu.Item>
                        <Dropdown item text={nome}>
                        <Dropdown.Menu>
                            <DropdownItem onClick={this.deslogarUsuario}>Sair</DropdownItem>
                            
                        </Dropdown.Menu> 
                        </Dropdown>                   
                    </Menu.Menu>
                    
                </Menu>
        </header>

        </div>
      
    )
    }
}

export default Header