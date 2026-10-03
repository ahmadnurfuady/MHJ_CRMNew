<template>
  <div class="card card-mb-faq xs-mt-search">
    <div class="card-header faq-header pb-0">
      <h5>Search articles</h5>
      <vue-feather :type="'help-circle'" />
    </div>
    <div class="card-body faq-body">
      <div class="faq-form">
        <input class="form-control" type="text" placeholder="Search.." />
        <vue-feather :type="'search'" class="search-icon" />
      </div>
    </div>
  </div>
</template>
