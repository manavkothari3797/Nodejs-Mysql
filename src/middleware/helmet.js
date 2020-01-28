const helmet = require('helmet');
const app = require('express')();

// header which can help protect against malicious injection of JavaScript, CSS, plugins, and more.
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ['"self"'],
      styleSrc: ['"self"', 'maxcdn.bootstrapcdn.com']
    }
  })
);

// Helmet’s crossdomain middleware prevents Adobe Flash and Adobe Acrobat from loading content on your site.
// by default value is 'none'
app.use(helmet.permittedCrossDomainPolicies());

// this middleware lets you disable browsers’ DNS prefetching by setting the X-DNS-Prefetch-Control header.
// app.use(helmet.dnsPrefetchControl());

// expect ct
// app.use(helmet.expectCt({ maxAge: 123 }));

// middleware lets you restrict which browser features can be used. For example, you can disable fullscreen or vibration APIs.
// app.use(helmet.featurePolicy({
//     features: {
//       fullscreen: ["'self'"],
//       vibrate: ["'none'"],
//       payment: ['example.com'],
//       syncXhr: ["'none'"]
//     }
//   }))

// Frameguard mitigates clickjacking attacks by setting the X-Frame-Options header.
app.use(helmet.frameguard({ action: 'sameorigin' }));

// The Hide Powered-By middleware removes the X-Powered-By header to make it slightly harder for attackers to
// see what potentially-vulnerable technology powers your site.
app.use(helmet.hidePoweredBy());

// this module sets the Strict-Transport-Security header to keep your users on HTTPS.
// const sixtyDaysInSeconds = 5184000
// app.use(helmet.hsts({
// //     maxAge: sixtyDaysInSeconds
//   }))

// this middleware sets the X-Download-Options to prevent Internet Explorer from executing
// downloads in your site’s context.
app.use(helmet.ieNoOpen());

// the no-cache middleware aims to disable browser caching by setting several headers.
app.use(helmet.noCache());

// the Don’t Sniff Mimetype middleware, noSniff, helps prevent browsers from trying to guess
// (“sniff”) the MIME type, which can have security implications. It does this by setting
// the X-Content-Type-Options header to nosniff.
app.use(helmet.noSniff());

// the Referrer Policy module can control the behavior of the Referer header by setting the Referrer-Policy header.
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

// the xssFilter middleware sets the X-XSS-Protection header to prevent reflected XSS attacks.
app.use(helmet.xssFilter());

module.exports = app;
