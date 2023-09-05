/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
var Email = {
  // The Email object encapsulates functions related to sending emails.

  send: function (a) {
    // This function sends an email using the provided data 'a'.
    // It returns a Promise that resolves when the email is sent.

    return new Promise(function (n, e) {
      // Create a random 'nocache' value for the email request.
      (a.nocache = Math.floor(1e6 * Math.random() + 1)),
      
      // Set the 'Action' property to "Send" in the email data.
      (a.Action = "Send");

      // Convert the email data to a JSON string.
      var t = JSON.stringify(a);

      // Send the email data using an AJAX POST request to the SMTP server.
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        // Resolve the Promise when the email request is complete.
        n(e);
      });
    });
  },

  ajaxPost: function (e, n, t) {
    // This function sends an AJAX POST request to the specified URL 'e'.
    // 'n' contains the data to be sent, and 't' is a callback function to handle the response.

    var a = Email.createCORSRequest("POST", e);

    // Set the 'Content-type' header for the request.
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),

    // Define what should happen when the response is loaded.
    (a.onload = function () {
      // Retrieve the response text.
      var e = a.responseText;
      
      // Call the provided callback function 't' with the response data.
      null != t && t(e);
    }),

    // Send the request with the data 'n'.
    a.send(n);
  },

  ajax: function (e, n) {
    // This function sends an AJAX GET request to the specified URL 'e'.
    // 'n' is a callback function to handle the response.

    var t = Email.createCORSRequest("GET", e);

    // Define what should happen when the response is loaded.
    (t.onload = function () {
      // Retrieve the response text.
      var e = t.responseText;
      
      // Call the provided callback function 'n' with the response data.
      null != n && n(e);
    }),

    // Send the GET request.
    t.send();
  },

  createCORSRequest: function (e, n) {
    // This function creates a cross-origin XMLHttpRequest or XDomainRequest object
    // depending on the browser's capabilities, and opens a request to the specified URL 'n'.
    // It returns the created object.

    var t = new XMLHttpRequest();

    // Check if the browser supports XMLHttpRequest with CORS.
    if ("withCredentials" in t) {
      t.open(e, n, !0); // Create a CORS request.
    } else if (typeof XDomainRequest !== "undefined") {
      t = new XDomainRequest();
      t.open(e, n); // Create an XDomainRequest for older IE versions.
    } else {
      t = null; // CORS not supported in this browser.
    }

    return t;
  },
};
