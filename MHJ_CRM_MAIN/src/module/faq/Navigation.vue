<template>
  <div class="card card-mb-faq">
    <div class="card-header faq-header pb-0">
      <h5>Navigation</h5>
      <vue-feather :type="'settings'" />
    </div>
    <div class="card-body faq-body">
      <div class="navigation-btn">
        <a class="btn btn-primary" href="#">
          <vue-feather :type="'message-square'" :class="'m-r-10'" />
          Ask Question
        </a>
      </div>
      <div class="navigation-option">
        <ul>
          <template v-for="(sections, index) in navigation" :key="index">
            <template v-for="(section, i) in sections.section" :key="i">
              <li>
                <a href="#">
                  <vue-feather :type="section.icon" />{{ section.title }}
                </a>
                <template v-if="section.badge">
                  <span class="badge badge-primary rounded-pill pull-right">{{
                    section.badgeText
                  }}</span>
                </template>
              </li>
            </template>
            <hr v-if="sections.section.length !== index + 1" />
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigation } from '@/core/data/faq'
</script>
