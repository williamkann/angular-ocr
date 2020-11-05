import { Subject } from 'rxjs'

export class AppareilService {

    appareilSubject = new Subject<any[]>()

    private appareils = [
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

    emitAppareilService() {
        this.appareilSubject.next(this.appareils.slice())
    }

    switchOnAll() {
        this.appareils.forEach((appareil) => {
            appareil.status = 'allumé'
        })
        this.emitAppareilService()
    }
    
    switchOffAll() {
        this.appareils.forEach((appareil) => {
            appareil.status = 'éteint'
        })
        this.emitAppareilService()
    }

    switchOnAppareil(indexAppareil: number) {
        this.appareils[indexAppareil].status = 'allumé'
        this.emitAppareilService()
    }
   
    switchOffAppareil(indexAppareil: number) {
        this.appareils[indexAppareil].status = 'éteint'
        this.emitAppareilService()
    } 

    getAppareilById(id: number) {
        return this.appareils.find((appareil) => {
            return appareil.id === id
        })
    }

    addAppareil(name: string, status: string) {
        const newAppareil = {
            name: name,
            status: status,
            id: this.appareils[this.appareils.length - 1].id + 1
        }

        this.appareils.push(newAppareil)
    }
}