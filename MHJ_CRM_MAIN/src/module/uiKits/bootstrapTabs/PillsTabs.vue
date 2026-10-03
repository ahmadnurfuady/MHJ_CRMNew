<template>
  <Card :cardClass="'height-equal'" :headerTitle="'Pills Tabs'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">Use <code>class="nav-pills"</code> for tabs pill shape.</p>
    </template>
    <ul class="nav nav-pills nav-primary">
      <li class="nav-item" v-for="tab in pillsTab" :key="tab.id">
        <a
          class="nav-link"
          :class="{ active: activeTab === tab.value }"
          href="#"
          @click.prevent="handleTab(tab.value)"
          >{{ tab.title }}</a
        >
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active">
        <template v-if="activeTab === 'about'">
          <p class="pt-3">
            The ultimate goal of every web design is to create a site that will reach its audience
            and be useful to them. In order to achieve that, it is necessary to befriend Google's
            mechanisms and algorithms. There is no use of a pretty website, if it's displayed on a
            10th page of search results, because this way no one will ever find it. That brings us
            to the topic of Google's Website Ranking.Generally speaking, it's a list of pages and
            their keywords, sorted in the order of search results. The higher your place in the
            ranking is, the more people are likely to see your page.
          </p>
        </template>
        <template v-else-if="activeTab === 'contact'">
          <ul class="d-flex flex-column gap-1 pt-3">
            <li>
              Create professional web page design. Responsive, fully customizable with easy
              drag-n-drop nice page editor. Adjust colors, fonts, header and footer, layout and
              other design elements, as well as content and images.
            </li>
            <li>
              <strong>Visit Us: </strong> 4 Marigold Close, Glenmore Park, New South Wales, 2745
              Australia- 2745
            </li>
            <li><strong>Mail Us:</strong> SamuelMario@armyspy.com</li>
            <li><strong>Contact Number: </strong> (02) 4733 6337</li>
          </ul>
        </template>
        <template v-else-if="activeTab === 'blog'">
          <div class="pt-3 d-flex align-items-center gap-3 pills-blogger">
            <div class="blog-wrapper">
              <img
                class="blog-img"
                :src="getImages('dashboard-2/headphones.png')"
                alt="head-phone"
              />
            </div>
            <div class="blog-content">
              <p>
                <strong>Smart headphones</strong> — also called smart earbuds or hearable — are
                high-tech in-ear devices that do more than transmit audio. These headphones are
                usually wireless, and they can sync up with your phone, tablet, computer or other
                Bluetooth-enabled device. The main appeal of hearables is convenience, as they allow
                you to complete common tasks without directly accessing your phone or computer.
                Smart wireless headphones sync up to other devices using Bluetooth technology, and
                many of their features rely on data from your smartphone or computer.
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { pillsTab } from '@/core/data/uiKits/tabs'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const activeTab = ref<string>('blog')

function handleTab(value: string) {
  activeTab.value = value
}
</script>
