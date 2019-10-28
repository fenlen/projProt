import { IonContent, IonPage, IonItem, IonList, IonLabel, IonInput, IonButton, IonButtons, IonMenuToggle, IonMenu, IonHeader, IonToolbar, IonMenuButton, IonTitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';



const Home = () => {
  const [items, setItems] = useState([])
  const [value, onChangeText] = useState('Add new item')

  useEffect(() => {
    setItems([{ id: '1', content: 'Milk' }, { id: '2', content: 'Eggs' }])
  }, [])

  const submitItem = () => {
    const newId = (items.length + 1).toString();
    const newItem = { id: newId, content: value };
    setItems([...items, newItem]);
  };

  const removeItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const rows = () => items.map(item =>
    <IonItem onClick={() => removeItem(item.id)}>
      <IonLabel>{item.content}</IonLabel>
    </IonItem>
  )

  const openMenu = () => {
    document.querySelector('ion-menu-controller').open()
  }
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {rows()}
        </IonList>
        <IonInput value={value} onIonChange={(e) => onChangeText(e.target.value)}></IonInput>
        <IonButton onClick={() => submitItem()}>Add Item</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
