import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function getFormulaOneDrivers(){
    console.log('Loading >...')

    try{

        const response = await fetch('https://www.formula1.com/en/results.html/2022/drivers.html');
        // console.log(response)

        //get the text of the body part.
        const body = await response.text();

        //selecting elements.
        const $ = cheerio.load(body);
        
        //check if item is unique.
        const wrapper = $('.resultsarchive-table').text();
        console.log(wrapper)

    }catch(err){
        console.log(err)
    }
}

getFormulaOneDrivers()