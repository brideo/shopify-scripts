var apiEndpoint = 'https://webmasters-serious-lang-needed.trycloudflare.com?shop=' + Shopify.shop;

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
