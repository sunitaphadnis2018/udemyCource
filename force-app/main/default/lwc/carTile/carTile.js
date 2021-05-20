import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class CarTile extends LightningElement {
    @api car;
    @api carTileSelectedId;
    @wire(CurrentPageReference)
    pageRef;
    
    handlerCarTitleSelected(event){
        event.preventDefault();
        const carId = this.car.Id;
        const carSelected = new CustomEvent('carselected', {detail:carId});
        this.dispatchEvent(carSelected);

        fireEvent(this.pageRef, 'carselected', this.car.Id);
    }

    get isCarTileSelected(){
        if(this.car.Id === this.carTileSelectedId){
            return "tile selected";
        }
        return "tile";
    }
}