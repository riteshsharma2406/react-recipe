const queryStrings = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_APP_KEY
}

//https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=128d56c4&app_key=8a7a858b1680b851f0f6c826f6fad680

export const fetchData = async (defaultQuery) => {
    const {app_id,app_key} = queryStrings;
    try{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)
        const response = await data.json();
        return response;
    }catch(e)
    {
        console.log(e,'something went wrong')
        return e;
    }
}

export const fetchTabData = async (defaultQuery) => {
    const {app_id,app_key} = queryStrings;
    try{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`)
        const response = await data.json();
        return response;
    }catch(e)
    {
        console.log(e,'something went wrong')
        return e;
    }
}