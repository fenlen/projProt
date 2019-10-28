import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { AppPage } from '../declarations';
import { IonHeader, IonMenu, IonToolbar, IonContent, IonTitle, IonList, IonMenuToggle, IonItem, IonLabel } from '@ionic/react';

const Menu = ({ appPages }) => (
  <IonMenu contentId="main" type="overlay">
      <IonHeader>
          <IonToolbar>
              <IonTitle>Menu</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
            {appPages.map((appPage, index) => {
                return (
                    <IonMenuToggle key={index} autoHide={false}>
                        <IonItem routerLink={appPage.url} routerDirection="none">
                            <IonLabel>{appPage.title}</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                )   
            })}    
        </IonList>          
      </IonContent>
  </IonMenu>  
)

export default withRouter(Menu)