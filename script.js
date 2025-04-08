

document.addEventListener("DOMContentLoaded", function() {
  const containers = document.querySelectorAll('.image2'); // <--- updated selector!

  containers.forEach(container => {
    container.addEventListener('click', function(e) {
      console.log('Container clicked:', container);
      if (container.classList.contains('active')) {
        container.classList.remove('active');
      } else {
        container.classList.add('active');
      }
    });
  });
});

document.querySelector('.carousel-section').classList.add('visible');
document.addEventListener('DOMContentLoaded', function () {
  restructureForMobile();
});
window.addEventListener('resize', function () {
  console.log('Window resized');
  restructureForMobile();
});
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
    // SCROLL LOGIC FOR HEADER
    const siteHeader = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });

    // MOBILE MENU TOGGLE
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        // Toggle hamburger icon to X
        hamburgerMenu.classList.toggle('change');
      
        // If menu is open, remove "closed" and freeze body scroll; else, add "closed" and restore scroll
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('closed');
          document.body.style.overflow = 'hidden';
        } else {
          navMenu.classList.add('closed');
          document.body.style.overflow = '';
        }
    });

    // Sub-menu toggling on mobile
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', e => {
        if (window.innerWidth <= 992) {
          e.stopPropagation();
          item.classList.toggle('open');
        }
      });
    });
});
  
document.addEventListener("DOMContentLoaded", function() {
  const sectionParis = document.getElementById("section-paris");
  const arrowParis = document.getElementById("arrow-paris");
  const sectionDiva = document.getElementById("section-diva");
  const arrowDiva = document.getElementById("arrow-diva");

  sectionParis.addEventListener("mouseenter", function() {
    arrowParis.classList.add("translate-x-1", "-translate-y-1");
  });
  sectionParis.addEventListener("mouseleave", function() {
    arrowParis.classList.remove("translate-x-1", "-translate-y-1");
  });

  sectionDiva.addEventListener("mouseenter", function() {
    arrowDiva.classList.add("translate-x-1", "-translate-y-1");
  });
  sectionDiva.addEventListener("mouseleave", function() {
    arrowDiva.classList.remove("translate-x-1", "-translate-y-1");
  });
});


const track = document.querySelector('.carousel-track');
const slides = track.children;
const prevButton = document.querySelector('.carousel-arrow.prev');
const nextButton = document.querySelector('.carousel-arrow.next');

let isMoving = false;

function isMobile() {
  return window.innerWidth < 768; // You can adjust breakpoint
}

function moveNext() {
    if (isMoving) return;
    isMoving = true;
  
    if (isMobile()) {
      // Mobile: Use clone method (clone first slide and animate from offscreen right)
      const firstSlide = track.firstElementChild;
      const clone = firstSlide.cloneNode(true);
      clone.style.opacity = '0.3';
      track.appendChild(clone);
  
      // Set initial transform so that the clone is offscreen to the right
      track.style.transition = 'none';
      track.style.transform = 'translateX(33.33%)';
  
      // Force reflow
      void track.offsetWidth;
  
      // Update center slide class (if needed)
      const currentCenter = track.querySelector('.active');
      if (currentCenter) currentCenter.classList.remove('active');
      if (slides[2]) slides[2].classList.add('active');
  
      // Animate the track back to 0
      track.style.transition = 'transform 0.8s ease';
      clone.style.opacity = '0.7';
      track.style.transform = 'translateX(0)';
  
      track.addEventListener('transitionend', function handler(e) {
        if (e.propertyName !== 'transform') return;
        track.removeEventListener('transitionend', handler);
  
        // Clean up: remove the clone and move the original first slide to the end
        track.removeChild(clone);
        track.appendChild(firstSlide);
  
        // Reset inline styles
        Array.from(slides).forEach(slide => slide.style.opacity = '');
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
  
        isMoving = false;
      });
    } else {
      // Desktop: Use the original method
      const outgoingSlide = track.firstElementChild;
      const incomingSlide = track.lastElementChild;
  
      const currentCenter = track.querySelector('.active');
      if (currentCenter) currentCenter.classList.remove('active');
      if (slides[2]) slides[2].classList.add('active');
  
      if (outgoingSlide) outgoingSlide.style.opacity = '0';
      if (incomingSlide) incomingSlide.style.opacity = '0';
  
      void track.offsetWidth;
  
      track.style.transition = 'transform 0.6s ease';
      if (incomingSlide) incomingSlide.style.opacity = '0.5';
      track.style.transform = 'translateX(-33.33%)';
  
      track.addEventListener('transitionend', function handler(e) {
        if (e.propertyName !== 'transform') return;
        track.removeEventListener('transitionend', handler);
  
        track.appendChild(outgoingSlide);
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
  
        Array.from(slides).forEach(slide => slide.style.opacity = '');
  
        isMoving = false;
      });
    }
  }

function movePrev() {
    if (isMoving) return;
    isMoving = true;
  
    // Grab the last slide
    const lastSlide = track.lastElementChild;
  
    // Move it to the front visually *after* the animation
    // So we need a visual clone to animate from
    const clone = lastSlide.cloneNode(true);
    clone.style.opacity = isMobile() ? '0.3' : '0';
    track.insertBefore(clone, track.firstElementChild);
  
    // Set initial position to look like we've already moved one slide left
    track.style.transition = 'none';
    track.style.transform = 'translateX(-33.33%)';
  
    // Force reflow
    void track.offsetWidth;
  
    // Update center slide class
    const currentCenter = track.querySelector('.active');
    if (currentCenter) currentCenter.classList.remove('active');
    if (slides[1]) slides[1].classList.add('active');
  
    // Animate to "back to normal" position
    track.style.transition = isMobile() ? 'transform 0.8s ease' : 'transform 0.6s ease';
    clone.style.opacity = isMobile() ? '0.7' : '0.5';
    track.style.transform = 'translateX(0)';
  
    // After transition ends, clean up and replace clone with real slide
    track.addEventListener('transitionend', function handler(e) {
      if (e.propertyName !== 'transform') return;
      track.removeEventListener('transitionend', handler);
  
      // Remove the visual clone
      track.removeChild(clone);
  
      // Move the actual last slide to the front
      track.insertBefore(lastSlide, track.firstElementChild);
  
      // Clear inline styles
      Array.from(slides).forEach(slide => slide.style.opacity = '');
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
  
      isMoving = false;
    });
  }

nextButton.addEventListener('click', moveNext);
prevButton.addEventListener('click', movePrev);





// Popup elements
const popupOverlay = document.getElementById('popup-overlay-2');
const popupImage = document.getElementById('popup-image-2');
const popupPostText = document.getElementById('popup-post-text-2');
const popupHashtags = document.getElementById('popup-hashtags-2');
const popupHeaderText = document.querySelector('.popup-header-text-2');
const shareX = document.getElementById('share-x-2');
const closePopupButton = document.getElementById('close-popup-2');
const socialMediaSection = document.querySelector('.social-media-section'); // Social Media Section

// Function to truncate text
function truncateText(text, maxLength = 270) {
    console.log("Original Text Length:", text.length, "| Max Length:", maxLength);
    if (text.length > maxLength) {
        console.log("Text truncated:", text.slice(0, maxLength) + '...');
        return text.slice(0, maxLength) + '...';
    }
    console.log("Text does not require truncation.");
    return text;
}

// Function to position the social media section at the bottom
function positionSocialMedia() {
    const popupSidebar = document.querySelector('.popup-sidebar-2'); // Sidebar container
    const contentHeight = popupSidebar.scrollHeight; // Total content height
    const viewportHeight = popupSidebar.offsetHeight; // Visible height of the sidebar

    // Ensure there's enough space for the social media section
    const remainingSpace = viewportHeight - contentHeight;
    if (remainingSpace > 0) {
        socialMediaSection.style.marginTop = `${remainingSpace}px`; // Push it to the bottom
    } else {
        socialMediaSection.style.marginTop = '20px'; // Default spacing if content overflows
    }
}

// Function to open popup with post data
function openPopup(postData, sourcePlatform) {
    try {
        console.log("Opening popup with post data:", postData);

        // Handle media (Twitter: media[0].url, Instagram: media_url)
        if (postData.media && postData.media.length > 0) {
            popupImage.src = postData.media[0].url || '';
            popupImage.style.display = 'block'; // Ensure the image is visible
        } else if (postData.media_url) {
            popupImage.src = postData.media_url; // For Instagram
            popupImage.style.display = 'block';
        } else {
            popupImage.style.display = 'none'; // Hide the image if no media
        }

        // Handle text content with truncation
        const fullText = postData.text || postData.caption || 'No content available';
        console.log("Full Text Before Truncation:", fullText);
        popupPostText.textContent = truncateText(fullText);

        // Ensure the truncated text is applied
        console.log("Popup Post Text (Truncated):", popupPostText.textContent);

        // Handle hashtags (Twitter only)
        popupHashtags.textContent = postData.entities?.hashtags?.length
            ? postData.entities.hashtags.map(tag => `#${tag.tag}`).join(' ')
            : '';

        // Update share link dynamically
        if (sourcePlatform === 'twitter') {
            shareX.href = `https://x.com/CompetentSwim/status/${postData.id}`;
            popupHeaderText.innerHTML = `
                <a href="https://x.com/CompetentSwim" target="_blank" style="text-decoration: none; color: #000;">
                    <img src="https://competentswimming.co.uk/wp-content/uploads/2024/12/logo-black.png" alt="Twitter Icon" class="inline-platform-icon">
                    Competent Swimming (@CompetentSwim)
                </a>
            `;
        } else if (sourcePlatform === 'instagram') {
            shareX.href = `https://www.instagram.com/p/${postData.id}/`;
            popupHeaderText.innerHTML = `
                <a href="https://www.instagram.com/competentswimming/" target="_blank" style="text-decoration: none; color: #000;">
                    <img src="https://competentswimming.co.uk/wp-content/uploads/2024/12/Instagram_Glyph_Gradient.png" alt="Instagram Icon" class="inline-platform-icon">
                    Competent Swimming (@competentswimming)
                </a>
            `;
        }

        // Show the popup
        popupOverlay.style.display = 'flex';

        // Position the social media section
        positionSocialMedia();
    } catch (error) {
        console.error('Error opening popup:', error);
    }
}

// Function to close the popup
function closePopup() {
    popupOverlay.style.display = 'none';
}

// Close popup when the close button is clicked
closePopupButton.addEventListener('click', closePopup);

// Optional: Close popup by clicking outside the popup content
popupOverlay.addEventListener('click', function (event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
});

// Attach event listeners to dynamically created posts
function attachPopupListeners() {
    const allPosts = document.querySelectorAll('.social-post');
    allPosts.forEach(post => {
        const postData = JSON.parse(post.getAttribute('data-post-data'));
        const platform = post.classList.contains('twitter') ? 'twitter' : 'instagram';

        // Ensure only one listener is added per element
        post.querySelectorAll('.social-media, .social-source-icon').forEach(element => {
            element.addEventListener('click', function () {
                openPopup(postData, platform);
            });
        });
    });

    console.log(`Popup listeners attached to ${allPosts.length} posts.`);
}

// Attach resize listener to adjust positioning dynamically
window.addEventListener('resize', () => {
    const isPopupVisible = popupOverlay.style.display === 'flex';
    if (isPopupVisible) {
        positionSocialMedia();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    function truncateText(text, maxLength = 270) {
        console.log("Truncating text:", text);
        if (text.length > maxLength) {
            console.log("Truncated Text:", text.slice(0, maxLength) + "...");
            return text.slice(0, maxLength) + "...";
        }
        return text;
    }

    function adjustSocialMediaLayout() {
        const socialPostsContainer = document.querySelector('.social-feed-content');
        if (!socialPostsContainer) {
            console.error("Social feed container not found!");
            return;
        }

        const screenWidth = window.innerWidth;
        let postsPerRow;

        // Determine the number of posts per row based on screen width
        if (screenWidth < 675) {
            console.log("Screen width < 675px: Setting grid to 1 column");
            postsPerRow = 1; // One column
            socialPostsContainer.style.display = 'grid';
            socialPostsContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
            socialPostsContainer.style.gap = '20px';
        } else if (screenWidth < 1100) {
            console.log("Screen width < 1100px: Setting grid to 3 columns");
            postsPerRow = 3; // Three columns
            socialPostsContainer.style.display = 'grid';
            socialPostsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
            socialPostsContainer.style.gap = '20px';
        } else {
            console.log("Screen width >= 1100px: Setting grid to 5 columns");
            postsPerRow = 5; // Five columns
            socialPostsContainer.style.display = 'grid';
            socialPostsContainer.style.gridTemplateColumns = 'repeat(5, 1fr)';
            socialPostsContainer.style.gap = '20px';
        }

        // Limit the number of visible posts to 3 rows
        const allPosts = Array.from(socialPostsContainer.querySelectorAll('.social-post'));
        const maxRows = 3; // Limit to 3 rows
        const maxPosts = postsPerRow * maxRows; // Calculate maximum visible posts

        allPosts.forEach((post, index) => {
            if (index < maxPosts) {
                post.style.display = ''; // Show posts within the limit

                // Apply truncation to post content
                const postTextElement = post.querySelector('.social-text');
                if (postTextElement) {
                    const originalText = postTextElement.textContent.trim();
                    postTextElement.textContent = truncateText(originalText);
                }
            } else {
                post.style.display = 'none'; // Hide posts outside the limit
            }
        });

        console.log(`Posts per row: ${postsPerRow}, Max posts visible: ${maxPosts}, Total posts: ${allPosts.length}`);
    }

    // Add event listener for window resize
    window.addEventListener('resize', adjustSocialMediaLayout);

    // Initial call to apply the logic on page load
    adjustSocialMediaLayout();
});





document.addEventListener('DOMContentLoaded', function () {
    let resizeTimeout;

    // Debounce function to limit resize calls
    function debounce(func, delay) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(func, delay);
    }

    function addRedirectHandler(platform) {
        return function () {
            if (platform === 'twitter') {
                window.location.href = 'https://x.com/CompetentSwim';
            } else if (platform === 'instagram') {
                window.location.href = 'https://www.instagram.com/competentswimming/';
            } else {
                console.error("Invalid platform specified for redirect");
            }
        };
    }

    function togglePopupActivity() {
        const popupOverlay = document.querySelector('#popup-overlay-2');
        const allPosts = document.querySelectorAll('#social-feed-content .social-post');
        const screenWidth = window.innerWidth;

        if (window.postsFetched < 2) {
            console.log("Waiting for all posts to load before toggling popup functionality.");
            return;
        }

        if (!popupOverlay || !allPosts.length) {
            console.error("Popup overlay or social posts not found!");
            return;
        }

        allPosts.forEach(post => {
            const postImage = post.querySelector('.social-media');
            if (postImage) {
                const clonedImage = postImage.cloneNode(true); // Clone to remove all existing listeners
                postImage.replaceWith(clonedImage);
            }
        });

        if (screenWidth < 1100) {
            console.log("Screen width < 1100px: Disabling popups and enabling redirects.");
            popupOverlay.style.display = 'none';
            allPosts.forEach(post => {
                const postImage = post.querySelector('.social-media');
                if (postImage) {
                    const platform = post.classList.contains('twitter') ? 'twitter' : 'instagram';
                    postImage.addEventListener('click', addRedirectHandler(platform));
                }
            });
        } else {
            console.log("Screen width >= 1100px: Enabling popups and disabling redirects.");
            popupOverlay.style.display = '';
            allPosts.forEach(post => {
                const postImage = post.querySelector('.social-media');
                if (postImage) {
                    const platform = post.classList.contains('twitter') ? 'twitter' : 'instagram';
                    postImage.addEventListener('click', function () {
                        const postData = JSON.parse(post.dataset.postData || '{}'); // Parse the dataset for structured data
                        console.log("Parsed Post Data:", postData);
                        openPopup(postData, platform);
                    });
                }
            });
        }
    }

    window.addEventListener('resize', () => debounce(togglePopupActivity, 200));

    const observer = new MutationObserver(togglePopupActivity);
    const socialFeedContainer = document.getElementById('social-feed-content');
    if (socialFeedContainer) {
        observer.observe(socialFeedContainer, { childList: true });
    }
});


function restructureForMobile(){

  const leftContainer = document.querySelector('.content-wrapper-v2 .left-column .left-column-inner');
  const videoElem = document.querySelector('.unique-video');
  const featureBoxes = document.querySelector('.left-column-inner .feature-boxes');
  const videoWrapper = document.querySelector('.unique-video-wrapper');
  const ctaContainerMain = document.querySelector('.cta-container-main');
  const newCtaContainer = document.querySelector('.new-cta-will-come-here');
  const originalCtaWrapper = document.querySelector('.cta-container-main-old');

  if (window.innerWidth < 1202) {
    // Move video above feature section
    if (leftContainer && videoElem && featureBoxes && !leftContainer.contains(videoElem)) {
      leftContainer.insertBefore(videoElem, featureBoxes);
      videoWrapper.style.justifyContent = 'center';
    }

    // Move CTA to bottom (outside left column)
    if (ctaContainerMain && newCtaContainer && !newCtaContainer.contains(ctaContainerMain)) {
      newCtaContainer.appendChild(ctaContainerMain);
    }

  } else {
    // Move video back to right column
    const rightContainer = document.querySelector('.content-wrapper-v2 .right-column');
    if (rightContainer && videoElem && !rightContainer.contains(videoElem)) {
      rightContainer.appendChild(videoElem);
    }

    // Move CTA back to original wrapper
    if (ctaContainerMain && originalCtaWrapper && !originalCtaWrapper.contains(ctaContainerMain)) {
      originalCtaWrapper.appendChild(ctaContainerMain);
    }
  }
}


