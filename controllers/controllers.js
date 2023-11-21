import { Products } from "../model/model.js";

export const getAllProduts = async (req, res) => {
    const {company,name,feature,sort,select} =req.query;
    const queryObject={}
    if(company){
       queryObject.company=company 
       console.log(queryObject)
    } 
    if(name){
        queryObject.name={$regex :name ,$options : "i"}
        console.log(queryObject)
     } 
     if(feature){
        queryObject.feature=feature
     }
     let apiData=Products.find(queryObject)  
     if(sort){
        const sortFix=sort.replace("," ," ")
        apiData=apiData.sort(sortFix)
     }
     if(select){
      const selectFix=select.split(",").join(" ")
      apiData=apiData.select(selectFix)
   }
   let page=Number(req.query.page) || 1
   let limit =Number(req.query.limit) || 5
   let skip =(page -1)*limit
   apiData=apiData.skip(skip).limit(limit)

  const myProducts = await apiData;
  res.status(200).json( {
   myProducts,nbHits:myProducts.length
  } );
};
export const getAllProdutsTesting = async (req, res) => {
   console.log(req.query)
    const myData = await Products.find(req.query)

    res.status(200).json( myData );
};
