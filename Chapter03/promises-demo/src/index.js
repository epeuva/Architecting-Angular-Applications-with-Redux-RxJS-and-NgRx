console.log('Starting...');

/*
*  Based on Chaining – dealing with several promises. Chapter 3 - Page 88 (102 pdf).
*/

function getData() {
    console.log('getData');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data from getData');
        })
    })
}

function getDataError(){
    console.log('getDataError');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('(reject from getDataError)');
        })
    })
}

function getMoreData(data) {
    console.log('getMoreData', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('(data from getMoreData)');
        })
    })
}

function getEvenMoreData(data) {
    console.log('getEvenMoreData', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('(data from getEvenMoreData)');
        })
    })
}

function handleError(error){
    console.error('Global Error', error);
}

function test1(){
    console.log('Test 1 ...'); 
    return getData()
        .then(getMoreData)
        .then(getEvenMoreData)
        .then((data)=>{console.log('End test 1', data)})
        .catch(handleError)
}

function test2(){
    console.log('Test 2 ...'); 
    return  getDataError()
        .then(getMoreData)
        .then(getEvenMoreData)
        .then((data)=>{console.log('End test 2', data)})
        .catch(handleError)
}

function test3(){
    console.log('Test 3 ...'); 
    return  getDataError()
        .then(getMoreData, (error) => {console.error('Local Error', error)})
        .then(getEvenMoreData)
        .then((data)=>{console.log('End test 3', data)})
        .catch(handleError)
}

test1()
    .then(test2) // test3 result will not be the same as test3
    .then(test3)
    .then(() => {console.log('...Ending v4')})
