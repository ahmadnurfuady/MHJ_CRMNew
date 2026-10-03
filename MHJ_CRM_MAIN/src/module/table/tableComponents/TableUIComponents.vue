<template>
  <Card :headerTitle="'UI Components'" :padding="false" :cardBodyClass="'p-0'">
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td>Button</td>
                <td class="w-50">
                  <button class="btn btn-primary">Default Button</button>
                </td>
                <td>
                  <span
                    >Bootstrap includes six predefined button styles, each serving its own semantic
                    purpose.</span
                  >
                </td>
              </tr>
              <tr>
                <td>Round Buttons</td>
                <td>
                  <button class="btn btn-pill btn-primary">Default Button</button>
                </td>
                <td>
                  <span>Use <code>.btn-pill</code> class to button for round buttons.</span>
                </td>
              </tr>
              <tr>
                <td>Button Dropdowns</td>
                <td>
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Primary
                  </button>
                  <div class="dropdown-menu">
                    <h6 class="dropdown-header">Dropdown Header</h6>
                    <a class="dropdown-item" href="#">Action</a
                    ><a class="dropdown-item" href="#">Another action</a
                    ><a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </td>
                <td>
                  <span
                    >Use <code>.dropdown-toggle</code> class to button for dropdown-toggle.</span
                  >
                </td>
              </tr>
              <tr>
                <td>Basic Button Group</td>
                <td>
                  <div class="btn-group">
                    <button class="btn btn-primary">Primary</button>
                    <button class="btn btn-secondary">Secondary</button>
                    <button class="btn btn-success">Success</button>
                  </div>
                </td>
                <td>
                  <span>Use <code>btn-group</code> class to button for <code>div</code>.</span>
                </td>
              </tr>
              <tr>
                <td>Buttons with Icon</td>
                <td>
                  <button class="btn btn-primary">
                    <i class="fa-solid fa-circle-info"></i>
                    Primary
                  </button>
                </td>
                <td>
                  <span
                    >Bootstrap includes six predefined button styles, each serving its own semantic
                    purpose.</span
                  >
                </td>
              </tr>
              <tr>
                <td>Icon Button</td>
                <td>
                  <button class="btn btn-primary">
                    <i class="fa-solid fa-camera"></i>
                  </button>
                </td>
                <td>
                  <span>Simple icon button</span>
                </td>
              </tr>
              <tr>
                <td>Loading Buttons</td>
                <td>
                  <button class="btn btn-primary">
                    <i class="fa-solid fa-spin fa-spinner me-2"></i>
                    Expand UP
                  </button>
                </td>
                <td>
                  <span>Expand animation buttons</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
