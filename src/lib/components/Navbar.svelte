<script lang="ts">
  import { page } from "$app/state";
</script>

<header id="header" class="header sticky-top">
  <div class="topbar d-flex align-items-center">
    <div
      class="container d-flex justify-content-center justify-content-md-between"
    >
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-phone-fill d-flex align-items-center ms-4">
          ទំនាក់ទំនង ឬ<i class="bi bi-telegram mx-2"></i> តេឡេក្រាម :
          <a
            target="_blank"
            href="https://t.me/an_channean"
            class=" text-decoration-none"
          >
            066 552 444
          </a>
          &nbsp; /
          <a
            target="_blank"
            href="https://t.me/kornseheng"
            class=" text-decoration-none"
          >
            096 99 44 681
          </a>
        </i>
      </div>
    </div>
  </div>
  <!-- End Top Bar -->

  <div class="branding d-flex align-items-center py-0">
    <div
      class="container position-relative d-flex align-items-center justify-content-between"
    >
      <a href="/" class="logo d-flex align-items-center me-auto">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <img src="/logo_krupet.webp" alt="Bootstrap" height="45" />
        <h1 class="sitename text-primary">គ្រូពេទ្យ</h1>
      </a>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li>
            <a href="/" class:active={page.url.pathname === "/"}
              >ទំព័រដើម<br /></a
            >
          </li>
          <li><a href="/#services">សេវាកម្ម</a></li>
          <li><a href="/#departments">កញ្ចប់សេវាកម្ម</a></li>
          <li><a href="/#doctors">អ្នកបង្កើត</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a class="cta-btn d-none d-sm-block" href="/#report">ទម្រង់របាយការណ៏</a>
    </div>
  </div>
</header>
