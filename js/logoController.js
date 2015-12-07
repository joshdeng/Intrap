// Tamino Martinius - All rights reserved

// Copyright © 2013 Tamino Martinius (http://zaku.eu)
// Copyright © 2013 Particleslider.com (http://particleslider.com

// Terms of usage: http://particleslider.com/legal/license

    var isMobile = navigator.userAgent &&
            navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 768;
    var ps = new ParticleSlider({
        ptlGap: isMobile || isSmall ? 0 : 2,
        ptlSize: isMobile || isSmall ? 1 : 3,
    });
//Remove the next line to enable particle noise
