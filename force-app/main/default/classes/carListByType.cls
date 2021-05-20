public with sharing class carListByType {
    public carListByType() {

    }
    @AuraEnabled (cacheable=true)
    public static List<Car__c> getCarsByType(String carTypeId){
        system.debug('cars===>'+[SELECT id, Name FROM Car__c where Car_Type__c = :carTypeId]);
        if(String.isEmpty(carTypeId)){
            return [SELECT Id, Name, Picture__c, Contact__r.Name,
                    Geolocation__latitude__s, Geolocation__longitude__s
                    FROM Car__c 
                    WHERE Available_For_Rent__c = true ];
        } else{
            return [SELECT Id, Name, Picture__c, Contact__r.Name,
                    Geolocation__latitude__s, Geolocation__longitude__s
                    FROM Car__c 
                    WHERE Available_For_Rent__c = true 
                    AND Car_type__c = :carTypeId];
        }     
    }
}
