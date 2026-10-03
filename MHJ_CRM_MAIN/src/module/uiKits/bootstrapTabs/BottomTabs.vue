<template>
  <Card :headerTitle="'Bottom Tabs'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code> active </code> class on the<code> nav-link</code>. It is possible to build a
        arrow tab with the <code>new-item</code> class.
      </p>
    </template>
    <div class="bg-navbar bottom-navbar">
      <div class="tab-content">
        <div class="tab-pane fade show active">
          <template v-if="activeTab === 'css'">
            <div class="common-flex">
              <img :src="getImages('tree/css.png')" alt="css" />
              <h5>CSS</h5>
            </div>
            <div class="tab-paragraph">
              <i class="fa-solid fa-circle-arrow-right"></i>
              <p>
                "One of the three main web technologies is CSS. The terms "cascading" and "style,"
                with cascading indicating how one style can cascade from another, are actually the
                key to understanding CSS, which stands for Cascading Style Sheets."
              </p>
            </div>
            <div class="tab-paragraph">
              <i class="fa-solid fa-circle-arrow-right"></i>
              <p>To specify how HTML code will appear on a website, utilize CSS.</p>
            </div>
          </template>
          <template v-else-if="activeTab === 'vendors'">
            <div class="common-flex">
              <img :src="getImages('tree/vendor.png')" alt="vendor" />
              <h5>Vendors</h5>
            </div>
            <div class="tab-paragraph">
              <i class="fa-solid fa-circle-arrow-right"></i>
              <p>
                To improve the development of your website, find a carefully chosen list of premier
                suppliers. Use our dependable network to locate the ideal partners for the
                accomplishment of your project.
              </p>
            </div>
            <div class="tab-paragraph">
              <i class="fa-solid fa-circle-arrow-right"></i>
              <p>
                Cutting-edge design tools, or specialized services, our curated list ensures you
                have access to the best resources for a seamless and successful website development
                experience.
              </p>
            </div>
          </template>
          <template v-else-if="activeTab === 'javascript'">
            <div class="common-flex">
              <img :src="getImages('tree/js.png')" alt="javascript" />
              <h5>Javascript</h5>
            </div>
            <div class="tab-paragraph">
              <i class="fa-solid fa-circle-arrow-right"></i>
              <p>
                Development of interactive and adaptable websites is made possible by JavaScript,
                the web's dynamic programming language.
              </p>
            </div>
            <div class="tab-paragraph">
              <i class="fa-solid fa-circle-arrow-right"></i>
              <p>
                Building strong and interactive online apps requires JavaScript, which is essential
                for everything from enabling asynchronous requests to designing captivating user
                interfaces.
              </p>
            </div>
          </template>
        </div>
      </div>
      <ul class="nav nav-pills nav-primary" id="myTab" role="tablist">
        <li class="nav-item" v-for="tab in bottomTab" :key="tab.id">
          <a
            class="nav-link"
            :class="{ active: activeTab === tab.value }"
            href="#"
            @click.prevent="handleTab(tab.value)"
          >
            <img :src="getImages(tab.image)" :alt="tab.value" />{{ tab.title }}
          </a>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

import { bottomTab } from '@/core/data/uiKits/tabs'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const activeTab = ref<string>('vendors')

function handleTab(value: string) {
  activeTab.value = value
}
</script>
