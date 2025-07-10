
document.addEventListener('DOMContentLoaded', function() {
    const inviteButton = document.querySelector('.invite-button');
    const botCard = document.querySelector('.bot-card');
    
    // Add click animation to invite button
    inviteButton.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
    
    // Bot avatar is now static (no floating animation)
    
    // Add entrance animation
    botCard.style.opacity = '0';
    botCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        botCard.style.transition = 'all 0.6s ease';
        botCard.style.opacity = '1';
        botCard.style.transform = 'translateY(0)';
    }, 100);
});
