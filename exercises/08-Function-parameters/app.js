// Your code goes here:
function renderPerson (nombre, fecha_nacimiento, color, años, sexo){

  result = nombre+' is a '+años.toString()+' years old '+sexo+' born in '+fecha_nacimiento+' with '+color+' eyes'
  console.log(result)
  return result
}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));