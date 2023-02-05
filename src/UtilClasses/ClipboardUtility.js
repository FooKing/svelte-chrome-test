class ClipboardUtility {
    static async readFromClipboard() {
        try {
            return await navigator.clipboard.readText();
        } catch (error) {
            console.error(error);
            return "Error reading from clipboard";
        }
    }

    static async writeToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error(error);
            return "Error writing to clipboard";
        }
    }
}

export default ClipboardUtility;
