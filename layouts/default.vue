<template>
  <div>
    <div style="margin: 90px">
      <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
        <b-navbar-brand to="/" class="themeFont">
          <img src="~/assets/img/hippo_001_footprint.webp" />
          TeppeiKataoka_____</b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav style="vertical-align: middle">
            <b-nav-item href="#" class="under">Link</b-nav-item>

            <b-nav-item class="under">
              <nuxt-link to="/about">About</nuxt-link>
            </b-nav-item>

            <b-nav-item
              href="https://github.com/teppy0422/blog"
              target="_blank"
              class="under"
              ><b-icon
                icon="github"
                aria-hidden="true"
                style="margin-right: 2px"
              ></b-icon
              >Source</b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">日本語</b-dropdown-item>
              <b-dropdown-item href="#">英語</b-dropdown-item>
              <b-dropdown-item href="#">中国語</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: (var(--light-black));
  &:link {
    color: blue;
  }
  &:visited {
    color: (var(--light-black));
  }
  &:hover {
    color: #000000;
  }
}
.navbar-light {
  color: #000000;
}
.nav-link {
  color: red;
  color: red;
}
</style>
