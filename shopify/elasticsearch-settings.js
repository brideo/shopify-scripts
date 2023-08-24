var apiEndpoint = 'https://sticker-arts-million-mean.trycloudflare.com/api/get-settings?shop=' + Shopify.shop;

async function fetchSettings()
{
    try {
        var response = await fetch(apiEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            window.elasticConfig = await response.json();
        } else {
            console.error('API response was not ok:', response);
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchSettings();
