const fs=require("fs")

//add 
const addperson = (
  id,
  fname,
  lname,
  age,
  city,
  phone,
  sub1,
  sub2,
  sub3,
  sub4,
  sub5,
  sub6
) => {
  //1
  const alldata = getdata();
  let sum1 = sub1+sub2+sub3+sub4+sub5+sub6;
  let avg = sum1/6;

  //prevent duplicated id
  const dublicatedID = alldata.filter((i) => i.id === id);
  if (dublicatedID.length == 0) {
    //3
    alldata.push({
      id,
      fname,
      lname,
      age,
      city,
      phone,
      sum1,
      avg,
    });
  } else {
    console.log("error id number ( " + id + " ) is already taken");
    //console.log(dublicatedID)
  }

  //4
  savedata(alldata);
};
//delete 
const delperson = (id)=>{
  //1
    const alldata = getdata();
    
    //keep all data that dont match givin id
    const keep = alldata.filter((i) => i.id !== id);

    savedata(keep);
};
//read 
const read_id = (id)=>{
  //1
    const alldata = getdata();
    
    //read first data only that match givin id
    const read_D1=alldata.find((i) => i.id===id);
    console.log(read_D1);
};
//List 
const details_person = (id)=>{
  //1
    const alldata = getdata();
    
    //list data that match givin id
    alldata.map((i) => {if(i.id === id){console.log("name : " + i.fname+", age : "+i.age,", City : "+i.city)}});
};
//2
const getdata=()=>{
    try{
        const datajson = fs.readFileSync("d1.json").toString();
        return JSON.parse(datajson);
    }

    catch{
        return []
    }
}
//5
const savedata=(x)=>{
    return fs.writeFileSync("d1.json",JSON.stringify(x));
}

//6
module.exports = {
  addperson,
  delperson,
  details_person,
  read_id,
};
