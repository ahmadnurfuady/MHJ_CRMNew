<template>
  <div class="container" id="print-section">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="invoice">
              <div>
                <div>
                  <div class="row">
                    <InvoiceSixHeader />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-4">
                    <div class="d-flex">
                      <div class="media-left">
                        <img
                          class="media-object rounded-circle img-60"
                          :src="getImages('user/1.jpg')"
                          alt="user"
                        />
                      </div>
                      <div class="flex-grow-1 m-l-20">
                        <h4 class="media-heading">Johan Deo</h4>
                        <p>JohanDeo&#64;gmail.com<br /><span>555-555-5555</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="text-md-end" id="project">
                      <h6>Project Description</h6>
                      <p>
                        You're Only As Good As Your Last Collection, Which Is An Enormous Pressure.
                        Jeans Represent Democracy In Fashion.Fashion Is About Dressing According To
                        What's Fashionable.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="table-responsive invoice-table custom-scrollbar" id="table">
                    <InvoiceSixTable />
                  </div>
                  <div class="row">
                    <div class="col-md-8">
                      <div>
                        <p class="legal">
                          <strong>Thank you for your business!</strong>  Payment is expected within
                          31 days; please process this invoice within that time. There will be a 5%
                          interest charge per month on late invoices.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <form class="text-md-end text-center">
                        <input
                          type="image"
                          :src="getImages('other-images/paypal.png')"
                          name="submit"
                          alt="PayPal - The safer, easier way to pay online!"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 text-center mt-3 print-btn">
                <button class="btn btn btn-primary me-2" type="button" @click="handlePrint()">
                  Print
                </button>
                <button class="btn btn-secondary" type="button">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
import { defineAsyncComponent } from 'vue'

const InvoiceSixTable = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceSix/Table.vue')
)
const InvoiceSixHeader = defineAsyncComponent(
  () => import('@/module/ecommerce/invoice/invoiceSix/Header.vue')
)

function handlePrint() {
  window.print()
}
</script>
