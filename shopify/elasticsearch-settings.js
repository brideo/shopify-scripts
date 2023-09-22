var apiEndpoint = 'https://nathan.ngrok.app/api/get-settings?shop=' + Shopify.shop;

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
            if (window.elasticConfig.is_enabled) {
                var event = new Event('elasticsearchSettingsLoaded');
                window.dispatchEvent(event);
            }
        }
    } catch (error) {
        
    }
}

fetchSettings();
