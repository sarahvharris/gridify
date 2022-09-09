import { Story } from '@storybook/react';
import React, { useState } from 'react';
import Alert from '../Alert/Alert';

import { Modal, ModalType } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Configurable: Story<ModalType> = (args: ModalType) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open modal
      </button>
      <Modal
        {...args}
        onClose={() => {
          setOpenModal(false);
        }}
        title="some title"
        isOpen={openModal}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <Alert style={{ marginTop: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
      </Modal>
    </>
  );
};

Configurable.args = Modal.defaultProps;
