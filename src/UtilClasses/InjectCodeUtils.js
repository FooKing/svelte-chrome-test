export let methodName;
export let args;

const executeDebugApiMethod = async (methodName) => {
    const request = {
        op: "execute_api_method",
        methodName: methodName,
        args: []
    }

    const response = await chrome.runtime.sendMessage(request);
}