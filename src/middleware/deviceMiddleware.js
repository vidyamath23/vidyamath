// middleware/deviceMiddleware.js
function detectDevice(req) {
    const userAgent = req.headers['user-agent'] || '';
    const isMobile = /mobile/i.test(userAgent);
    const isTablet = /tablet|ipad/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;
    const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
  
    return {
      type: deviceType,
      isMobile,
      isTablet,
      isDesktop
    };
  }
  
  function deviceMiddleware(req, res, next) {
    // Add device type info to res.locals so it's available in all views
    res.locals.device = detectDevice(req);
    next();
  }
  
  module.exports = deviceMiddleware;
  