<template>
  <Card
    :headerTitle="'Navbar Scrollspy'"
    :border="true"
    :padding="false"
    :cardBodyClass="'navbar-scrollspy'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use Bootstrap's scrollspy by adding <code>data-bs-spy="scroll"</code> to a scrollable
        container and <code>data-bs-target="#navId"</code> where <code>navId</code> matches the
        unique ID of the associated navigation. Scroll the area below the navbar and watch the
        <code>active</code> class update based on the current scroll position.
      </p>
    </template>
    <nav class="navbar bg-body-tertiary px-3 mb-3" id="navbar-scrollspy1">
      <a class="navbar-brand" href="#"
        ><img class="img-fluid for-dark" :src="getImages('logo/logo.png')" alt="logo" /><img
          class="img-fluid for-light"
          :src="getImages('logo/logo_dark.png')"
          alt="logo"
      /></a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading1">Section 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading2">Section 2</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Dropdown</a
          >
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#scrollspyHeading3">Section 3</a></li>
            <li><a class="dropdown-item" href="#scrollspyHeading4">Section 4</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#scrollspyHeading5">Section 5</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div
      class="scrollspy-example bg-body-tertiary p-3 rounded-2 custom-scrollbar"
      id="scrollspy-container"
      v-scrollspy="{
        target: '#navbar-scrollspy1',
        rootMargin: '0px 0px -40%',
        smoothScroll: true,
      }"
    >
      <h6 id="scrollspyHeading1">Section 1</h6>
      <p>
        For the scrollspy page, this is some placeholder content. Take note of the highlighted
        navigation link at the bottom of the page as you scroll down. It appears again and again in
        the component example. To highlight the scrolling and highlighting, we're going to keep
        adding more sample copy here.
      </p>
      <h6 id="scrollspyHeading2">Section 2</h6>
      <p>
        The content that appears here is a placeholder for the scrollspy page. The relevant
        navigation link is highlighted as you scroll down the page. The component example contains
        repetitions of it. In order to highlight the scrolling and highlighting, we will continue to
        add more sample copy here.
      </p>
      <h6 id="scrollspyHeading3">Section 3</h6>
      <p>
        This is some stuff that is meant to be on the scrollspy page. Keep in mind that the relevant
        navigation link is highlighted as you scroll down the page. The component example uses it
        repeatedly. Here, we continue to add sample copy to highlight the scrolling and
        highlighting.
      </p>
      <h6 id="scrollspyHeading4">Section 4</h6>
      <p>
        This content is a stand-in for the scrollspy page. You'll notice that the relevant
        navigation link is highlighted as you scroll down the page. It appears again in the
        component example. Here, we'll continue to add sample copy to highlight the scrolling and
        highlighting.
      </p>
      <h6 id="scrollspyHeading5">Section 5</h6>
      <p>
        For the scrollspy page, this is some placeholder content. Take note of the highlighted
        navigation link at the bottom of the page as you scroll down. It appears again and again in
        the component example. To highlight the scrolling and highlighting, we're going to keep
        adding more sample copy here.
      </p>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
