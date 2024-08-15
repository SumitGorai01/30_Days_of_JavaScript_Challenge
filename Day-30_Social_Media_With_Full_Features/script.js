document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts-container');
    const notificationList = document.getElementById('notification-list');
    const loginRegisterSection = document.getElementById('login-register');
    const dashboardSection = document.getElementById('dashboard');
    const usernameDisplay = document.getElementById('username');
    const emailDisplay = document.getElementById('email');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const editProfileForm = document.getElementById('edit-profile-form');
    const profilePic = document.getElementById('profile-pic');
    const closeModal = document.getElementsByClassName('close')[0];

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    const renderPosts = () => {
        postsContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <div class="post-details">
                    <span>${post.username}</span>
                    <span>${new Date(post.timestamp).toLocaleString()}</span>
                </div>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <div class="post-actions">
                    <button class="like-btn">Like (${post.likes})</button>
                    <button class="comment-btn">Comment (${post.comments.length})</button>
                </div>
                <div class="comments-container">
                    ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
                </div>
            `;
            postsContainer.appendChild(postElement);

            postElement.querySelector('.like-btn').addEventListener('click', () => {
                post.likes += 1;
                localStorage.setItem('posts', JSON.stringify(posts));
                renderPosts();
                addNotification(`${loggedInUser.username} liked your post!`);
            });

            postElement.querySelector('.comment-btn').addEventListener('click', () => {
                const comment = prompt('Enter your comment:');
                if (comment) {
                    post.comments.push(comment);
                    localStorage.setItem('posts', JSON.stringify(posts));
                    renderPosts();
                    addNotification(`${loggedInUser.username} commented on your post!`);
                }
            });
        });
    };

    const addNotification = (message) => {
        const notification = document.createElement('li');
        notification.textContent = message;
        notificationList.appendChild(notification);
    };

    const renderUserProfile = () => {
        usernameDisplay.textContent = loggedInUser.username;
        emailDisplay.textContent = loggedInUser.email;
        profilePic.src = loggedInUser.profilePic || 'default-avatar.png';
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            loggedInUser = user;
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            loginRegisterSection.style.display = 'none';
            dashboardSection.style.display = 'flex';
            renderUserProfile();
            renderPosts();
        } else {
            alert('Invalid username or password.');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        const userExists = users.some(user => user.username === username || user.email === email);
        if (userExists) {
            alert('Username or email already exists. Please choose a different one.');
            return;
        }

        const newUser = { username, email, password, profilePic: 'default-avatar.png' };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please log in.');
        document.getElementById('login-username').value = username;
        document.getElementById('login-password').value = '';
        registerForm.reset();
    });

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = document.getElementById('post-content').value;
        const image = document.getElementById('post-image').value;
        const newPost = {
            username: loggedInUser.username,
            content,
            image,
            likes: 0,
            comments: [],
            timestamp: new Date().getTime()
        };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
        postForm.reset();
    });

    editProfileBtn.addEventListener('click', () => {
        editProfileModal.style.display = 'block';
        document.getElementById('edit-username').value = loggedInUser.username;
        document.getElementById('edit-email').value = loggedInUser.email;
        document.getElementById('edit-profile-pic').value = loggedInUser.profilePic || '';
    });

    closeModal.addEventListener('click', () => {
        editProfileModal.style.display = 'none';
    });

    editProfileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loggedInUser.username = document.getElementById('edit-username').value;
        loggedInUser.email = document.getElementById('edit-email').value;
        loggedInUser.profilePic = document.getElementById('edit-profile-pic').value;
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        renderUserProfile();
        editProfileModal.style.display = 'none';
    });

    if (loggedInUser) {
        loginRegisterSection.style.display = 'none';
        dashboardSection.style.display = 'flex';
        renderUserProfile();
        renderPosts();
    }
});
