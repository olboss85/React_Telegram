import React from 'react'
import { Button } from '../Button/Button'
import "./ProductCard.css"
import { Fieldset } from 'primereact/fieldset';
import { Image } from 'primereact/image';

export const ProductCard = ({product, className, onAdd}) => {

  const onAddHandler = () => {
    onAdd(product)
  }

  return (
    <Fieldset legend="Header" toggleable className={'headerLegend'}>

    <div className={'product ' + className}>
    <Image src="https://klike.net/uploads/posts/2023-02/1676955781_1.jpg" alt="Image" width="200" height='200' preview />
      <div className={'title'}>{product.title}</div>
      <div className={'description'}>{product.description}</div>
      <div className={'price'}>
        <span>Цена: <b>{product.price}</b></span>
      </div>
      <Button className={'add-btn'} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>

</Fieldset>
  )
}
