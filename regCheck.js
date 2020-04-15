function regCheck(regNum, location){
  
   if(regNum.startsWith(location)){
     return true;
   }
  else if(regNum.endsWith(location)){
    return true;
  }
  return false;
  }
  
  