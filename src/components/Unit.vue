<template>
  <div class="main-wrapper">
    <d-navbar toggleable="md" type="dark" theme="primary">
      <d-container>
      <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
      <d-navbar-brand>
          <h6 class="text-white my-auto mr-4">Shards Vue</h6>
      </d-navbar-brand>
      <d-collapse is-nav id="nav-collapse">
        <d-navbar-nav>
            <d-nav-item href="#">Home</d-nav-item>
            <d-nav-item href="#">About</d-nav-item>
            <d-nav-item href="#">Services</d-nav-item>
        </d-navbar-nav>
      </d-collapse>
      <d-btn theme="white" size="sm" outline>Contact</d-btn>
      </d-container>
    </d-navbar>
    <d-container class="py-4">
      <h5 class="mb-4">Add New Post</h5>
      <d-card class="w-100">
        <d-card-body class="p-3">
          <d-form>
            <d-form-row>
              <d-input class="mb-3" placeholder="Post title" />
            </d-form-row>
            <d-form-row>
              <d-textarea class="mb-3" placeholder="Post content" :rows="6" />
            </d-form-row>
            <d-form-row class="justify-content-between">
              <d-button size="sm" type="submit">Publish</d-button>
              <d-button size="sm" outline theme="warning" class="ml-auto">Cancel</d-button>
            </d-form-row>
          </d-form>
        </d-card-body>
      </d-card>
    </d-container>
  </div>
</template>

<style>
.main-wrapper {
  background: #f9f9f9;
  min-height: 100vh;
}
</style>