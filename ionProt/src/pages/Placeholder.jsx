import React, { ReactText } from 'react'
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react'

const PlaceholderPage = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Placeholder</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                Placeholder page.
            </IonContent>
        </IonPage>
    )
}

export default PlaceholderPage