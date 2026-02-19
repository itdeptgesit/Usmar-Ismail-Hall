/**
 * Utility to handle form submissions to Google Sheets via Google Apps Script.
 * 
 * To use this:
 * 1. Create a Google Sheet.
 * 2. Go to Extensions > App Script.
 * 3. Paste the following Google Apps Script:
 * 
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = JSON.parse(e.postData.contents);
 *   sheet.appendRow([new Date(), data.name, data.email, data.type, data.message]);
 *   return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
 * }
 * 
 * 4. Deploy as a Web App (Set "Who has access" to "Anyone").
 * 5. Replace SCRIPT_URL below with your deployed URL.
 */

const SCRIPT_URL = ""; // TODO: Add your Google Script URL here

export const submitContactForm = async (data: {
    name: string;
    email: string;
    type: string;
    message: string;
}) => {
    if (!SCRIPT_URL) {
        console.warn("Contact Form: SCRIPT_URL is not set. Simulating success...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        return { success: true, message: "Demo mode: Submission simulated." };
    }

    try {
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors", // Required for Google Scripts
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return { success: true, message: "Submission sent successfully." };
    } catch (error) {
        console.error("Form submission error:", error);
        return { success: false, message: "Failed to send message. Please try again later." };
    }
};
