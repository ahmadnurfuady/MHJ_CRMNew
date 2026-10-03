<template>
  <Card :headerTitle="'List Group Scrollspy'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Implement a List Group Scrollspy by assigning a <code>v-scrollspy</code> directive to the
        scrollable content area with a <code>target</code> that matches the list group container.
        Each <code>list-group-item</code> uses an <code>href</code> pointing to the corresponding
        section ID. As you scroll through the content, the active link in the sidebar is updated
        dynamically with the <code>active</code> class.
      </p>
    </template>

    <div class="row gap-sm-0 gap-3">
      <div class="col-sm-4">
        <div class="list-group" id="list-example">
          <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
          <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
          <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
          <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
        </div>
      </div>

      <div class="col-sm-8">
        <div
          class="scrollspy-example-3 custom-scrollbar"
          v-scrollspy="{ target: '#list-example', rootMargin: '0px 0px -40%', smoothScroll: true }"
        >
          <h6 id="list-item-1">Item 1</h6>
          <p>
            This content is a stand-in for the scrollspy page. You'll notice that the relevant
            navigation link is highlighted as you scroll down the page. It appears again in the
            component example. Here, we'll continue to add sample copy to highlight the scrolling
            and highlighting.Keep in mind that the JavaScript plugin tries to pick the right element
            among all that may be visible. Multiple visible scrollspy targets at the same time may
            cause some issues.
          </p>
          <h6 id="list-item-2">Item 2</h6>
          <p>
            For the scrollspy page, this is some placeholder content. Take note of the highlighted
            navigation link at the bottom of the page as you scroll down. It appears again and again
            in the component example. To highlight the scrolling and highlighting, we're going to
            keep adding more sample copy here.Keep in mind that the JavaScript plugin tries to pick
            the right element among all that may be visible. Multiple visible scrollspy targets at
            the same time may cause some issues.
          </p>
          <h6 id="list-item-3">Item 3</h6>
          <p>
            The content that appears here is a placeholder for the scrollspy page. The relevant
            navigation link is highlighted as you scroll down the page. The component example
            contains repetitions of it. In order to highlight the scrolling and highlighting, we
            will continue to add more sample copy here.Keep in mind that the JavaScript plugin tries
            to pick the right element among all that may be visible. Multiple visible scrollspy
            targets at the same time may cause some issues.
          </p>
          <h6 id="list-item-4">Item 4</h6>
          <p>
            The content that appears here is a placeholder for the scrollspy page. The relevant
            navigation link is highlighted as you scroll down the page. The component example
            contains repetitions of it. In order to highlight the scrolling and highlighting, we
            will continue to add more sample copy here.Keep in mind that the JavaScript plugin tries
            to pick the right element among all that may be visible. Multiple visible scrollspy
            targets at the same time may cause some issues.
          </p>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
