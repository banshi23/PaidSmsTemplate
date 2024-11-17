// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {


    const themeToggle = $('#themeToggle');

    // Load saved theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    $('html').attr('data-theme', currentTheme);
    toggleIcons(currentTheme);

    themeToggle.on('click', function () {
        const newTheme = $('html').attr('data-theme') === 'dark' ? 'light' : 'dark';
        $('html').attr('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleIcons(newTheme);
    });

    function toggleIcons(theme) {
        if (theme === 'light') {
            themeToggle.addClass('light-theme');
            themeToggle.removeClass('dark-theme');
        } else {
            themeToggle.addClass('dark-theme');
            themeToggle.removeClass('light-theme');
        }
    }

    $('#togglePassword').on('click', function () {
        const passwordField = $('#password');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);

        // Properly toggle the icon
        if (type === 'text') {
            $(this).removeClass('bi-eye-slash').addClass('bi-eye');
        } else {
            $(this).removeClass('bi-eye').addClass('bi-eye-slash');
        }
    });
    $('#toggleConfirmPassword').on('click', function () {
        const passwordField = $('#confirm-password');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);

        // Properly toggle the icon
        if (type === 'text') {
            $(this).removeClass('bi-eye-slash').addClass('bi-eye');
        } else {
            $(this).removeClass('bi-eye').addClass('bi-eye-slash');
        }
    });

    //Navbar event handler
    $('#appNavbar').on('hidden.bs.collapse', function () {
        // do something…
        $('.body-container').removeClass('body-container-bg-blur');
    });

    $('#appNavbar').on('show.bs.collapse', function () {
        // do something…
        $('.body-container').addClass('body-container-bg-blur');
    });
});