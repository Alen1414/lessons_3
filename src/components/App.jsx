import React, { Component } from 'react';
// import './Modal/modal.css';
import Modal from 'components/Modal/Modal';
import ColorPicker from 'components/ColorPicker/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    //----чтобы показать можалку закрыть/открыть
    showModal: false,
  };
  //-     //----чтобы показать можалку закрыть/открыть делаем метод инверсию

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    // деструктуризация

    const { showModal } = this.state;

    return (
      <div>
        <button
          className="modal_button"
          type="button"
          onClick={this.toggleModal}
        >
          open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1> Hello content </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
              saepe quisquam at minima, numquam temporibus eos quam perspiciatis
              cumque dolores, accusantium veritatis facilis vero! Inventore et
              reiciendis magni eveniet corporis.
            </p>
            <button onClick={this.toggleModal}>close modal</button>
          </Modal>
        )}
        <ColorPicker options={colorPickerOptions} />
      </div>
    );
  }
}
export default App;
