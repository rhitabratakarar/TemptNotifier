const systeminformation = require('systeminformation');
const notifier = require('node-notifier');

const temperatureThreshold = 70;
const timeInterval = 10 * 1000;

async function getAvgCpuTemperature() {
    let cpuTempt = await systeminformation.cpuTemperature();
    return cpuTempt.main;
}

async function startAppExecution() {
    let cpuTempt = await getAvgCpuTemperature();
    if (cpuTempt >= temperatureThreshold) {
        notifier.notify({
            title: "TemptNotifier",
            message: "Temperature is at: " + cpuTempt
        });
    }
}

notifier.notify("App Started.");
setInterval(startAppExecution, timeInterval);
