// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Auth state listener
auth.onAuthStateChanged((user) => {
    const authWall = document.getElementById('authWall');
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    
    if (user) {
        // User is signed in
        authWall.style.display = 'none';
        authButtons.style.display = 'none';
        userProfile.style.display = 'flex';
        
        // Update user info
        document.getElementById('userName').textContent = user.displayName || user.email.split('@')[0];
        document.getElementById('userAvatar').textContent = user.displayName ? 
            user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase();
    } else {
        // User is signed out
        if (window.location.pathname !== '/index.html' && 
            window.location.pathname !== '/' &&
            !window.location.pathname.includes('/auth/')) {
            window.location.href = '/index.html';
        }
        
        authButtons.style.display = 'flex';
        userProfile.style.display = 'none';
    }
});

// Logout function
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = '/index.html';
    }).catch((error) => {
        console.error('Logout error:', error);
    });
});
