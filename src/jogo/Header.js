import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Menu, Image, Dropdown, DropdownItem, MenuItem, Icon } from 'semantic-ui-react';
import { render } from '@testing-library/react';
import firebase from 'firebase'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            usuario:'',
            estaLogado: false
        }
    }
    componentDidMount(){
        const usuarioLogado = {
            nome : localStorage.getItem('nome'),
            foto: localStorage.getItem('foto')

        }
        this.setState({
            usuario: usuarioLogado,
            estaLogado: !!localStorage.getItem('nome')            
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
                usuario:'',
                estaLogado: false
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
                        {
                            this.state.estaLogado &&
                            <Menu.Item><Image avatar src={foto} /></Menu.Item> 
                        }
                        {                                
                                this.state.estaLogado &&
                                <Dropdown item text={nome}>
                                <Dropdown.Menu>
                                    <DropdownItem onClick={this.deslogarUsuario}>Sair</DropdownItem>
                                    
                                </Dropdown.Menu> 
                                </Dropdown>
                        }
                            
        
                        
                        {                       
                            !this.state.estaLogado &&
                            <MenuItem><Icon name='user'/></MenuItem>
                            
                        }


                    </Menu.Menu>
                    
                </Menu>
        </header>

        </div>
      
    )
    }
}

export default Header