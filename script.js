// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

$(document).ready(function() {
    
    // ==========================================
    // Page Loader
    // ==========================================
    
    // Show loader for exactly 3 seconds with progress bar
    let progress = 0;
    const loadingDuration = 2500; // 2.5 seconds for progress
    const updateInterval = 30; // Update every 30ms
    const increment = (100 / (loadingDuration / updateInterval));
    
    const progressInterval = setInterval(function() {
        progress += increment;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
        }
        
        $('#loader-progress').css('width', progress + '%');
        $('#loader-percent').text(Math.floor(progress));
    }, updateInterval);
    
    // Hide loader after 2.5 seconds with animations
    setTimeout(function() {
        // Add fade-out animation class to loader
        $('#page-loader').addClass('fade-out');
        
        // After animation completes, remove loader and show content
        setTimeout(function() {
            $('#page-loader').remove();
            // Remove loading class to trigger page entrance animations
            $('body').removeClass('loading');
        }, 600); // Match CSS transition duration
    }, loadingDuration);
    
    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    
    $('#mobile-menu-btn').click(function() {
        $('#mobile-menu').toggleClass('active');
        const icon = $(this).find('i');
        
        if ($('#mobile-menu').hasClass('active')) {
            icon.removeClass('fa-bars').addClass('fa-times');
        } else {
            icon.removeClass('fa-times').addClass('fa-bars');
        }
    });
    
    // Close mobile menu when clicking on a link
    $('.mobile-nav-link').click(function() {
        $('#mobile-menu').removeClass('active');
        $('#mobile-menu-btn').find('i').removeClass('fa-times').addClass('fa-bars');
    });
    
    // ==========================================
    // Smooth Scroll Navigation
    // ==========================================
    
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        
        const target = $(this).attr('href');
        if (target !== '#') {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 800);
        }
    });

    // ==========================================
    // Hero Typing Effect
    // ==========================================

    const heroName = 'Debanjan';
    const $heroTypedName = $('#hero-typed-name');

    if ($heroTypedName.length) {
        let heroCharIndex = 0;

        function typeHeroName() {
            $heroTypedName.text(heroName.slice(0, heroCharIndex));

            if (heroCharIndex < heroName.length) {
                heroCharIndex += 1;
                setTimeout(typeHeroName, 140);
            } else {
                $heroTypedName.removeClass('typing-cursor');
            }
        }

        setTimeout(typeHeroName, 800);
    }
    
    // ==========================================
    // Project Filter Functionality
    // ==========================================
    
    $('.filter-btn').click(function() {
        const filter = $(this).data('filter');
        
        // Update active button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filter projects with animation
        if (filter === 'all') {
            $('.project-item').fadeOut(200, function() {
                $(this).removeClass('hidden').fadeIn(400);
            });
        } else {
            $('.project-item').each(function() {
                const category = $(this).data('category');
                const $item = $(this);
                
                $item.fadeOut(200, function() {
                    if (category === filter) {
                        $item.removeClass('hidden').fadeIn(400);
                    } else {
                        $item.addClass('hidden');
                    }
                });
            });
        }
    });
    
    // ==========================================
    // Active Navigation Link on Scroll
    // ==========================================
    
    $(window).scroll(function() {
        const scrollPos = $(window).scrollTop() + 100;
        
        $('section').each(function() {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();
            const sectionId = $(this).attr('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $('.nav-link').removeClass('text-blue-400');
                $(`.nav-link[href="#${sectionId}"]`).addClass('text-blue-400');
                
                // Update bottom nav active state
                $('.bottom-nav-item').removeClass('text-blue-400').addClass('text-slate-400');
                $(`.bottom-nav-item[href="#${sectionId}"]`).removeClass('text-slate-400').addClass('text-blue-400');
            }
        });
        
        // Navbar background on scroll
        if (scrollPos > 50) {
            $('#navbar').addClass('shadow-xl');
        } else {
            $('#navbar').removeClass('shadow-xl');
        }
    });
    
    // ==========================================
    // Scroll to Top Button (Optional)
    // ==========================================
    
    const scrollToTopBtn = $(`
        <button id="scroll-to-top" class="fixed bottom-24 md:bottom-8 right-4 bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg transition opacity-0 pointer-events-none z-40">
            <i class="fas fa-arrow-up"></i>
        </button>
    `);
    
    $('body').append(scrollToTopBtn);
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#scroll-to-top').removeClass('opacity-0 pointer-events-none').addClass('opacity-100');
        } else {
            $('#scroll-to-top').removeClass('opacity-100').addClass('opacity-0 pointer-events-none');
        }
    });
    
    $('#scroll-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
    
    // ==========================================
    // Project Card Hover Effects Enhancement
    // ==========================================
    
    $('.project-card').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.1)');
        },
        function() {
            $(this).find('img').css('transform', 'scale(1)');
        }
    );
    
    // Add transition to project images
    $('.project-card img').css('transition', 'transform 0.3s ease');
    
    // ==========================================
    // Parallax Effect on Scroll (Subtle)
    // ==========================================
    
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        $('.gradient-bg, .gradient-bg-light').css('background-position', 'center ' + (scrolled * 0.5) + 'px');
    });
    
    // ==========================================
    // Counter Animation for Stats
    // ==========================================
    
    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            $(element).text(Math.floor(current) + '+');
        }, 16);
    }
    
    // Trigger counter animation when about section is in view
    let countersAnimated = false;
    
    $(window).scroll(function() {
        if (!countersAnimated) {
            const aboutSection = $('#about');
            const scrollPos = $(window).scrollTop() + $(window).height();
            const aboutPos = aboutSection.offset().top;
            
            if (scrollPos > aboutPos) {
                countersAnimated = true;
                // Note: Adjust these if you want animated counters
                // The numbers are already displayed in HTML, so this is optional
            }
        }
    });
    
    // ==========================================
    // Loading Animation (Optional)
    // ==========================================
    
    $(window).on('load', function() {
        // Add any loading animation removal here if you add a preloader
        console.log('Portfolio loaded successfully!');
    });
    
    // ==========================================
    // Easter Egg - Konami Code (Fun Addition!)
    // ==========================================
    
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    $(document).keydown(function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function activateEasterEgg() {
        $('body').addClass('animate-pulse');
        showNotification('🎉 You found the secret! You\'re awesome!', 'success');
        
        setTimeout(function() {
            $('body').removeClass('animate-pulse');
        }, 2000);
    }
    
    // ==========================================
    // Cursor Trail Effect (Optional - Desktop Only)
    // ==========================================
    
    if ($(window).width() > 768) {
        $(document).mousemove(function(e) {
            // You can add custom cursor effects here if desired
        });
    }
    
    // ==========================================
    // Form Validation Enhancement
    // ==========================================
    
    $('input[name="email"]').on('blur', function() {
        const email = $(this).val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            $(this).addClass('border-red-500');
            if (!$(this).next('.error-message').length) {
                $(this).after('<span class="error-message text-red-500 text-sm mt-1 block">Please enter a valid email address</span>');
            }
        } else {
            $(this).removeClass('border-red-500');
            $(this).next('.error-message').remove();
        }
    });
    
    // ==========================================
    // Initialize Tooltips (if needed)
    // ==========================================
    
    $('[data-tooltip]').hover(
        function() {
            const tooltipText = $(this).data('tooltip');
            const tooltip = $(`<div class="tooltip absolute bg-slate-800 text-white px-3 py-2 rounded text-sm z-50">${tooltipText}</div>`);
            $('body').append(tooltip);
            
            const offset = $(this).offset();
            tooltip.css({
                top: offset.top - tooltip.outerHeight() - 10,
                left: offset.left + ($(this).outerWidth() / 2) - (tooltip.outerWidth() / 2)
            });
        },
        function() {
            $('.tooltip').remove();
        }
    );
    
    // ==========================================
    // Console Art (Developer Greeting)
    // ==========================================
    
    console.log('%c👋 Hey Developer!', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
    console.log('%cWelcome to my portfolio source code!', 'font-size: 14px; color: #8b5cf6;');
    console.log('%cFeel free to explore and learn. Happy coding! 🚀', 'font-size: 12px; color: #10b981;');
    console.log('%c\nBuilt with ❤️ using HTML, Tailwind CSS, jQuery & AOS.js', 'font-size: 11px; color: #6b7280;');
    
});

// ==========================================
// Prevent Right Click (Optional - Remove if not needed)
// ==========================================

// Uncomment if you want to disable right-click
/*
$(document).contextmenu(function(e) {
    e.preventDefault();
    showNotification('Right click is disabled on this site', 'info');
});
*/

// ==========================================
// Performance Optimization
// ==========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll event if needed for better performance
const optimizedScroll = debounce(function() {
    // Any heavy scroll operations can go here
}, 100);

$(window).scroll(optimizedScroll);