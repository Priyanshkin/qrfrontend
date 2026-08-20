// const form = document.getElementById("apiForm");

// form.addEventListener("submit", async function (event) {

//     // Prevent page refresh
//     event.preventDefault();

//     // Get input values
//     const type = document.getElementById("type").value;
//     const data = document.getElementById("data").value;

//     // Create request object
//     const requestData = {
//     type: type,
//     url: data
// };

//     console.log("Sending:", requestData);

//     try {

//         // Send POST request
//         const response = await fetch(
//             "https://universalqrcodegenerator.up.railway.app/api/qr",
//             {
//                 method: "POST",

//                 headers: {
//                     "Content-Type": "application/json"
//                 },

//                 body: JSON.stringify(requestData)
//             }
//         );

//         // Check if API request was successful
//         if (!response.ok) {
//             throw new Error("API Error: " + response.status);
//         }

//         // Receive image as Blob
//         const imageBlob = await response.blob();

//         console.log("Image received:", imageBlob);

//         // Convert Blob into temporary image URL
//         const imageUrl = URL.createObjectURL(imageBlob);

//         // Get image element
//         const qrImage = document.getElementById("qrImage");

//         // Display QR image
//         qrImage.src = imageUrl;
//         qrImage.style.display = "block";

//     } catch (error) {

//         console.error("Error:", error);

//         alert("Error: " + error.message);
//     }

// });
// const form = document.getElementById("apiForm");

// let qrImageUrl = null;

// form.addEventListener("submit", async function (event) {

//     event.preventDefault();

//     const type = document.getElementById("type").value;
//     const userInput = document.getElementById("data").value;

//     const requestData = {
//         type: type,
//         url: userInput
//     };

//     try {

//         const response = await fetch(
//             "https://universalqrcodegenerator.up.railway.app/api/qr",
//             {
//                 method: "POST",

//                 headers: {
//                     "Content-Type": "application/json"
//                 },

//                 body: JSON.stringify(requestData)
//             }
//         );

//         if (!response.ok) {
//             throw new Error("API Error: " + response.status);
//         }

//         // Receive QR code image
//         const imageBlob = await response.blob();

//         // Remove previous image URL if it exists
//         if (qrImageUrl) {
//             URL.revokeObjectURL(qrImageUrl);
//         }

//         // Create image URL
//         qrImageUrl = URL.createObjectURL(imageBlob);

//         // Display QR code
//         const qrImage = document.getElementById("qrImage");

//         qrImage.src = qrImageUrl;
//         qrImage.style.display = "block";

//         // Show download button
//         document.getElementById("downloadBtn").style.display = "block";

//     } catch (error) {

//         console.error(error);

//         alert("Error: " + error.message);
//     }

// });


// // Download QR Code
// document.getElementById("downloadBtn").addEventListener("click", function () {

//     if (!qrImageUrl) {
//         return;
//     }

//     const link = document.createElement("a");

//     link.href = qrImageUrl;

//     // Name of downloaded file
//     link.download = "qrcode.png";

//     link.click();

// });
const form = document.getElementById("apiForm");

let qrImageUrl = null;

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const type = document.getElementById("type").value;
    const userInput = document.getElementById("data").value;

    // Variable that will contain the QR data
    let qrData;

    // If PHONE is selected, add tel:
    if (type === "PHONE") {
        qrData = "tel:" + userInput;
    } 
    else {
        qrData = userInput;
    }

    // Create JSON request
    const requestData = {
        type: type,
        url: qrData
    };

    console.log("Sending:", requestData);

    try {

        const response = await fetch(
            "https://universalqrcodegenerator.up.railway.app/api/qr",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(requestData)
            }
        );

        if (!response.ok) {
            throw new Error("API Error: " + response.status);
        }

        // Receive QR code image
        const imageBlob = await response.blob();

        // Remove previous image URL
        if (qrImageUrl) {
            URL.revokeObjectURL(qrImageUrl);
        }

        // Create image URL
        qrImageUrl = URL.createObjectURL(imageBlob);

        // Display QR code
        const qrImage = document.getElementById("qrImage");

        qrImage.src = qrImageUrl;
        qrImage.style.display = "block";

        // Show download button
        document.getElementById("downloadBtn").style.display = "block";

    } catch (error) {

        console.error(error);

        alert("Error: " + error.message);
    }

});


// Download QR Code
document.getElementById("downloadBtn").addEventListener("click", function () {

    if (!qrImageUrl) {
        return;
    }

    const link = document.createElement("a");

    link.href = qrImageUrl;

    link.download = "qrcode.png";

    link.click();

});