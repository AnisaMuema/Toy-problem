let studentsGrade = function(score, total){
    let percentage = (score/total)*100
    let gradeLetter = '';
    
    if(percentage > 79){
      gradeLetter = 'A'
    }
    else if(percentage > 60 && percentage <79){
       gradeLetter = 'B'
    }
    else if(percentage > 49  && percentage <60){
       gradeLetter = 'c'
    }
    else if(percentage > 40 && percentage < 49){
       gradeLetter = 'D'
    }
    else if(percentage < 40){
       gradeLetter = 'E'
    }
      
    return `You got ${gradeLetter}. ${percentage}%`
  }

  let results = studentsGrade();
  console.log(results);