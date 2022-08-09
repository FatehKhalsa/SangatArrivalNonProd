ageCalculation = (s) =>{
  
    const dateSplitted = s.split("-");
    const year = dateSplitted[0];
    const month = dateSplitted[1];
    
    const data = new Date();
    const currentYearSplitted = date.toLocaleDateString().split(" ")[0];
    
    const currentYear = currentYearSplitted.split("/")[2];
    const currentMonth = currentYearSplitted.split("/")[1];
  
    
    console.log(currentMonth);
    
    let age = currentYear - year; 
    
    if(currentMonth>month){
          age++;
    }
    
    return age;
  }

  const calculateAge = {
    ageCalculation,
};
module.exports = calculateAge;