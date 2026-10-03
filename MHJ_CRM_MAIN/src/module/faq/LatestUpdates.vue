<template>
  <div class="card">
    <div class="card-header faq-header pb-0">
      <h5 class="d-inline-block">Latest Updates</h5>
      <span class="pull-right d-inline-block">See All</span>
    </div>
    <div class="card-body faq-body">
      <div class="d-flex updates-faq-main">
        <div class="updates-faq">
          <vue-feather :type="'rotate-cw'" :class="'font-primary'" />
        </div>
        <div class="flex-grow-1 updates-bottom-time">
          <p>
            <a href="#">David Linner </a>
            requested money back for a double debit card charge
          </p>
          <p>10 minutes ago</p>
        </div>
      </div>
      <div class="d-flex updates-faq-main">
        <div class="updates-faq">
          <vue-feather :type="'dollar-sign'" :class="'font-primary'" />
        </div>
        <div class="flex-grow-1 updates-bottom-time">
          <p>All sellers have received monthly payouts</p>
          <p>2 hours ago</p>
        </div>
      </div>
      <div class="d-flex updates-faq-main">
        <div class="updates-faq">
          <vue-feather :type="'link'" :class="'font-primary'" />
        </div>
        <div class="flex-grow-1 updates-bottom-time">
          <p>
            User Christopher
            <a href="#">Wallace</a>
            is on hold and awaiting for staff reply
          </p>
          <p>45 minutes ago</p>
        </div>
      </div>
      <div class="d-flex updates-faq-main">
        <div class="updates-faq">
          <vue-feather :type="'check'" :class="'font-primary'" />
        </div>
        <div class="flex-grow-1 updates-bottom-time">
          <p>
            Ticket #43683 has been closed by
            <a href="#">Victoria Wilson</a>
          </p>
          <p>Dec 7, 11:48</p>
        </div>
      </div>
    </div>
  </div>
</template>
