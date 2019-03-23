let convert = require("./index");

let sample_inputs = [[0,50,0],[60,50,100],[120,50,50],[180,100,100],[240,100,0],[300,0,100],[360,0,0]];

let hcg2rgb_await = [
    [0.5,0.0,0.0],
    [1.0,1.0,0.5],
    [0.25,0.75,0.25],
    [0.0,1.0,1.0],
    [0.0,0.0,1.0],
    [1.0,1.0,1.0],
    [0.0,0.0,0.0]
];

let hcg2rgb_compute = [
    convert.do({input:convert.HCG,output:convert.RGB,value:[0,0.5,0]})
];

console.log(hcg2rgb_compute);
