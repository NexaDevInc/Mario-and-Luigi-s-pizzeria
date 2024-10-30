const importGoogleFontsPreconnect1 = document.createElement('link');
importGoogleFontsPreconnect1.rel = 'preconnect';
importGoogleFontsPreconnect1.href = 'https://fonts.googleapis.com';
document.head.appendChild(importGoogleFontsPreconnect1);

const importGoogleFontsPreconnect2 = document.createElement('link');
importGoogleFontsPreconnect2.rel = 'preconnect';
importGoogleFontsPreconnect2.href = 'https://fonts.gstatic.com';
importGoogleFontsPreconnect2.crossOrigin = ``;
document.head.appendChild(importGoogleFontsPreconnect2);

const importGoogleFontsMontserrat = document.createElement('link');
importGoogleFontsMontserrat.rel = 'stylesheet';
importGoogleFontsMontserrat.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap';
document.head.appendChild(importGoogleFontsMontserrat);

const importFontAwesome = document.createElement("script");
importFontAwesome.src = `https://kit.fontawesome.com/7dee9b0f32.js`;
importFontAwesome.crossOrigin = `anonymous`;
document.head.appendChild(importFontAwesome);

document.addEventListener("DOMContentLoaded", function() {
    class BLHButton extends HTMLElement {
        static get observedAttributes() {
            return [
                `blh-button-image-position`,
                `blh-button-image`,
                `blh-button-text`,
                `blh-button-color`,
                `blh-button-active-color`,
                `blh-button-background-color`,
                `blh-button-active-background-color`,
                `blh-button-target`
            ];
        }

        connectedCallback() {
            const blhButtonImagePosition = this.getAttribute(`blh-button-image-position`) || `top`;
            const blhButtonImage = this.getAttribute(`blh-button-image`) || `fa-solid fa-chevron-up`;
            const blhButtonText = this.getAttribute(`blh-button-text`) || `...`;
            const blhButtonColor = this.getAttribute(`blh-button-color`) || `#000`;
            const blhButtonActiveColor = this.getAttribute(`blh-button-active-color`) || `#fff`;
            const blhButtonBackgroundColor = this.getAttribute(`blh-button-background-color`) || `transparent`;
            const blhButtonActiveBackgroundColor = this.getAttribute(`blh-button-active-background-color`) || `#000`;
            const blhButtonTarget = this.getAttribute(`blh-button-target`) || `#`;

            if (blhButtonImage) {
                const buttonImage = document.createElement(`blh-button-image`);
                buttonImage.className = blhButtonImage;
                this.appendChild(buttonImage);
            }

            if (blhButtonText) {
                const buttonText = document.createElement(`blh-button-text`);
                buttonText.textContent = blhButtonText;
                this.appendChild(buttonText);
            }

            if (blhButtonImagePosition === `top`) {
                this.style.flexDirection = `column`;
            } else if (blhButtonImagePosition === `right`) {
                this.style.flexDirection = `row-reverse`;
                this.style.gap = `6px`;
            } else if (blhButtonImagePosition === `bottom`) {
                this.style.flexDirection = `column-reverse`;
            } else if (blhButtonImagePosition === `left`) {
                this.style.flexDirection = `row`;
                this.style.gap = `6px`;
            }

            this.style.display = `flex`;
            this.style.alignItems = `center`;
            this.style.alignSelf = `flex-start`;
            this.style.padding = `6px`;
            this.style.borderRadius = `6px`;
            this.style.color = blhButtonColor;
            this.style.backgroundColor = blhButtonBackgroundColor;
            this.style.border = `2px solid ${blhButtonColor}`;
            this.style.cursor = `pointer`;
            this.style.transition = `all 125ms ease-in-out`;

            this.addEventListener(`mouseenter`, () => {
                this.style.color = blhButtonActiveColor;
                this.style.backgroundColor = blhButtonActiveBackgroundColor;
                this.style.border = `2px solid ${blhButtonActiveBackgroundColor}`;
            });

            this.addEventListener(`mouseleave`, () => {
                this.style.color = blhButtonColor;
                this.style.backgroundColor = blhButtonBackgroundColor;
                this.style.border = `2px solid ${blhButtonColor}`;
            });

            this.addEventListener(`click`, () => {
                window.location.href = blhButtonTarget;
            });
        }
    }

    customElements.define(`blh-button`, BLHButton);



    class BLHSearch extends HTMLElement {
        static get observedAttributes() {
            return [
                `blh-search-input-image-position`,
                `blh-search-input-image`,
                `blh-search-input-align`,
                `blh-search-input-placeholder`,
                `blh-search-button-position`,
                `blh-search-button-image-position`,
                `blh-search-button-image`,
                `blh-search-button-text`,
                `blh-search-color`,
                `blh-search-active-color`,
                `blh-search-background-color`,
                `blh-search-active-background-color`,
                `blh-search-button-target`
            ];
        }
        
        connectedCallback() {
            const blhSearchInputImagePosition = this.getAttribute(`blh-search-input-image-position`) || `left`;
            const blhSearchInputImage = this.getAttribute(`blh-search-input-image`) || `fa-solid fa-search`;
            const blhSearchInputAlign = this.getAttribute(`blh-search-input-align`) || `right`;
            const blhSearchInputPlaceholder = this.getAttribute(`blh-search-input-placeholder`) || `...`;
            const blhSearchButtonPosition = this.getAttribute(`blh-search-button-position`) || `right`;
            const blhSearchButtonImagePosition = this.getAttribute(`blh-search-button-image-position`) || `left`;
            const blhSearchButtonImage = this.getAttribute(`blh-search-button-image`) || `fa-solid fa-search`;
            const blhSearchButtonText = this.getAttribute(`blh-search-button-text`) || `...`;
            const blhSearchColor = this.getAttribute(`blh-search-color`) || `#000`;
            const blhSearchActiveColor = this.getAttribute(`blh-search-active-color`) || `#fff`;
            const blhSearchBackgroundColor = this.getAttribute(`blh-search-background-color`) || `transparent`;
            const blhSearchActiveBackgroundColor = this.getAttribute(`blh-search-active-background-color`) || `#000`;
            const blhSearchButtonTarget = this.getAttribute(`blh-search-button-target`) || `#`;

            const blhSearchInput = document.createElement(`blh-search-input`);
            if (blhSearchInputImage) {
                const searchInputImage = document.createElement(`blh-search-input-image`);
                searchInputImage.className = blhSearchInputImage;
                blhSearchInput.appendChild(searchInputImage);
            }
    
            const searchInput = document.createElement(`input`);
            searchInput.placeholder = blhSearchInputPlaceholder;
            blhSearchInput.appendChild(searchInput);

            this.appendChild(blhSearchInput);

            const blhSearchButton = document.createElement(`blh-search-button`);
            if (blhSearchButtonImage) {
                const searchButtonImage = document.createElement(`blh-search-button-image`);
                searchButtonImage.className = blhSearchButtonImage;
                blhSearchButton.appendChild(searchButtonImage);
            }

            if (blhSearchButtonText) {
                const searchButtonText = document.createElement(`blh-search-button-text`);
                searchButtonText.textContent = blhSearchButtonText
                blhSearchButton.appendChild(searchButtonText);
            }
            
            this.appendChild(blhSearchButton);

            if (blhSearchInputImagePosition === `left`) {
                blhSearchInput.style.flexDirection = `row`;
            } else if (blhSearchInputImagePosition === `right`) {
                blhSearchInput.style.flexDirection = `row-reverse`;
            }
    
            searchInput.style.all = `unset`;
            searchInput.style.textAlign = blhSearchInputAlign;
            
            blhSearchInput.style.display = `flex`;
            blhSearchInput.style.alignItems = `center`;
            blhSearchInput.style.gap = `6px`;

            if (blhSearchButtonImagePosition === `left`) {
                blhSearchButton.style.flexDirection = `row`;
            } else if (blhSearchButtonImagePosition === `right`) {
                blhSearchButton.style.flexDirection = `row-reverse`;
            }

            blhSearchButton.style.display = `flex`;
            blhSearchButton.style.alignItems = `center`;
            blhSearchButton.style.gap = `6px`;
            blhSearchButton.style.padding = `6px`;
            blhSearchButton.style.cursor = `pointer`;
            blhSearchButton.style.transition = `all 125ms ease-in-out`;

            if (blhSearchButtonPosition === `left`) {
                blhSearchButton.style.borderRight = `2px solid ${blhSearchColor}`;

                blhSearchButton.addEventListener(`mouseenter`, () => {
                    blhSearchButton.style.color = blhSearchActiveColor;
                    blhSearchButton.style.backgroundColor = blhSearchActiveBackgroundColor;
                    blhSearchButton.style.borderRight = `2px solid ${blhSearchActiveBackgroundColor}`;
                });

                blhSearchButton.addEventListener(`mouseleave`, () => {
                    blhSearchButton.style.color = blhSearchColor;
                    blhSearchButton.style.backgroundColor = blhSearchBackgroundColor;
                    blhSearchButton.style.borderRight = `2px solid ${blhSearchColor}`;
                });

                this.style.flexDirection = `row-reverse`;
                this.style.padding = `0 6px 0 0`;
            } else if (blhSearchButtonPosition === `right`) {
                blhSearchButton.style.borderLeft = `2px solid ${blhSearchColor}`;

                blhSearchButton.addEventListener(`mouseenter`, () => {
                    blhSearchButton.style.color = blhSearchActiveColor;
                    blhSearchButton.style.backgroundColor = blhSearchActiveBackgroundColor;
                    blhSearchButton.style.borderLeft = `2px solid ${blhSearchActiveBackgroundColor}`;
                });

                blhSearchButton.addEventListener(`mouseleave`, () => {
                    blhSearchButton.style.color = blhSearchColor;
                    blhSearchButton.style.backgroundColor = blhSearchBackgroundColor;
                    blhSearchButton.style.borderLeft = `2px solid ${blhSearchColor}`;
                });

                this.style.flexDirection = `row`;
                this.style.padding = `0 0 0 6px`;
            }

            blhSearchButton.addEventListener(`click`, () => {
                window.location.href = blhSearchButtonTarget;
            });

            this.style.display = `flex`;
            this.style.alignItems = `center`;
            this.style.alignSelf = `flex-start`;
            this.style.gap = `6px`;
            this.style.borderRadius = `6px`;
            this.style.color = blhSearchColor;
            this.style.backgroundColor = blhSearchBackgroundColor;
            this.style.border = `2px solid ${blhSearchColor}`;
        }
    }

    customElements.define(`blh-search`, BLHSearch);



    class BLHCounter extends HTMLElement {
        static get observedAttributes() {
            return [
                `blh-counter-input-placeholder`,
                `blh-counter-input-minimum`,
                `blh-counter-input-maximum`,
                `blh-counter-input-step`,
                `blh-counter-color`,
                `blh-counter-active-color`,
                `blh-counter-background-color`,
                `blh-counter-active-background-color`
            ];
        }

        connectedCallback() {
            const blhCounterInputPlaceholder = this.getAttribute(`blh-counter-input-placeholder`) || `...`;
            const blhCounterInputMinimum = this.getAttribute(`blh-counter-input-minimum`) || `0`;
            const blhCounterInputMaximum = this.getAttribute(`blh-counter-input-maximum`) || `10`;
            const blhCounterInputStep = this.getAttribute(`blh-counter-input-step`) || `1`;
            const blhCounterColor = this.getAttribute(`blh-counter-color`) || `#000`;
            const blhCounterActiveColor = this.getAttribute(`blh-counter-active-color`) || `#fff`;
            const blhCounterBackgroundColor = this.getAttribute(`blh-counter-background-color`) || `transparent`;
            const blhCounterActiveBackgroundColor = this.getAttribute(`blh-counter-active-background-color`) || `#000 `;

            const blhLeftCounterButton = document.createElement(`blh-left-counter-button`);
            const blhLeftCounterButtonImage = document.createElement(`blh-left-counter-button-image`);
            blhLeftCounterButtonImage.className = `fa-solid fa-minus`;
            blhLeftCounterButton.appendChild(blhLeftCounterButtonImage);
            this.appendChild(blhLeftCounterButton);

            blhLeftCounterButton.style.padding = `6px`;
            blhLeftCounterButton.style.borderRight = `2px solid ${blhCounterColor}`;
            blhLeftCounterButton.style.cursor = `pointer`;
            blhLeftCounterButton.style.transition = `all 125ms ease-in-out`;

            blhLeftCounterButton.addEventListener(`mouseenter`, () => {
                blhLeftCounterButton.style.color = blhCounterActiveColor;
                blhLeftCounterButton.style.backgroundColor = blhCounterActiveBackgroundColor;
                blhLeftCounterButton.style.borderRight = `2px solid ${blhCounterActiveBackgroundColor}`;
            });

            blhLeftCounterButton.addEventListener(`mouseleave`, () => {
                blhLeftCounterButton.style.color = blhCounterColor;
                blhLeftCounterButton.style.backgroundColor = blhCounterBackgroundColor;
                blhLeftCounterButton.style.borderRight = `2px solid ${blhCounterColor}`;
            });

            blhLeftCounterButton.addEventListener('click', () => {
                let blhCounterInputValue = Number(blhCounterInput.value);
                blhCounterInputValue -= Number(blhCounterInputStep);
            
                if (blhCounterInputValue < Number(blhCounterInputMinimum)) {
                    blhCounterInput.value = blhCounterInputMinimum;
                } else if (blhCounterInputValue > Number(blhCounterInputMaximum)) {
                    blhCounterInput.value = blhCounterInputMaximum;
                } else {
                    blhCounterInput.value = blhCounterInputValue;
                }

                blhCounterInput.style.width = `${Math.max(20, blhCounterInput.value.length * 10)}px`;
            });

            const blhCounterInput = document.createElement(`input`);
            blhCounterInput.placeholder = blhCounterInputPlaceholder;
            this.appendChild(blhCounterInput);

            blhCounterInput.style.all = `unset`;
            blhCounterInput.style.width = `20px`;
            blhCounterInput.style.textAlign = `center`;

            blhCounterInput.addEventListener('input', () => {
                blhCounterInput.value = blhCounterInput.value.replace(/(?!^-)\D/g, '');
                blhCounterInput.style.width = `${Math.max(20, blhCounterInput.value.length * 10)}px`;

                let blhCounterInputTimeout;
                clearTimeout(blhCounterInputTimeout);

                blhCounterInputTimeout = setTimeout(() => {
                    let blhCounterInputValue = Number(blhCounterInput.value);
                    if (blhCounterInputValue < Number(blhCounterInputMinimum)) {
                        blhCounterInput.value = blhCounterInputMinimum;
                    } else if (blhCounterInputValue > Number(blhCounterInputMaximum)) {
                        blhCounterInput.value = blhCounterInputMaximum;
                    } else {
                        blhCounterInput.value = blhCounterInputValue;
                    }
                }, 500);
            }); 
            
            const blhRightCounterButton = document.createElement(`blh-right-counter-button`);
            const blhRightCounterButtonImage = document.createElement(`blh-right-counter-button-image`);
            blhRightCounterButtonImage.className = `fa-solid fa-plus`;
            blhRightCounterButton.appendChild(blhRightCounterButtonImage);
            this.appendChild(blhRightCounterButton);

            blhRightCounterButton.style.padding = `6px`;
            blhRightCounterButton.style.borderLeft = `2px solid ${blhCounterColor}`;
            blhRightCounterButton.style.cursor = `pointer`;
            blhRightCounterButton.style.transition = `all 125ms ease-in-out`;

            blhRightCounterButton.addEventListener(`mouseenter`, () => {
                blhRightCounterButton.style.color = blhCounterActiveColor;
                blhRightCounterButton.style.backgroundColor = blhCounterActiveBackgroundColor;
                blhRightCounterButton.style.borderLeft = `2px solid ${blhCounterActiveBackgroundColor}`;
            });

            blhRightCounterButton.addEventListener(`mouseleave`, () => {
                blhRightCounterButton.style.color = blhCounterColor;
                blhRightCounterButton.style.backgroundColor = blhCounterBackgroundColor;
                blhRightCounterButton.style.borderLeft = `2px solid ${blhCounterColor}`;
            });

            blhRightCounterButton.addEventListener('click', () => {
                let blhCounterInputValue = Number(blhCounterInput.value);
                blhCounterInputValue += Number(blhCounterInputStep);
            
                if (blhCounterInputValue < Number(blhCounterInputMinimum)) {
                    blhCounterInput.value = blhCounterInputMinimum;
                } else if (blhCounterInputValue > Number(blhCounterInputMaximum)) {
                    blhCounterInput.value = blhCounterInputMaximum;
                } else {
                    blhCounterInput.value = blhCounterInputValue;
                }

                blhCounterInput.style.width = `${Math.max(20, blhCounterInput.value.length * 10)}px`;
            });

            this.style.display = `flex`;
            this.style.flexDirection = `row`;
            this.style.alignItems = `center`;
            this.style.alignSelf = `flex-start`;
            this.style.gap = `6px`;
            this.style.borderRadius = `6px`;
            this.style.color = blhCounterColor;
            this.style.backgroundColor = blhCounterBackgroundColor;
            this.style.border = `2px solid ${blhCounterColor}`;
        }
    }

    customElements.define(`blh-counter`, BLHCounter);

    

    class BLHGroup extends HTMLElement {
        static get observedAttributes() {
            return [
                `blh-group-orientation`,
                `blh-group-spacing`
            ];
        }

        connectedCallback() {
            const blhGroupOrientation = this.getAttribute(`blh-group-orientation`) || `horizontal`;
            const blhGroupSpacing = this.getAttribute(`blh-group-spacing`) || `6px`;

            if (blhGroupOrientation === `horizontal`) {
                this.style.flexDirection = `row`;
            } else if (blhGroupOrientation === `vertical`) {
                this.style.flexDirection = `column`;
            }

            this.style.display = `flex`;
            this.style.gap = blhGroupSpacing;
            this.style.alignItems = `center`;
            this.style.alignSelf = `flex-start`;
        }
    }

    customElements.define(`blh-group`, BLHGroup);
    


    class BLHSection extends HTMLElement {
        static get observedAttributes() {
            return [

            ];
        }

        connectedCallback() {

        }
    }
    
    customElements.define(`blh-section`, BLHSection);
    
    
    
    class BLHSubSection extends HTMLElement {
        static get observedAttributes() {
            return [

            ];
        }

        connectedCallback() {
            
        }
    }
    
    customElements.define(`blh-sub-section`, BLHSubSection);
});