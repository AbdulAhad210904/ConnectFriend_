class Main extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' }); // Create a shadow DOM
      shadow.innerHTML = `
        <style>
        :root {
          --primary-color-hue: 252;
          --dark-color-lightness: 17%;
          --light-color-lightness: 95%;
          --white-color-lightness: 100%;
      
          --color-white: hsl(252, 30%, var(--white-color-lightness));
          --color-light: hsl(252, 30%, var(--light-color-lightness));
          --color-grey: hsl(252, 15%, 65%);
          --color-primary: hsl(var(--primary-color-hue), 75%, 60%);
          --color-secondary: hsl(252, 100%, 90%);
          --color-success: hsl(120, 95%, 65%);
          --color-danger: hsl(0, 95%, 65%);
          --color-dark: hsl(252, 30%, var(--dark-color-lightness));
          --color-black: hsl(252, 30%, 10%);
      
          --border-radius: 2rem;
          --card-border-radius: 1rem;
          --btn-padding: 0.6rem 2rem;
          --search-padding: 0.6rem 1rem;
          --card-padding: 1rem;
      
          --sticky-top-left: 5.4rem;
          --sticky-top-right: -18rem;
      
      }
      
      *, *::before, *::after {
          margin: 0;
          padding: 0;
          outline: 0;
          box-sizing: border-box;
          text-decoration: none;
          list-style: none;
          border: none;
      }
      
        .container {
          width: 80%;
          margin: 0 auto;
      }
      
      .profile-photo {
          width: 2.7rem;
          aspect-ratio: 1/1;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;
      }
      
      img {
          display: block;
          width: 100%;
      }
      
      .btn {
          display: inline-block;
          padding: var(--btn-padding);
          font-weight: 500;
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all 300ms ease;
          font-size: 0.9rem;
      }
      
      .btn:hover {
          opacity: 0.8;
      }
      
      .btn-primary {
          background: var(--color-primary);
          color: var(--color-white);
      }
      
      .text-bold {
          font-weight: 500;
      }
      
      .text-muted {
          color: var(--color-grey);
      }
      /* =============== Main ============== */
main {
    position: relative;
    top: 5.4rem;
}

main .container {
    display: grid;
    grid-template-columns: 18vw auto  20vw;
    column-gap: 2rem;
    position: relative;
}

/* =============== Left ============== */
main .container .left {
    height: max-content;
    position: sticky;
    top: var(--sticky-top-left);
}

main .container .left .profile {
    padding: var(--card-padding);
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    display: flex;
    align-items: center;
    column-gap: 1rem;
    width: 100%;
    cursor: pointer;
    color: inherit;
}

/* =============== Sidebar ============== */
.left .sidebar {
    margin-top: 1rem;
    background: var(--color-white);
    border-radius: var(--card-border-radius);
}

.left .sidebar .menu-item {
    display: flex;
    align-items: center;
    height: 4rem;
    cursor: pointer;
    transition: all 300ms ease;
    position: relative;
    color: inherit;
}

.left .sidebar .menu-item:hover {
    background: var(--color-light);
}

.left .sidebar i {
    font-size: 1.4rem;
    color: var(--color-grey);
    margin-left: 2rem;
    position: relative;
}

.left .sidebar i .notification-count {
    background: var(--color-danger);
    color: white;
    font-size: 0.7rem;
    width: fit-content;
    border-radius: 0.8rem;
    padding: 0.1rem 0.4rem;
    position: absolute;
    top: -0.2rem;
    right: -0.3rem;
}

.left .sidebar h3 {
    margin-left: 1.5rem;
    font-size: 1rem;
}

.left .sidebar .active {
    background: var(--color-light);
}

.left .sidebar .active i, 
.left .sidebar .active h3 {
    color: var(--color-primary);
}

.left .sidebar .active::before {
    content: "";
    display: block;
    width: 0.5rem;
    height: 100%;
    position: absolute;
    background: var(--color-primary);
}

.left .sidebar .menu-item:first-child.active {
    border-top-left-radius: var(--card-border-radius);
    overflow: hidden;
}

.left .sidebar .menu-item:last-child.active {
    border-bottom-left-radius: var(--card-border-radius);
    overflow: hidden;
}

.left .btn {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    margin-bottom: 0.7rem;
}

/* =============== Notification Popup ============== */
.left .notifications-popup {
    position: absolute;
    top: 0;
    left: 110%;
    width: 30rem;
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    box-shadow: 0 0 2rem hsl(var(--color-primary), 75%, 60%, 25%);
    z-index: 8;
    display: none;
}

.left .notifications-popup::before {
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    display: block;
    background: var(--color-white);
    position: absolute;
    left: -0.6rem;
    transform: rotate(45deg);
}

.left .notifications-popup > div {
    display: flex;
    align-items: start;
    gap: 1rem;
    margin-bottom: 1rem;
}

.left .notifications-popup small {
    display: block;
}

/* =============== Middle ============== */
/* =============== Stories ============== */
.middle .stories {
    display: flex;
    justify-content: space-between;
    height: 12rem;
    gap: 0.5rem;
}

.middle .stories .story {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 0.75rem;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.middle .stories .story::before {
    content: "";
    display: block;
    width: 100%;
    height: 5rem;
    background: linear-gradient(transparent, rgba(0,0,0,0.75));
    position: absolute;
    bottom: 0;
}

.middle .stories .story .name {
    z-index: 0;
}

.middle .stories .story:nth-child(1) {
    background: url("./images/story-1.jpg")
    no-repeat center center/cover;
}

.middle .stories .story:nth-child(2) {
    background: url("./images/story-2.jpg")
    no-repeat center center/cover;
}

.middle .stories .story:nth-child(3) {
    background: url("./images/story-3.jpg")
    no-repeat center center/cover;
}

.middle .stories .story:nth-child(4) {
    background: url("./images/story-4.jpg")
    no-repeat center center/cover;
}

.middle .stories .story:nth-child(5) {
    background: url("./images/story-5.jpg")
    no-repeat center center/cover;
}

.middle .stories .story:nth-child(6) {
    background: url("./images/story-6.jpg")
    no-repeat center center/cover;
}

.middle .story .profile-photo {
    width: 2rem;
    height: 2rem;
    align-self: start;
    border: 3px solid var(--color-light);
}

/* =============== Create Post ============== */
.middle .create-post {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    background: var(--color-white);
    padding: 0.4rem var(--card-padding);
    border-radius: var(--border-radius);
}

.middle .create-post input[type="text"] {
    width: 100%;
    justify-self: start;
    padding-left: 1rem;
    background: transparent;
    color: var(--color-dark);
    margin-right: 1rem;
}

/* =============== Feeds ============== */
.middle .feeds .feed {
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    margin: 1rem 0;
    font-size: 0.85rem;
    line-height: 1.5;
}

.middle .feed .head {
    display: flex;
    justify-content: space-between;
}

.middle .feed .user {
    display: flex;
    gap: 1rem;
}

.middle .feed .photo {
    border-radius: var(--card-border-radius);
    overflow: hidden;
    margin: 0.7rem 0;
}

.middle .feed .action-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    margin: 0.6rem 0;
}

.middle .liked-by {
    display: flex;
}

.middle .liked-by span {
    width: 1.4rem;
    height: 1.4rem;
    display: block;
    border-radius:50%;
    overflow: hidden;
    border: 2px solid var(--color-white);
    margin-left: -0.6rem;
}

.middle .liked-by span:first-child {
    margin: 0;
}

.middle .liked-by p {
    margin-left: 0.5rem;
}

/* =============== Right ============== */
main .container .right {
    height: max-content;
    position: sticky;
    top: var(--sticky-top-right);
    bottom: 0;
}

/* =============== Messages ============== */
.right .messages {
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
}

.right .messages .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.right .messages i {
    font-size: 1.4rem;
}

.right .messages .search-bar {
    display: flex;
    margin-bottom: 1rem;
}

.right .messages .category {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.right .messages .category h6 {
    width: 100%;
    text-align: center;
    border-bottom: 4px solid var(--color-light);
    padding-bottom: 0.5rem;
    font-size: 0.75rem;
}

.right .messages .category .active {
    border-color: var(--color-dark);
}

.right .messages .message-requests {
    color: var(--color-primary);
}

.right .messages .message {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: start;
}

.right .message .profile-photo {
    position: relative;
    overflow: visible;
}

.right .profile-photo img {
    border-radius: 50%;
}

.right .messages .message:last-child {
    margin: 0;
}

.right .messages .message p {
    font-size:0.8rem;
}

.right .messages .message .profile-photo .active {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    border: 3px solid var(--color-white);
    background: var(--color-success);
    position: absolute;
    bottom: 0;
    right: 0;
}

/* =============== Friend Requests ============== */
.right .friend-requests {
    margin-top: 1rem;
}

.right .friend-requests h4 {
    color: var(--color-grey);
    margin: 1rem 0;
}

.right .request {
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-bottom: 0.7rem;
}

.right .request .info {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.right .request .action {
    display: flex;
    gap: 1rem;
}
        </style>
        <main>
        <div class="container">
            <!----------------- LEFT -------------------->
            <div class="left">
                <a href="pages/profile.html" class="profile">
                    <div class="profile-photo">
                        <img src="./images/profile-1.png">
                    </div>
                    <div class="handle">
                        <h4>Abdul Ahad Ali</h4>
                        <p class="text-muted">
                            @abdul_ahad
                        </p>
                    </div>
                </a>

                <!----------------- SIDEBAR -------------------->
                <div class="sidebar">
                    <a class="menu-item active">
                        <span><i class="uil uil-home"></i></span>
                        <h3>Home</h3>   
                    </a>
                    <a href="pages/profile.html" class="menu-item">
                        <span><i class="uil uil-user"></i></span>
                        <h3>Profile</h3>
                    </a>
                    <a class="menu-item"  id="notifications">
                        <span><i class="uil uil-bell"><small class="notification-count">9+</small></i></span>
                        <h3>Notifications</h3>
                        <!--------------- NOTIFICATION POPUP --------------->
                        <div class="notifications-popup">
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-2.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>Huzaifa</b> accepted your friend request
                                    <small class="text-muted">2 Days Ago</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-3.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>John Doe</b> commented on your post
                                    <small class="text-muted">1 Hour Ago</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-4.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>Papa ki Pari</b> and <b>283 Others</b> liked your post
                                    <small class="text-muted">4 Minutes Ago</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-5.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>Doris Y. Lartey</b> commented on a post you are tagged in
                                    <small class="text-muted">2 Days Ago</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-6.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>Keyley Jenner</b> commented on a post you are tagged in
                                    <small class="text-muted">1 Hour Ago</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-7.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>Jane Doe</b> commented on your post
                                    <small class="text-muted">1 Hour Ago</small>
                                </div>
                            </div>
                        </div>
                        <!--------------- END NOTIFICATION POPUP --------------->
                    </a>
                    <a class="menu-item" id="messages-notifications">
                        <span><i class="uil uil-envelope-alt"><small class="notification-count">6</small></i></span>
                        <h3>Messages</h3>
                    </a>
                    <a class="menu-item">
                        <span><i class="uil uil-setting"></i></span>
                        <h3>Setting</h3>
                    </a>
                </div>
                <!----------------- END OF SIDEBAR -------------------->
            </div>

            <!----------------- MIDDLE -------------------->
            <div class="middle">
                 <!----------------- STORIES -------------------->
                <div class="stories">
                    <div class="story">
                        <div class="profile-photo">
                            <img src="./images/profile-8.jpg">
                        </div>
                        <p class="name">Your Story</p>
                    </div>
                    <div class="story">
                        <div class="profile-photo">
                            <img src="./images/profile-9.jpg">
                        </div>
                        <p class="name">Lila James</p>
                    </div>
                    <div class="story">
                        <div class="profile-photo">
                            <img src="./images/profile-10.jpg">
                        </div>
                        <p class="name">Winnie Haley</p>
                    </div>
                    <div class="story">
                        <div class="profile-photo">
                            <img src="./images/profile-11.jpg">
                        </div>
                        <p class="name">Daniel Bale</p>
                    </div>
                    <div class="story">
                        <div class="profile-photo">
                            <img src="./images/profile-12.jpg">
                        </div>
                        <p class="name">Jane Doe</p>
                    </div>
                    <div class="story">
                        <div class="profile-photo">
                            <img src="./images/profile-13.jpg">
                        </div>
                        <p class="name">Tina White</p>
                    </div>
                </div>
                <!----------------- END OF STORIES -------------------->
                <form action="" class="create-post">
                    <div class="profile-photo">
                        <img src="./images/profile-1.png">
                    </div>
                    <input type="text" placeholder="What's on your mind, Ahad ?" id="create-post">
                    <input type="submit" value="Post" class="btn btn-primary">
                </form>
                <!----------------- FEEDS -------------------->
                <div class="feeds">
                    <!----------------- FEED 1 -------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-13.jpg">
                                </div>
                                <div class="info">
                                    <h3>Lana Rose</h3>
                                    <small>Dubai, 15 Minutes Ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-1.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-thumbs-down"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Ernest Achiever</b> and <b>2, 323 others</b></p>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Disliked by <b>Ernest Achiever</b> and <b>10 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Lana Rose</b> Lorem ipsum dolor sit quisquam eius. 
                            <span class="harsh-tag">#lifestyle</span></p>
                        </div>

                        <div class="comments text-muted">
                            View all 277 comments
                        </div>
                    </div>
                    <!----------------- END OF FEED 1 -------------------->

                    <!----------------- FEED 2 -------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-10.jpg">
                                </div>
                                <div class="info">
                                    <h3>Clara Dwayne</h3>
                                    <small>Miami, 2 Hours Ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-3.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-thumbs-down"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-11.jpg"></span>
                            <span><img src="./images/profile-5.jpg"></span>
                            <span><img src="./images/profile-16.jpg"></span>
                            <p>Liked by <b>Diana Rose</b> and <b>200 others</b></p>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-11.jpg"></span>
                            <span><img src="./images/profile-5.jpg"></span>
                            <span><img src="./images/profile-16.jpg"></span>
                            <p>Disliked by <b>Diana Rose</b> and <b>10 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Clara Dwayne</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fugiat? Ipsam voluptatibus beatae facere eos harum voluptas distinctio, officia, facilis sed quisquam esse, assumenda minima ut. Excepturi sit quis reiciendis! 
                            <span class="harsh-tag">#lifestyle</span></p>
                        </div>

                        <div class="comments text-muted">
                            View all 100 comments
                        </div>
                    </div>
                    <!----------------- END OF FEED 2 -------------------->

                    <!----------------- FEED 3 -------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-4.jpg">
                                </div>
                                <div class="info">
                                    <h3>Rosalinda Clark</h3>
                                    <small>New York, 50 Minutes Ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-4.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-thumbs-down"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-12.jpg"></span>
                            <span><img src="./images/profile-13.jpg"></span>
                            <span><img src="./images/profile-14.jpg"></span>
                            <p>Liked by <b>Clara Dwayne</b> and <b>300 others</b></p>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-12.jpg"></span>
                            <span><img src="./images/profile-13.jpg"></span>
                            <span><img src="./images/profile-14.jpg"></span>
                            <p>Disliked by <b>Clara Dwayne</b> and <b>10 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Rosalinda Clark</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ullam, quam voluptatibus natus ex corporis ea atque quisquam, necessitatibus, cumque eligendi aliquam nulla soluta hic. Obcaecati, tempore dignissimos! Esse cupiditate laborum ullam, quae necessitatibus, officiis, quaerat aspernatur illo voluptatum repellat perferendis voluptatem similique. Assumenda nostrum, eius sit laborum nesciunt deserunt!
                            <span class="harsh-tag">#lifestyle</span></p>
                        </div>

                        <div class="comments text-muted">
                            View all 50 comments
                        </div>
                    </div>
                    <!----------------- END OF FEED 3 -------------------->

                    <!----------------- FEED 4 -------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-5.jpg">
                                </div>
                                <div class="info">
                                    <h3>Alexandria Riana</h3>
                                    <small>Dubai, 1 Hour Ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-5.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-thumbs-down"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Lana Rose</b> and <b>80 others</b></p>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Disliked by <b>Lana Rose</b> and <b>8 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Alexandria Riana</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto sunt itaque, in, enim non doloremque velit unde nihil vitae impedit dolorum, distinctio ab deleniti! 
                            <span class="harsh-tag">#lifestyle</span></p>
                        </div>

                        <div class="comments text-muted">
                            View all 540 comments
                        </div>
                    </div>
                    <!----------------- END OF FEED 4 -------------------->

                    <!----------------- FEED 5 -------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-7.jpg">
                                </div>
                                <div class="info">
                                    <h3>Keylie Hadid</h3>
                                    <small>Dubai, 3 Hours Ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-7.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-thumbs-down"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Riana Rose</b> and <b>226 others</b></p>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Disliked by <b>Riana Rose</b> and <b>6 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Keylie Hadid</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem obcaecati nisi veritatis quisquam eius accusantium rem quo repellat facilis neque.
                            <span class="harsh-tag">#lifestyle</span></p>
                        </div>

                        <div class="comments text-muted">
                            View all 199 comments
                        </div>
                    </div>
                    <!----------------- END OF FEED 5 -------------------->

                    <!----------------- FEED 6 -------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-15.jpg">
                                </div>
                                <div class="info">
                                    <h3>Benjamin Dwayne</h3>
                                    <small>New York, 5 Hours Ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-2.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-thumbs-down"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Ernest Achiever</b> and <b>20 others</b></p>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Disliked by <b>Ernest Achiever</b> and <b>2 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Benjamin Dwayne</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, consequuntur!
                            <span class="harsh-tag">#lifestyle</span></p>
                        </div>

                        <div class="comments text-muted">
                            View all 277 comments
                        </div>
                    </div>
                    <!----------------- END OF FEED 6 -------------------->

                    <!----------------- FEED 7 -------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-3.jpg">
                                </div>
                                <div class="info">
                                    <h3>Indiana Ellison</h3>
                                    <small>Qatar, 8 Hours Ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-6.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-thumbs-down"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Benjamin Dwayne</b> and <b>2, 323 others</b></p>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Disliked by <b>Benjamin Dwayne</b> and <b>200 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Indiana Ellison</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur itaque quasi autem pariatur ducimus eligendi, qui odio molestias at molestiae. 
                            <span class="harsh-tag">#lifestyle</span></p>
                        </div>

                        <div class="comments text-muted">
                            View all 277 comments
                        </div>
                    </div>
                    <!----------------- END OF FEED 7 -------------------->
                </div>
                <!----------------- END OF FEEDS -------------------->
            </div>
             <!----------------- END OF MIDDLE -------------------->

            <!----------------- RIGHT -------------------->
            <div class="right">
                <!------- FRIEND REQUEST ------->
                <div class="friend-requests">
                    <h4>People You May Know</h4>
                    <div class="request">
                        <div class="info">
                            <div class="profile-photo">
                                <img src="./images/profile-20.jpg">
                            </div>
                            <div>
                                <h5>Rimsha Khan</h5>
                                <p class="text-muted">8 mutual friends</p>
                            </div>
                        </div>
                        <div class="action">
                            <button class="btn btn-primary">
                                Add
                            </button>
                            <button class="btn">
                                Ignore
                            </button>
                        </div>
                    </div>
                    <div class="request">
                        <div class="info">
                            <div class="profile-photo">
                                <img src="./images/profile-18.jpg">
                            </div>
                            <div>
                                <h5>Nelson Mandela</h5>
                                <p class="text-muted">2 mutual friends</p>
                            </div>
                        </div>
                        <div class="action">
                            <button class="btn btn-primary">
                                Add
                            </button>
                            <button class="btn">
                                Ignore
                            </button>
                        </div>
                    </div>

                </div>
                <!------- MESSAGES ------->
                <div class="messages">
                    <div class="heading">
                        <h4>Messages</h4>
                        <i class="uil uil-edit"></i>
                    </div>
                    <!------- SEARCH BAR ------->
                    <div class="search-bar">
                        <i class="uil uil-search"></i>
                        <input type="search" placeholder="Search messages" id="message-search">
                    </div>
                    <!------- MESSAGES CATEGORY ------->
                    <div class="category">
                        <h6 class="active">Primary</h6>
                        <h6>General</h6>
                        <h6 class="message-requests">Requests (7)</h6>
                    </div>
                    <!------- MESSAGES ------->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile1.jpg">
                        </div>
                        <div class="message-body">
                            <h5>Amna Ali</h5>
                            <p class="text-muted">Just woke up!!!</p>
                        </div>
                    </div>
                    <!------- MESSAGES ------->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-6.jpg">
                        </div>
                        <div class="message-body">
                            <h5>Daniella Jackson</h5>
                            <p class="text-bold">2 new messages</p>
                        </div>
                    </div>
                    <!------- MESSAGES ------->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-8.jpg">
                            <div class="active"></div>
                        </div>
                        <div class="message-body">
                            <h5>Chantel Msiza</h5>
                            <p class="text-muted">lol u right</p>
                        </div>
                    </div>
                    <!------- MESSAGES ------->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-10.jpg">
                        </div>
                        <div class="message-body">
                            <h5>Juliet Makarey</h5>
                            <p class="text-muted">Birtday Tomorrow</p>
                        </div>
                    </div>
                    <!------- MESSAGES ------->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-3.jpg">
                            <div class="active"></div>
                        </div>
                        <div class="message-body">
                            <h5>Keylie Hadid</h5>
                            <p class="text-bold">5 new messages</p>
                        </div>
                    </div>
                    <!------- MESSAGES ------->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-15.jpg">
                        </div>
                        <div class="message-body">
                            <h5>Benjamin Dwayne</h5>
                            <p class="text-muted">haha got that!</p>
                        </div>
                    </div>
                </div>
                <!------- END OF MESSAGES ------->
                
            </div>
            <!----------------- END OF RIGHT -------------------->
        </div>
    </main>
      `;
    }
  }
  
  customElements.define('main-component', Main);
  