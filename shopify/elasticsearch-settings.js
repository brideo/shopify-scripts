var apiEndpoint = 'https://develop-surgery-communications-headquarters.trycloudflare.com/api/get-settings?shop=' + Shopify.shop;

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
            var event = new Event('elasticsearchSettingsLoaded');
            
            window.dispatchEvent(event);
        }
    } catch (error) {
        
    }
}

fetchSettings();
