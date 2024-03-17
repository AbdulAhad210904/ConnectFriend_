class Navbar extends HTMLElement {
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
        /* =============== Navbar ============== */
        nav {
          width: 100%;
          background: var(--color-white);
          padding: 0.7rem 0;
          position: fixed;
          top: 0;
          z-index: 10;
        }

        nav .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .search-bar {
          background: var(--color-light);
          border-radius: var(--border-radius);
          padding: var(--search-padding);
        }

        .search-bar input[type="search"] {
          background: transparent;
          width: 30vw;
          margin-left: 1rem;
          font-size: 0.9rem;
          color: var(--color-dark);
        }

        nav .search-bar input[type="search"]::placeholder {
          color: var(--color-grey);
        }

        nav .create {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
      </style>
      <nav>
        <div class="container">
          <h2 class="logo">
            ConnecFriend
          </h2>
          <div class="search-bar">
            <i class="uil uil-search"></i>
            <input type="search" placeholder="Search for creators, inspirations, and projects">
          </div>
          <div class="create">
            <a href="#"><label class="btn btn-primary">Create</label></a>
            <div class="profile-photo">
              <a><img src="../images/profile-1.png" alt=""></a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);
