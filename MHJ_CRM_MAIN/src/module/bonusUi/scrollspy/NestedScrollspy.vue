<template>
  <Card
    :headerTitle="'Nested Scrollspy'"
    :border="true"
    :padding="false"
    :cardBodyClass="'nested-scrollspy'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Create a nested Scrollspy by structuring your navigation with parent and child links using
        <code>nav</code> elements and <code>href</code> attributes pointing to corresponding section
        IDs. Wrap the scrollable content in a container and apply <code>v-scrollspy</code> with a
        <code>target</code> matching the navigation's ID. As you scroll through the sections, both
        top-level and nested navigation links will automatically update with the
        <code>active</code> class.
      </p>
    </template>

    <div class="row g-4">
      <div class="col-xl-3 col-lg-4 col-md-5 xl-40 box-col-4e">
        <nav
          class="h-100 nested-scrollspy-menu flex-column align-items-stretch"
          id="navbar-scrollspy2"
        >
          <nav class="nav nav-pills flex-column">
            <a class="nav-link f-16 txt-dark" href="#item-1">Experience</a>
            <nav class="nav nav-pills flex-column">
              <a class="nav-link ms-3 my-1" href="#item-1-1">Web Development </a
              ><a class="nav-link ms-3 my-1" href="#item-1-2">Cyber Security</a>
            </nav>
            <a class="nav-link f-16 txt-dark" href="#item-2">Get in Touch</a
            ><a class="nav-link f-16 txt-dark" href="#item-3">Projects</a>
            <nav class="nav nav-pills flex-column">
              <a class="nav-link ms-3 my-1" href="#item-3-1">Group Projects</a
              ><a class="nav-link ms-3 my-1" href="#item-3-2">Individual Projects</a>
            </nav>
          </nav>
        </nav>
      </div>
      <div class="col-xl-9 col-lg-8 col-md-7 xl-60 box-col-8">
        <div
          class="scrollspy-example-2 custom-scrollbar"
          v-scrollspy="{
            target: '#navbar-scrollspy2',
            rootMargin: '0px 0px -40%',
            smoothScroll: true,
          }"
        >
          <div id="item-1">
            <h6 class="f-18">Experience</h6>
            <div class="common-align gap-lg-3 gap-1">
              <div class="flex-shrink-0">
                <SvgIcon :icon="'experience-scrollspy'" />
              </div>
              <div class="flex-grow-1">
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll
                  down the page, the appropriate navigation link is highlighted. It's repeated
                  throughout the component example. We keep adding some more example copy here to
                  emphasize the scrolling and highlighting.Keep in mind that the JavaScript plugin
                  tries to pick the right element among all that may be visible. Multiple visible
                  scrollspy targets at the same time may cause some issues.
                </p>
              </div>
            </div>
          </div>
          <div id="item-1-1">
            <h6>Experience / Web Development</h6>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.Keep in mind that the JavaScript plugin tries to pick the
              right element among all that may be visible. Multiple visible scrollspy targets at the
              same time may cause some issues. Try out several setups and see how the clear
              navigation signals that scrollspy offers improves user experience. On the other hand,
              you should be cautious when working with intricate layouts or scrollspy targets that
              overlap. Although the plugin makes an effort to choose the most pertinent aspect,
              there may occasionally be conflicts when there are several targets vying for the
              plugin's attention at once. You may take full advantage of scrollspy and improve the
              usability of your online application by anticipating problems and streamlining your
              page structure.
            </p>
          </div>
          <div id="item-1-2">
            <h6>Experience / Cyber Security</h6>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.Keep in mind that the JavaScript plugin tries to pick the
              right element among all that may be visible. Multiple visible scrollspy targets at the
              same time may cause some issues. It's important to remember that even while the
              JavaScript plugin uses visibility to determine which element is most relevant, having
              numerous scrollspy targets visible at once may cause confusion or unexpected behavior.
              In order to maximize usability and prevent any potential problems, it is therefore
              advised that you carefully organize your information when using scrollspy, making sure
              that sections are clearly distinguished from one another.
            </p>
            <p>
              In summary, Scrollspy is an effective solution that improves user engagement and
              navigation, giving visitors to your website a smooth surfing experience. You may
              improve the usability and interactivity of your web pages and make them easier to
              navigate by making proper use of its capabilities.
            </p>
          </div>
          <div id="item-2">
            <h6 class="f-18">Get in Touch</h6>
            <div class="common-align gap-lg-3 gap-1">
              <div class="flex-shrink-0">
                <SvgIcon :icon="'contact-us'" />
              </div>
              <div class="flex-grow-1">
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll
                  down the page, the appropriate navigation link is highlighted. It's repeated
                  throughout the component example. We keep adding some more example copy here to
                  emphasize the scrolling and highlighting.Keep in mind that the JavaScript plugin
                  tries to pick the right element among all that may be visible. Multiple visible
                  scrollspy targets at the same time may cause some issues. When using scrollspy,
                  it's important to remember best practices, particularly with regard to the
                  arrangement and labelling of your page elements. The combination of well-placed
                  scrollable targets and comprehensible HTML code guarantees optimal functionality
                  and accessibility for all users.
                </p>
                <p>
                  In summary, Scrollspy is an effective solution that improves user engagement and
                  navigation, giving visitors to your website a smooth surfing experience. You may
                  improve the usability and interactivity of your web pages and make them easier to
                  navigate by making proper use of its capabilities.
                </p>
              </div>
            </div>
          </div>
          <div id="item-3">
            <h6 class="f-18">Projects</h6>
            <div class="common-align gap-lg-3 gap-1">
              <div class="flex-shrink-0">
                <SvgIcon :icon="'project-info'" type="default" />
              </div>
              <div class="flex-grow-1">
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll
                  down the page, the appropriate navigation link is highlighted. It's repeated
                  throughout the component example. We keep adding some more example copy here to
                  emphasize the scrolling and highlighting.Keep in mind that the JavaScript plugin
                  tries to pick the right element among all that may be visible. Multiple visible
                  scrollspy targets at the same time may cause some issues.
                </p>
              </div>
            </div>
          </div>
          <div id="item-3-1">
            <h6>Projects / Group Projects</h6>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.Keep in mind that the JavaScript plugin tries to pick the
              right element among all that may be visible. Multiple visible scrollspy targets at the
              same time may cause some issues. When using scrollspy, it's important to remember best
              practices, particularly with regard to the arrangement and labelling of your page
              elements. The combination of well-placed scrollable targets and comprehensible HTML
              code guarantees optimal functionality and accessibility for all users.
            </p>
            <p>
              In summary, Scrollspy is an effective solution that improves user engagement and
              navigation, giving visitors to your website a smooth surfing experience. You may
              improve the usability and interactivity of your web pages and make them easier to
              navigate by making proper use of its capabilities.
            </p>
          </div>
          <div id="item-3-2">
            <h6>Projects / Individual Projects</h6>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.Keep in mind that the JavaScript plugin tries to pick the
              right element among all that may be visible. Multiple visible scrollspy targets at the
              same time may cause some issues. When using scrollspy, it's important to remember best
              practices, particularly with regard to the arrangement and labelling of your page
              elements. The combination of well-placed scrollable targets and comprehensible HTML
              code guarantees optimal functionality and accessibility for all users.
            </p>
            <p class="mb-0">
              In summary, Scrollspy is an effective solution that improves user engagement and
              navigation, giving visitors to your website a smooth surfing experience. You may
              improve the usability and interactivity of your web pages and make them easier to
              navigate by making proper use of its capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
