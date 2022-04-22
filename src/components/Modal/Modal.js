import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    //---закрыть модалку по клику esc на клавиатуре 
  componentDidMount() {
      console.log('Modal componentDidMount');
      
      window.addEventListener('keydown', this.handleKeyDown);
    };
   
    //---метод очистки за собой кейтдаун
    componentWillMount() {
        console.log('Modal componentDidMount');
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    //----- вешаем есукйп закрытие
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            //   console.log('press escape');
            this.props.onClose();
        }
    };
// - закрываем по клику в бекдропп 
    handleBackdropClick = e => {
        console.log('click in backdropp')
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    ///---чтобы переиспользовать можалку используем chidren
    ///--- рендерим отдельно модалку чтобы перекрывала весь контент отдельно в ДОМ -портал
    render() {
    return createPortal (
        <div className="Modal__backdrop"  onClick={this.handleBackdropClick }>
            
            <div className="Modal__content">{this.props.children}</div>
             
        </div>,modalRoot,
        
     
    );
  }
}