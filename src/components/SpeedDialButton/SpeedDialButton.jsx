import './SpeedDialButton.css'
import React, { useState } from 'react'
import { SpeedDial } from 'primereact/speeddial';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';        
import { InputText } from 'primereact/inputtext';

export const SpeedDialButton = ({products}) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [modalVisiblePencil, setModalVisiblePencil] = useState(false);
  const [modalVisiblePlus, setModalVisiblePlus ] = useState(false);
  const [modalVisibleDelete, setModalVisibleDelete ] = useState(false);

  const footerContent = (
    <div>
        <Button label="No" icon="pi pi-times" onClick={() => setModalVisiblePlus(false)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => setModalVisiblePlus(false)} autoFocus />
    </div>
);

const footerContentDelete = (
  <div>
      <Button label="No" icon="pi pi-times" onClick={() => setModalVisibleDelete(false)} className="p-button-text" />
      <Button label="Yes" icon="pi pi-check" onClick={() => setModalVisibleDelete(false)} autoFocus />
  </div>
);

const footerContentPencil = (
  <div>
      <Button label="No" icon="pi pi-times" onClick={() => setModalVisiblePencil(false)} className="p-button-text" />
      <Button label="Yes" icon="pi pi-check" onClick={() => setModalVisiblePencil(false)} autoFocus />
  </div>
);

  const actionItems = [
    { icon: 'pi pi-trash', command: () => {
      setModalVisibleDelete(true);
     } },
    { icon: 'pi pi-pencil', command: () => {
      setModalVisiblePencil(true);
     } },    
    { icon: 'pi pi-cart-plus', command: () => {
      setModalVisiblePlus(true);
     } },
  ];

  const addHelicopter = (data) => {
    products.push(data)
  }

  const deleteHelicopter = (id) => {
    products = products.filter(item => item.id !== id)
  }

  const updateHelicopter = (id, data) => {
    products = products.map(item => {
        if (item.id === id){
            return data
        }
        return item
    })
  }

  return (
    <div>
    <div>
      <SpeedDial model={actionItems} visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} className={'speedButton'} />
    </div>
    <div>
          <Dialog header="Изменить данные о вертолете" visible={modalVisiblePencil} style={{ width: '50vw' }} onHide={() => setModalVisiblePencil(false)} footer={footerContentPencil}>
          <div className="flex flex-column gap-2">
    <label htmlFor="username">ID</label>
    <InputText id="username" aria-describedby="username-help" />
        </div>
        <div className="flex flex-column gap-2">
    <label htmlFor="username">Описание</label>
    <InputText id="username" aria-describedby="username-help" />
        </div>
        <div className="flex flex-column gap-2">
    <label htmlFor="username">Цена</label>
    <InputText id="username" aria-describedby="username-help" />
        </div>
      </Dialog>
      </div>
      <div>
      <Dialog header="Добавить новый вертолет" visible={modalVisiblePlus} style={{ width: '50vw' }} onHide={() => setModalVisiblePlus(false)} footer={footerContent}>
        <div className="flex flex-column gap-2">
    <label htmlFor="username">ID</label>
    <InputText id="username" aria-describedby="username-help" />
        </div>
        <div className="flex flex-column gap-2">
    <label htmlFor="username">Описание</label>
    <InputText id="username" aria-describedby="username-help" />
        </div>
        <div className="flex flex-column gap-2">
    <label htmlFor="username">Цена</label>
    <InputText id="username" aria-describedby="username-help" />
        </div>
            </Dialog>
      </div>
      <div>
      <Dialog header="Удалить вертолет по ID" visible={modalVisibleDelete} style={{ width: '50vw' }} onHide={() => setModalVisibleDelete(false)} footer={footerContentDelete}>
                <InputText value={value} onChange={(e) => setValue(e.target.value)} />
            </Dialog>
      </div>
      </div>
  )
}