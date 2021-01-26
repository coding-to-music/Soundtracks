const testArray = [1,2,3,4,5,6,7,8,9,0]


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


const counting = async ()=>{

  
  for (const item of testArray){
    await sleep(2000)
    console.log(item)
  }
}

counting()


