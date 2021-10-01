const { response, request } = require('express');
const { filterPlayers } = require('.');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  console.log("entra?")
   let a = await fetch(
      `https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`
  )
  console.log("entra?")
  let b = await a.json();
  console.log(b +"entra?")
  let hashMap = {},
  results = []

    for (let i = 0; i < b.length; i++){
        if (hashMap[b[i]]){
            results.push([hashMap[b[i]], b[i]])
        }else{
            hashMap[req.query.input - b[i].h_in] = b[i];
        }
      }
      if(results.length ==  0 )
      {
          resp.status(404).send("“No matches found");
      }
      resp.json(results);

 //resp.json(filterPlayers(req.body.pulgadas))
  
};

module.exports = { getPairsOfPlayers };
