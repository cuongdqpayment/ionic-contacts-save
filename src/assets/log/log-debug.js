var isDebug = true;
var log = '' //telemetry log
var trackingLog =  (s,o) => {if (isDebug){log += Date.now() + ': ' + s + '\n'; if(o)log += JSON.stringify(o)}}
var printLog = ()=>{console.log(log)}
var getLog = () =>{return log}
var resetLog = ()=>{log=''}
var setDebug = (debug)=>{isDebug=debug}
module.exports = {
    put: trackingLog,
    get: getLog,
    print: printLog,
    reset: resetLog,
    setDebug: setDebug,
}