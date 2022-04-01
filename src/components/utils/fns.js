window.ResizeCallBacks = [];
window.onresize = function() {
    this.ResizeCallBacks.forEach(callBack => callBack());
}
export let connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.wbekitConnection || {};

connection.name = (fallback) => {
    return connection.effectiveType.toUpperCase() || fallback
}
connection.type = connection.type || 'cellular';

/**
 * Gets the battery status from device (level, charging).
 * Acts on default properties if operation fails due to cross device issues
 *
 * @param {Function} update The function to invoke each time the battery state changes
 */
export const Battery = async function(update) {
    let battery = { level: 1, charging: false }; // Defaults
    if (navigator.getBattery) {
        try { battery = await navigator.getBattery(); } catch (err) {}
    }
    update({
        level: Math.round((battery.level) * 100),
        charging: battery.charging
    });

    battery.onlevelchange = battery.onchargingchange = () => Battery(update)
}

/**
 * Converts Object to JSON String
 * @param {Object} obj the object to convert to string
 * @returns String
 */
export const O2S = obj => JSON.stringify(obj);

/**
 * Converts JSON String to Object
 * @param {String} string the string to convert to Object
 * @returns Object
 */
export const S2O = string => JSON.parse(string);
