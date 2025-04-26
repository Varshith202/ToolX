// AdSense implementation
document.addEventListener('DOMContentLoaded', function() {
    // Only show ads to non-logged in users or on free tier
    auth.onAuthStateChanged((user) => {
        if (!user || (user && !user.paidMember)) {
            loadAdSense();
        }
    });
    
    function loadAdSense() {
        // Create script element
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
        
        // Initialize ads after script loads
        script.onload = () => {
            // Top banner ad
            (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-YOUR_PUBLISHER_ID",
                enable_page_level_ads: false,
                overlays: {bottom: true}
            });
            
            // Top horizontal ad
            const topAd = document.getElementById('topAd');
            if (topAd) {
                const adIns = document.createElement('ins');
                adIns.className = 'adsbygoogle';
                adIns.style.display = 'block';
                adIns.dataset.adClient = "ca-pub-YOUR_PUBLISHER_ID";
                adIns.dataset.adSlot = "YOUR_TOP_AD_SLOT";
                adIns.dataset.adFormat = "auto";
                adIns.dataset.fullWidthResponsive = "true";
                topAd.appendChild(adIns);
                (adsbygoogle = window.adsbygoogle || []).push({});
            }
            
            // Middle horizontal ad
            const middleAd = document.getElementById('middleAd');
            if (middleAd) {
                const adIns = document.createElement('ins');
                adIns.className = 'adsbygoogle';
                adIns.style.display = 'block';
                adIns.dataset.adClient = "ca-pub-YOUR_PUBLISHER_ID";
                adIns.dataset.adSlot = "YOUR_MIDDLE_AD_SLOT";
                adIns.dataset.adFormat = "auto";
                adIns.dataset.fullWidthResponsive = "true";
                middleAd.appendChild(adIns);
                (adsbygoogle = window.adsbygoogle || []).push({});
            }
        };
    }
});
