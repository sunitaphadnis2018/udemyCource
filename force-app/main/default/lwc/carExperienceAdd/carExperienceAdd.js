import { LightningElement, track, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Car_Experience__c.Name';
import EXPERIENCE_FIELD from '@salesforce/schema/Car_Experience__c.Experience__c';
import CAR_FIELD from '@salesforce/schema/Car_Experience__c.Car__c';
import CAR_EXPERIENCE_OBJECT from '@salesforce/schema/Car_Experience__c';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import { customToast } from 'c/utils';

export default class CarExperienceAdd extends LightningElement {
    @api carId;
    title;
    experiencedetails;
   

    handleInput(event){
       // console.log('event.target==>',event.target.name);
        if(event.target.name == 'title'){
            this.title=event.target.value;
            console.log('title input', this.title);
        }else  if(event.target.name == 'exp'){
            this.experiencedetails=event.target.value;
            console.log('experience input',this.experiencedetails);
        }
    }

    handleAddExperience(){
        console.log('carId==',this.carId);
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.title;
        fields[EXPERIENCE_FIELD.fieldApiName] = this.experiencedetails;
        fields[CAR_FIELD.fieldApiName] = this.carId;
        console.log('fields==',fields);
        const recordInput = { apiName : CAR_EXPERIENCE_OBJECT.objectApiName, fields };
        console.log('rec==',recordInput);
        createRecord(recordInput)
            .then(carExperience => {
                console.log('success');
                //console.log('success',customToast('Success','Added Car Experience','success'));
                this.dispatchEvent(customToast('Success','Added Car Experience','success'));
               // this.dispatchEvent(customToast('Success','Added Car Experience','success'));
                //console.log('car exp id==>',carExperience.id);
               /* this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                    }),
                );*/
            })
            .catch(error => {
                console.log('error==>',error.body.message);
                /*this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );*/
            });
    }
}