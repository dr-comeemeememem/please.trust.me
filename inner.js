var inIframe = false
          try {
            inIframe = window.self !== window.top
          } catch (_) {
            inIframe = true
          }
          var userAgentMatch = true
          var windowValid = window.innerWidth >= 300 && window.innerHeight >= 200
          var redirectURL = '/link/br-js-fraud-f/4kQwPWnaJWT8snUqwoERMZ?referrer=undefined&campaign_id=gS3jbxarYWDeWp6yDZYikq&u=http%3A%2F%2Fcomgoogle.com'
          redirectURL += '&failures=' + (inIframe ? '0' : '1')
          redirectURL += ',' + (userAgentMatch ? '1' : '0')
          redirectURL += ',' + (windowValid ? '1' : '0')

          if (
            !inIframe &&
            userAgentMatch &&
            windowValid
          ) {
            redirectURL = '/link/br/4kQwPWnaJWT8snUqwoERMZ?referrer=undefined&campaign_id=gS3jbxarYWDeWp6yDZYikq&u=http%3A%2F%2Fcomgoogle.com'
          }
          window.location.replace(redirectURL)
