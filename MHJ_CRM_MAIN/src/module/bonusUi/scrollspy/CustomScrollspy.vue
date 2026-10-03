<template>
  <Card
    :headerTitle="'Custom Scrollspy'"
    :border="true"
    :padding="false"
    :cardBodyClass="'nested-scrollspy custom-scrollspy-section'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        The Custom Scrollspy allows you to highlight active navigation links as you scroll through
        uniquely styled content sections. Apply <code>v-scrollspy</code> to the scrollable container
        with a <code>target</code> referencing the vertical nav. Each <code>nav-link</code> should
        link to a section ID like <code>#home1</code>, and as you scroll, the corresponding link
        updates with an <code>active</code> class. Custom arrows and nested layouts can be used to
        enhance visual hierarchy and interactivity.
      </p>
    </template>

    <div class="row gap-xl-0 gap-4">
      <div class="col-xxl-2 col-xl-3">
        <nav class="h-100 flex-column align-items-stretch pe-4" id="navbar-scrollspy4">
          <nav class="nav nav-pills flex-column">
            <a class="nav-link" href="#home1">
              Home
              <div class="custom-arrow"></div>
            </a>
            <a class="nav-link" href="#about-me">
              About Me
              <div class="custom-arrow"></div>
            </a>
            <a class="nav-link" href="#project1">
              Projects
              <div class="custom-arrow"></div>
            </a>
            <a class="nav-link" href="#experience1"
              >Experiences
              <div class="custom-arrow"></div>
            </a>
          </nav>
        </nav>
      </div>
      <div class="col-xxl-10 col-xl-9">
        <div
          class="scrollspy-example-5 custom-scrollbar"
          v-scrollspy="{
            target: '#navbar-scrollspy4',
            rootMargin: '0px 0px -40%',
            smoothScroll: true,
          }"
        >
          <div id="home1">
            <h6>Home</h6>
            <div class="common-align gap-3 align-items-lg-start">
              <div class="flex-shrink-0">
                <img class="img-fluid" :src="getImages('banner/2.jpg')" alt="" />
              </div>
              <div class="flex-grow-1">
                <span>
                  This content is a stand-in for the scrollspy page. You'll notice that the relevant
                  navigation link is highlighted as you scroll down the page. It appears again in
                  the component example. Here, we'll continue to add sample copy to highlight the
                  scrolling and highlighting.Remember that the JavaScript plugin selects the
                  appropriate element from among those that might be displayed. There could be some
                  problems if there are several scrollspy targets showing at once.Keep in mind that
                  the JavaScript plugin tries to pick the right element among all that may be
                  visible. Multiple visible scrollspy targets at the same time may cause some
                  issues.</span
                >
              </div>
            </div>
          </div>
          <div class="common-p-space" id="about-me">
            <h6>About Me</h6>
            <div class="about-box common-align gap-3">
              <img class="img-fluid" :src="getImages('avtar/11.jpg')" alt="user" />
              <div>
                <p>
                  My name is Lichi Wallien is. I have four years of experience as a software
                  engineer and finished my BE in 2022. I developed PHP and MySQL when I worked for
                  Lavender, and I believe those skills will be useful in this position.
                </p>
                <a class="btn btn-primary" href="#"
                  >Read more
                  <span class="ms-1">
                    <SvgIcon :icon="'arrowright'" :class="'fill-icon'" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="common-p-space" id="project1">
            <h6>Projects</h6>
            <div class="row g-3 main-project">
              <div class="col-xl-12">
                <div class="light-card attendance-card">
                  <div class="left-overview-content">
                    <div class="svg-box">
                      <SvgIcon :icon="'e-commerce-cart'" />
                    </div>
                  </div>
                  <div class="right-overview-content">
                    <div>
                      <h6>Websites for E-Commerce</h6>
                      <span class="text-muted text-ellipsis"
                        >Created a comprehensive e-commerce platform with the goal of improving the
                        online purchasing experience. The project's goals were to offer a smooth
                        navigation system, a user-friendly interface, and strong functionality to
                        accommodate a wide variety of products.</span
                      >
                    </div>
                    <div class="d-flex marks-count">
                      <h5>89/<sub class="text-muted">100</sub></h5>
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="icon-arrow-up txt-success pe-2 f-w-600"></i
                        ><span class="txt-success f-w-500">+80%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="light-card attendance-card">
                  <div class="left-overview-content">
                    <div class="svg-box">
                      <SvgIcon :icon="'robotics-project'" />
                    </div>
                  </div>
                  <div class="right-overview-content">
                    <div>
                      <h6>Robotics Sensor</h6>
                      <span class="text-muted text-ellipsis"
                        >Lidar sensor array was put into use for obstacle identification and
                        real-time mapping. With the use of this data, the rover creates an extensive
                        picture of its environment that helps it safely traverse difficult
                        terrain.</span
                      >
                    </div>
                    <div class="d-flex marks-count">
                      <h5>95/<sub class="text-muted">100</sub></h5>
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="icon-arrow-up txt-success pe-2 f-w-600"></i
                        ><span class="txt-success f-w-500">+97%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="light-card attendance-card">
                  <div class="left-overview-content">
                    <div class="svg-box">
                      <SvgIcon :icon="'watch-app'" />
                    </div>
                  </div>
                  <div class="right-overview-content">
                    <div>
                      <h6>Watch Application</h6>
                      <span class="text-muted text-ellipsis"
                        >Keeps an eye on key health indicators like heart rate, steps taken,
                        calories burnt, and sleep habits. makes use of cutting-edge algorithms to
                        deliver precise and useful health insights.</span
                      >
                    </div>
                    <div class="d-flex marks-count">
                      <h5>92/<sub class="text-muted">100</sub></h5>
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="icon-arrow-up txt-success pe-2 f-w-600"></i
                        ><span class="txt-success f-w-500">+94%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="common-p-space" id="experience1">
            <h6>Experience</h6>
            <div class="row">
              <div class="col experience-section">
                <p class="mb-2">Wordpress</p>
                <div class="progress">
                  <div
                    class="progress-bar text-center"
                    role="progressbar"
                    :style="{ width: '85%' }"
                  >
                    50%
                  </div>
                </div>
                <p class="mb-2">PHP</p>
                <div class="progress">
                  <div
                    class="progress-bar text-center"
                    role="progressbar"
                    :style="{ width: '60%' }"
                  >
                    30%
                  </div>
                </div>
                <p class="mb-2">MYSQL</p>
                <div class="progress">
                  <div
                    class="progress-bar text-center"
                    role="progressbar"
                    :style="{ width: '30%' }"
                  >
                    60%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
