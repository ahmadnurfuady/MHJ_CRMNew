<template>
  <div class="error-wrapper maintenance-bg">
    <div class="container">
      <ul class="maintenance-icons">
        <li>
          <SolarIcon name="fa-gear" />
        </li>
        <li>
          <SolarIcon name="fa-gear" />
        </li>
        <li>
          <SolarIcon name="fa-gear" />
        </li>
      </ul>
      <div class="maintenance-heading">
        <h2 class="headline">Maintenance</h2>
      </div>
      <h4 class="sub-content">
        Our site is currently under maintenance we will be back shortly
        <br />
        thank you for patience
      </h4>
      <div>
        <router-link class="btn btn-primary-gradien btn-lg text-light" :to="'/'"
          >Back To Home Page</router-link
        >
      </div>
    </div>
  </div>
</template>
