import { useEffect } from 'react';

// Component to disable Google Places autocomplete on specific fields
export function DisablePlacesAutocomplete() {
  useEffect(() => {
    // Function to disable Google Places on specific input fields
    const disablePlacesOnFormFields = () => {
      // Target name and contact fields specifically
      const formFields = document.querySelectorAll('input[data-form-type="name"], input[data-form-type="contact"]');
      
      formFields.forEach((input) => {
        const htmlInput = input as HTMLInputElement;
        
        // Set autocomplete attributes to prevent Google Places
        htmlInput.setAttribute('autocomplete', 'off');
        htmlInput.setAttribute('data-lpignore', 'true');
        htmlInput.setAttribute('data-form-type-no-places', 'true');
        
        // Remove any existing event listeners that might be from Google Places
        const newInput = htmlInput.cloneNode(true) as HTMLInputElement;
        htmlInput.parentNode?.replaceChild(newInput, htmlInput);
        
        // Re-attach our own event listeners
        newInput.addEventListener('focus', (e) => {
          (e.target as HTMLInputElement).setAttribute('autocomplete', 'off');
        });
        
        newInput.addEventListener('input', (e) => {
          // Prevent any delayed Google Places initialization
          (e.target as HTMLInputElement).setAttribute('autocomplete', 'off');
        });
      });
    };

    // Add CSS to completely hide Google Places dropdown
    const addHidePlacesCSS = () => {
      if (!document.getElementById('hide-places-autocomplete')) {
        const style = document.createElement('style');
        style.id = 'hide-places-autocomplete';
        style.textContent = `
          /* Hide Google Places dropdown for form fields */
          input[data-form-type="name"] + .pac-container,
          input[data-form-type="contact"] + .pac-container,
          input[data-form-type-no-places] + .pac-container {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            z-index: -1 !important;
          }
          
          /* Ensure address field Google Places is visible */
          input[data-places-enabled="true"] + .pac-container {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            pointer-events: auto !important;
            z-index: 10000 !important;
          }
          
          /* Hide Google Places predictions globally except for address */
          .pac-container:not(.pac-container-address) {
            display: none !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Run both functions
    addHidePlacesCSS();
    
    // Use MutationObserver to disable Places on dynamically added fields
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.matches('input[data-form-type]') || element.querySelector('input[data-form-type]')) {
                setTimeout(disablePlacesOnFormFields, 50);
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Initial run
    disablePlacesOnFormFields();

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}