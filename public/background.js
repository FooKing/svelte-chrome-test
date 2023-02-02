import { scriptFuncs } from "./script_functions.js";

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {

    if (request.op === "execute_api_method") {

        const tabId = await getCurrentTabId();

        console.log(request);
        console.log(tabId);

        await chrome.scripting.executeScript({
            target : { tabId : tabId },
            world: chrome.scripting.ExecutionWorld.MAIN,
            func : scriptFuncs[request.methodName],
            args: getMethodArgs(request.args)
        });
    }
});

const getCurrentTabId = async () => {
    let queryOptions = { active: true, currentWindow: true };
    let [currentTab] = await chrome.tabs.query(queryOptions);

    return currentTab?.id;
}

const getMethodArgs = (args) => {

    return [...args];
}