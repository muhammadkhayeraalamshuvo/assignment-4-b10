// problem-1
function calculateTax(income,expenses){ 
 if((income<0 || expenses<0 ) || expenses>income){
    return "Invalid Input"
 }
 if(income>=expenses) {return((income-expenses)*.2);}

}

// problem-2
function sendNotification(email) {
    // You have to write your code here
    let index=email.indexOf("@");
    // console.log("the @ index is", index)
    if(index===-1){
        return "Invalid Email" 
    }
   else{ 
    let firstPart=email.substring(0,index);
    let lastPart=email.substring(index+1,email.length);
     return `${firstPart} sent you an email from ${lastPart}`
    }
}

// problem-3
function checkDigitsInName(name) {
    //write your code here
    if(typeof(name)!=='string'){
        return "Invalid Input";
    }
    for(let i=0;i<name.length;i++)
    {
        if(!isNaN(name[i])){return true}
        
    }
    return false;

}

// problem-4
function calculateFinalScore(obj) {
    //write your code here
    let {name,testScore,schoolGrade,isFFamily}=obj;
    let profession=0;
    if(isFFamily){
      profession=20;
    }
    if(Array.isArray(obj)){
        return "Invalid Input"
    }
    if(typeof(obj)!=="object"){
        return "Invalid Input"
    }
    else{
        if((testScore+schoolGrade+profession)>=80){
            return true;
        }
        return false
    }
}

// problem-05
function  waitingTime(waitingTimes  , serialNumber) {
    // You have to write your code here
    if((Array.isArray(waitingTimes)!==true)){
        return "Invalid Input";
    }
    if(typeof(serialNumber)!=='number'){
        return "Invalid Input"
    }
    let sum=0;
    for(let i=0;i<waitingTimes.length;i++){
        sum=sum+waitingTimes[i];
    }
    let avg=Math.round(sum/waitingTimes.length);

    return avg*(serialNumber-(waitingTimes.length+1));
   }
