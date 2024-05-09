const jsonUploadForm = document.getElementById('json-upload-form');
const jsonPreviewContent = document.getElementById('json-preview-content');
const apiGatewayResponseContent = document.getElementById('api-gateway-response-content');

jsonUploadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('json-file');
    const file = fileInput.files;
    const formData = new FormData();
    formData.append('file', file);

    fetch('https://api-gateway-endpoint.execute-api.us-west-2.amazonaws.com/your-endpoint', {
        method: 'POST',
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            jsonPreviewContent.textContent = JSON.stringify(data, null, 2);
            apiGatewayResponseContent.textContent = `API Gateway Response: ${data.message}`;
        })
        .catch((error) => {
            console.error(error);
        });
});
