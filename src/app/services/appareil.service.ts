export class AppareilService {
    appareils = [
        {
            id: 0,
            name: 'Machine à laver',
            status: 'éteint'
        },
        {   id: 1,
            name: 'Frigo',
            status: 'allumé'
        },
        {
            id: 2,
            name: 'Smartphone',
            status: 'éteint'
        }
    ]

    switchOnAll() {
        this.appareils.forEach((appareil) => {
            appareil.status = 'allumé'
        })
    }
    
    switchOffAll() {
        this.appareils.forEach((appareil) => {
            appareil.status = 'éteint'
        })
    }

    switchOnAppareil(indexAppareil: number) {
        this.appareils[indexAppareil].status = 'allumé'
    }
   
    switchOffAppareil(indexAppareil: number) {
        this.appareils[indexAppareil].status = 'éteint'
    } 

    getAppareilById(id: number) {
        return this.appareils.find((appareil) => {
            return appareil.id === id
        })
    }
}