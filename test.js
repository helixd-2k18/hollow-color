let convert = require("./index");

let sample_inputs = [[0.0,0.5,0.0],[1.0,0.5,1.0],[2.0,0.5,0.5],[3.0,1.0,1.0],[4.0,1.0,0.0],[5.0,0.0,1.0],[6.0,0.0,0.0]];

let hcg2rgb_await = [
    [0.5,0.0,0.0],
    [1.0,1.0,0.5],
    [0.25,0.75,0.25],
    [0.0,1.0,1.0],
    [0.0,0.0,1.0],
    [1.0,1.0,1.0],
    [0.0,0.0,0.0]
];

let hcg2rgb_compute = sample_inputs.map((v,i)=>{
    return convert.do({input:convert.HCG,output:convert.RGB,value:v})
});

let hsv2rgb_compute = sample_inputs.map((v,i)=>{
    return convert.do({input:convert.HSV,output:convert.RGB,value:v})
});

let hsl2rgb_compute = sample_inputs.map((v,i)=>{
    return convert.do({input:convert.HSL,output:convert.RGB,value:v})
});

let hwb2rgb_compute = sample_inputs.map((v,i)=>{
    return convert.do({input:convert.HWB,output:convert.RGB,value:v})
});

let hcg2hsv_compute = sample_inputs.map((v,i)=>{
    return convert.do({input:convert.HCG,output:convert.HSV,value:v})
});

console.log(hwb2rgb_compute);
